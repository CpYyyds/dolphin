#!/bin/bash
set -e

echo "========================================="
echo "DolphinScheduler 3.3.1 启动脚本"
echo "========================================="

# ========== 环境变量 ==========
export DOLPHINSCHEDULER_HOME=/opt/dolphinscheduler
export JAVA_HOME=/usr/local/openjdk-8
export PATH=$JAVA_HOME/bin:$PATH

# ✅ 支持环境变量或参数
COMPONENT=${1:-${COMPONENT:-"all"}}

echo "启动组件: $COMPONENT"

# ========== 基础验证（快速失败）==========
if [ ! -d "$DOLPHINSCHEDULER_HOME" ]; then
    echo "✗ 错误: DOLPHINSCHEDULER_HOME 目录不存在"
    exit 1
fi

if [ ! -x "$JAVA_HOME/bin/java" ]; then
    echo "✗ 错误: Java 不可执行"
    exit 1
fi

# ========== 插件目录处理 ==========
echo ""
echo "处理插件目录..."
if [ ! -d "$DOLPHINSCHEDULER_HOME/plugins" ]; then
    echo "✗ 错误: 插件目录不存在"
    exit 1
fi

# 整理插件结构（如果需要）
for plugin_type in alert-plugins datasource-plugins storage-plugins task-plugins; do
    PLUGIN_TYPE_DIR="$DOLPHINSCHEDULER_HOME/plugins/$plugin_type"
    if [ -d "$PLUGIN_TYPE_DIR" ]; then
        for plugin_dir in "$PLUGIN_TYPE_DIR"/*; do
            if [ -d "$plugin_dir" ]; then
                TARGET_DIR="$plugin_dir/target"
                if [ -d "$TARGET_DIR" ]; then
                    echo "  发现 target 目录: $TARGET_DIR"
                    # 复制（不是移动）target 中的 JAR 到插件目录
                    find "$TARGET_DIR" -maxdepth 1 -name "*.jar" -exec cp {} "$plugin_dir/" \; 2>/dev/null || true
                    echo "    ✓ 已复制 JAR 到 $plugin_dir/"
                fi
            fi
        done
    fi
done
#cd /opt/dolphinscheduler/plugins && \
#  for type in alert-plugins datasource-plugins storage-plugins task-plugins; do \
#    echo "处理 $type..."; \
#    find "$type" -type f -name "*.jar" -path "*/target/*" -exec mv {} "$type/" \; 2>/dev/null; \
#    echo "  完成: $(find "$type" -maxdepth 1 -name "*.jar" | wc -l) 个插件"; \
#  done && \
#echo "全部完成！"

# 创建插件软链接（如果不存在）
for service in master-server worker-server api-server alert-server; do
    SERVICE_PLUGINS="$DOLPHINSCHEDULER_HOME/$service/plugins"
    if [ ! -L "$SERVICE_PLUGINS" ]; then
        rm -rf "$SERVICE_PLUGINS" 2>/dev/null || true
        ln -sf "$DOLPHINSCHEDULER_HOME/plugins" "$SERVICE_PLUGINS"
    fi
done

echo "✓ 插件目录处理完成"

# ========== 🆕 检查并下载 MySQL 驱动 ==========
echo ""
echo "检查 MySQL 数据库驱动..."

LIBS_DIR="$DOLPHINSCHEDULER_HOME/libs"
MYSQL_DRIVER="$LIBS_DIR/mysql-connector-java-8.0.16.jar"

# 创建 libs 目录
mkdir -p "$LIBS_DIR"

# 下载 MySQL 8.0.16 驱动（兼容 MySQL 5.7）
if [ ! -f "$MYSQL_DRIVER" ]; then
    echo "下载 MySQL JDBC 驱动 (8.0.16)..."

    # 尝试使用 wget
    if command -v wget >/dev/null 2>&1; then
        wget -q -O "$MYSQL_DRIVER" \
            https://repo1.maven.org/maven2/mysql/mysql-connector-java/8.0.16/mysql-connector-java-8.0.16.jar
    # 尝试使用 curl
    elif command -v curl >/dev/null 2>&1; then
        curl -sL -o "$MYSQL_DRIVER" \
            https://repo1.maven.org/maven2/mysql/mysql-connector-java/8.0.16/mysql-connector-java-8.0.16.jar
    else
        echo "✗ 错误: 未找到 wget 或 curl 命令"
        echo "  请手动下载驱动到: $MYSQL_DRIVER"
        exit 1
    fi

    if [ -f "$MYSQL_DRIVER" ]; then
        echo "✓ MySQL 驱动下载成功"
        chmod 644 "$MYSQL_DRIVER"
    else
        echo "✗ MySQL 驱动下载失败"
        exit 1
    fi
else
    echo "✓ MySQL 驱动已存在"
fi

# 验证驱动文件
if [ -f "$MYSQL_DRIVER" ]; then
    DRIVER_SIZE=$(stat -f%z "$MYSQL_DRIVER" 2>/dev/null || stat -c%s "$MYSQL_DRIVER" 2>/dev/null)
    echo "  驱动文件: $MYSQL_DRIVER"
    echo "  文件大小: $DRIVER_SIZE bytes"
else
    echo "✗ 错误: MySQL 驱动文件不存在"
    exit 1
fi


# ========== 启动服务函数 ==========
start_service() {
    local SERVICE_NAME=$1
    local MAIN_CLASS=$2
    local SERVICE_HOME=$DOLPHINSCHEDULER_HOME/$SERVICE_NAME

    echo ""
    echo "启动 $SERVICE_NAME..."

    # 验证服务目录和配置
    if [ ! -d "$SERVICE_HOME" ]; then
        echo "✗ 错误: 服务目录不存在: $SERVICE_HOME"
        return 1
    fi

    if [ ! -f "$SERVICE_HOME/conf/application.yaml" ]; then
        echo "✗ 错误: 配置文件不存在: $SERVICE_HOME/conf/application.yaml"
        return 1
    fi

      if [ -f "$MYSQL_DRIVER" ]; then
              SERVICE_LIBS="$SERVICE_HOME/libs"
              TARGET_DRIVER="$SERVICE_LIBS/mysql-connector-java-8.0.16.jar"

              if [ ! -f "$TARGET_DRIVER" ]; then
                  echo "  复制 MySQL 驱动到 $SERVICE_NAME/libs..."
                  mkdir -p "$SERVICE_LIBS"
                  cp "$MYSQL_DRIVER" "$TARGET_DRIVER"
                  echo "  ✓ MySQL 驱动已复制"
              fi
      fi

    # ========== 构建 CLASSPATH ==========
    local CLASSPATH=""

    # 1. 服务配置（最高优先级）
    CLASSPATH="$SERVICE_HOME/conf"

    # 2. 公共配置
    CLASSPATH="$CLASSPATH:$DOLPHINSCHEDULER_HOME/conf"

    # 3. 服务 libs
    CLASSPATH="$CLASSPATH:$SERVICE_HOME/libs/*"

    # 4. 公共 libs（如果存在）
    if [ -d "$DOLPHINSCHEDULER_HOME/libs" ]; then
        CLASSPATH="$CLASSPATH:$DOLPHINSCHEDULER_HOME/libs/*"
    fi

    # 5. 插件目录
    for plugin_type in task-plugins alert-plugins datasource-plugins storage-plugins; do
        PLUGIN_DIR="$DOLPHINSCHEDULER_HOME/plugins/$plugin_type"
        if [ -d "$PLUGIN_DIR" ]; then
            for plugin_dir in "$PLUGIN_DIR"/*; do
                if [ -d "$plugin_dir" ]; then
                    CLASSPATH="$CLASSPATH:$plugin_dir/*"
                fi
            done
        fi
    done
    CLASSPATH="$CLASSPATH:$DOLPHINSCHEDULER_HOME/plugins/task-plugins/*"
    CLASSPATH="$CLASSPATH:$DOLPHINSCHEDULER_HOME/plugins/alert-plugins/*"
    CLASSPATH="$CLASSPATH:$DOLPHINSCHEDULER_HOME/plugins/datasource-plugins/*"
    CLASSPATH="$CLASSPATH:$DOLPHINSCHEDULER_HOME/plugins/storage-plugins/*"

    # ========== JVM 参数（从环境变量读取，提供默认值）==========
    local JAVA_OPTS="-server"
        # ========== 配置 JVM 参数 ==========
    JAVA_OPTS="$JAVA_OPTS -Xms${JVM_XMS:-384m}"
    JAVA_OPTS="$JAVA_OPTS -Xmx${JVM_XMX:-512m}"                  # 最大堆内存 2GB
    JAVA_OPTS="$JAVA_OPTS -XX:+UseG1GC"
    JAVA_OPTS="$JAVA_OPTS -XX:+PrintGCDetails"
    JAVA_OPTS="$JAVA_OPTS -XX:+PrintGCDateStamps"
    JAVA_OPTS="$JAVA_OPTS -Xloggc:$SERVICE_HOME/logs/gc.log"
    JAVA_OPTS="$JAVA_OPTS -XX:+HeapDumpOnOutOfMemoryError"
    JAVA_OPTS="$JAVA_OPTS -XX:HeapDumpPath=$SERVICE_HOME/logs/heap_dump.hprof"
    JAVA_OPTS="$JAVA_OPTS -XX:+UseGCLogFileRotation"
    JAVA_OPTS="$JAVA_OPTS -XX:NumberOfGCLogFiles=10"
    JAVA_OPTS="$JAVA_OPTS -XX:GCLogFileSize=100M"

    # ========== 配置系统属性 ==========
    # 日志配置
    if [ -f "$SERVICE_HOME/conf/logback-spring.xml" ]; then
        JAVA_OPTS="$JAVA_OPTS -Dlogging.config=$SERVICE_HOME/conf/logback-spring.xml"
    else
        JAVA_OPTS="$JAVA_OPTS -Dlogging.config=classpath:logback-spring.xml"
    fi

    # Spring Boot 配置文件
    JAVA_OPTS="$JAVA_OPTS -Dspring.config.location=$SERVICE_HOME/conf/application.yaml"

    # 插件目录（关键！）
    JAVA_OPTS="$JAVA_OPTS -Dplugin.dir=$DOLPHINSCHEDULER_HOME/plugins"

    # 其他系统属性
    JAVA_OPTS="$JAVA_OPTS -Ddruid.mysql.usePingMethod=false"
    JAVA_OPTS="$JAVA_OPTS -Dspring.jackson.time-zone=UTC"
    JAVA_OPTS="$JAVA_OPTS -Dfile.encoding=UTF-8"
    JAVA_OPTS="$JAVA_OPTS -Dsun.jnu.encoding=UTF-8"
    JAVA_OPTS="$JAVA_OPTS -Djetty.httpConfig.maxFormContentSize=1073741824"

    # 创建日志目录
    mkdir -p "$SERVICE_HOME/logs"

    # 切换到服务目录
    cd "$SERVICE_HOME"

    echo "  配置文件: $SERVICE_HOME/conf/application.yaml"
    echo "  日志目录: $SERVICE_HOME/logs/"
    echo "  启动中..."

    echo "    执行启动命令..."
    $JAVA_HOME/bin/java $JAVA_OPTS \
        -cp "$CLASSPATH" \
        $MAIN_CLASS \
        > logs/start.log 2>&1 &

    local PID=$!
    echo $PID > $SERVICE_HOME/pid

    echo "✓ 服务已启动 (PID: $PID)"

    # ✅ 关键：等待后台进程
    wait $PID
}

# ========== 根据组件启动对应服务 ==========
case "$COMPONENT" in
    master)
        start_service "master-server" "org.apache.dolphinscheduler.server.master.MasterServer"
        ;;

    worker)
        start_service "worker-server" "org.apache.dolphinscheduler.server.worker.WorkerServer"
        ;;

    api)
        start_service "api-server" "org.apache.dolphinscheduler.api.ApiApplicationServer"
        ;;

    alert)
        start_service "alert-server" "org.apache.dolphinscheduler.alert.AlertServer"
        ;;

    all)
        echo ""
        echo "✗ 错误: K8s 环境不支持 'all' 模式"
        echo "请使用单独的 Deployment 部署各服务"
        exit 1
        ;;

    *)
        echo ""
        echo "✗ 错误: 未知组件 '$COMPONENT'"
        echo "支持的组件: master, worker, api, alert"
        exit 1
        ;;
esac
