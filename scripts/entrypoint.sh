#!/bin/bash
set -e

echo "========================================="
echo "DolphinScheduler 3.3.1 伪集群模式启动"
echo "版本: 直接 Java 启动 (插件修复版)"
echo "========================================="

# ========== 环境变量 ==========
export DOLPHINSCHEDULER_HOME=/opt/dolphinscheduler
export JAVA_HOME=/usr/local/openjdk-8
export PATH=$JAVA_HOME/bin:$PATH

# ========== 验证目录结构 ==========
echo ""
echo "[0/5] 验证 DolphinScheduler 目录结构..."

if [ ! -d "$DOLPHINSCHEDULER_HOME" ]; then
    echo "  ✗ 错误: DOLPHINSCHEDULER_HOME 目录不存在"
    exit 1
fi

# 验证各服务目录
SERVICES=("master-server" "worker-server" "api-server" "alert-server")
for service in "${SERVICES[@]}"; do
    if [ ! -d "$DOLPHINSCHEDULER_HOME/$service" ]; then
        echo "  ✗ 错误: $service 目录不存在"
        exit 1
    fi

    # 检查服务的 libs 目录
    if [ ! -d "$DOLPHINSCHEDULER_HOME/$service/libs" ]; then
        echo "  ✗ 错误: $service/libs 目录不存在"
        exit 1
    fi

    shopt -s nullglob
    files=($DOLPHINSCHEDULER_HOME/$service/libs/*.jar)
    SERVICE_LIB_COUNT=${#files[@]}
    echo "  ✓ $service/libs: 找到 $SERVICE_LIB_COUNT 个 JAR 文件"

    # 检查配置目录
    if [ ! -d "$DOLPHINSCHEDULER_HOME/$service/conf" ]; then
        echo "  ✗ 错误: $service/conf 目录不存在"
        exit 1
    fi
done

# ========== 验证插件目录 ==========
echo ""
echo "  验证插件目录..."

# 检查插件根目录
if [ ! -d "$DOLPHINSCHEDULER_HOME/plugins" ]; then
    echo "  ✗ 错误: plugins 目录不存在"
    exit 1
fi

# 检查各类插件目录
PLUGIN_TYPES=("task-plugins" "alert-plugins" "datasource-plugins" "storage-plugins")
for plugin_type in "${PLUGIN_TYPES[@]}"; do
    PLUGIN_DIR="$DOLPHINSCHEDULER_HOME/plugins/$plugin_type"
    if [ -d "$PLUGIN_DIR" ]; then
        PLUGIN_COUNT=$(find "$PLUGIN_DIR" -maxdepth 1 -type d | wc -l)
        echo "  ✓ $plugin_type: 找到 $((PLUGIN_COUNT - 1)) 个插件目录"
    else
        echo "  △ $plugin_type 目录不存在，跳过"
    fi
done

cd /opt/dolphinscheduler/plugins && \
  for type in alert-plugins datasource-plugins storage-plugins task-plugins; do \
    echo "处理 $type..."; \
    find "$type" -type f -name "*.jar" -path "*/target/*" -exec mv {} "$type/" \; 2>/dev/null; \
    echo "  完成: $(find "$type" -maxdepth 1 -name "*.jar" | wc -l) 个插件"; \
  done && \
echo "全部完成！"


echo ""
echo "  创建插件软链接..."

# 为每个服务创建插件链接
for service in "${SERVICES[@]}"; do
    SERVICE_PLUGINS="$DOLPHINSCHEDULER_HOME/$service/plugins"

    # 如果已存在且不是软链接，先删除
    if [ -e "$SERVICE_PLUGINS" ] && [ ! -L "$SERVICE_PLUGINS" ]; then
        echo "  △ 删除已存在的非链接目录: $SERVICE_PLUGINS"
        rm -rf "$SERVICE_PLUGINS"
    fi

    # 创建软链接
    if [ ! -L "$SERVICE_PLUGINS" ]; then
        ln -sf "$DOLPHINSCHEDULER_HOME/plugins" "$SERVICE_PLUGINS"
        echo "  ✓ 创建 $service/plugins -> $DOLPHINSCHEDULER_HOME/plugins"
    else
        echo "  ✓ $service/plugins 软链接已存在"
    fi
done

# 验证 Java 环境
if [ ! -x "$JAVA_HOME/bin/java" ]; then
    echo "  ✗ 错误: Java 不可执行"
    exit 1
fi

JAVA_VERSION=$($JAVA_HOME/bin/java -version 2>&1 | head -n 1)
echo "  ✓ Java 环境: $JAVA_VERSION"
echo "  ✓ DolphinScheduler 目录结构验证完成"

# ========== 等待 MySQL 就绪 ==========
echo ""
echo "[1/5] 等待 MySQL 启动..."
MAX_RETRY=60
RETRY=0

until nc -z mysql 3306; do
    RETRY=$((RETRY+1))
    if [ $RETRY -ge $MAX_RETRY ]; then
        echo "  ✗ MySQL 启动超时"
        exit 1
    fi
    echo "  等待 MySQL (mysql:3306)... ($RETRY/$MAX_RETRY)"
    sleep 2
done

echo "  ✓ MySQL 端口已开放"
echo "  等待 MySQL 完全启动..."
sleep 15

# 测试 MySQL 连接
echo "  测试 MySQL 连接..."
MAX_RETRY=30
RETRY=0
until mysql -hmysql -P3306 -uroot -p123456 -e "SELECT 1;" > /dev/null 2>&1; do
    RETRY=$((RETRY+1))
    if [ $RETRY -ge $MAX_RETRY ]; then
        echo "  ✗ MySQL 连接失败"
        exit 1
    fi
    echo "  等待 MySQL 可连接... ($RETRY/$MAX_RETRY)"
    sleep 2
done
echo "  ✓ MySQL 连接正常"

# ========== 初始化数据库 ==========
echo ""
echo "[2/5] 初始化数据库..."

TABLE_EXISTS=$(mysql -hmysql -P3306 -uroot -p123456 -Ddolphinscheduler \
    -e "SHOW TABLES LIKE 't_ds_user';" 2>/dev/null | wc -l)

if [ "$TABLE_EXISTS" -eq "0" ]; then
    echo "  数据库表不存在,开始初始化..."

    if [ -f "$DOLPHINSCHEDULER_HOME/sql/dolphinscheduler_mysql.sql" ]; then
        echo "  执行 SQL 初始化脚本..."
        mysql -hmysql -P3306 -uroot -p123456 -Ddolphinscheduler \
            < $DOLPHINSCHEDULER_HOME/sql/dolphinscheduler_mysql.sql
        echo "  ✓ SQL 脚本执行完成"
    elif [ -f "$DOLPHINSCHEDULER_HOME/tools/bin/upgrade-schema.sh" ]; then
        echo "  使用 upgrade-schema.sh 初始化..."
        cd $DOLPHINSCHEDULER_HOME/tools
        bash bin/upgrade-schema.sh
        echo "  ✓ 数据库初始化完成"
    else
        echo "  ✗ 错误: 找不到初始化脚本"
        exit 1
    fi
else
    echo "  ✓ 数据库表已存在,跳过初始化"
fi

# 验证数据库
echo "  验证数据库..."
MAX_RETRY=30
RETRY=0
until mysql -hmysql -P3306 -uroot -p123456 -Ddolphinscheduler \
    -e "SELECT COUNT(*) FROM t_ds_user;" > /dev/null 2>&1; do
    RETRY=$((RETRY+1))
    if [ $RETRY -ge $MAX_RETRY ]; then
        echo "  ✗ 数据库验证失败"
        exit 1
    fi
    echo "  等待数据库表创建... ($RETRY/$MAX_RETRY)"
    sleep 3
done
echo "  ✓ 数据库已就绪"

# ========== 等待 ZooKeeper 就绪 ==========
echo ""
echo "[3/5] 等待 ZooKeeper 启动..."
MAX_RETRY=60
RETRY=0

until nc -z zookeeper 2181; do
    RETRY=$((RETRY+1))
    if [ $RETRY -ge $MAX_RETRY ]; then
        echo "  ✗ ZooKeeper 启动超时"
        exit 1
    fi
    echo "  等待 ZooKeeper (zookeeper:2181)... ($RETRY/$MAX_RETRY)"
    sleep 2
done

echo "  ✓ ZooKeeper 端口已开放"
echo "  等待 ZooKeeper 完全启动..."
sleep 10

# 测试 ZooKeeper 连接
response=$(timeout 3 bash -c 'exec 3<>/dev/tcp/zookeeper/2181; echo -e "ruok" >&3; cat <&3' 2>/dev/null)

# 使用 Bash 内置的字符串匹配（不需要 grep）
if [[ "$response" == *"imok"* ]]; then
    echo "✓ ZooKeeper 连接正常"
else
    echo "△ ZooKeeper 可能未完全启动，继续等待..."
    sleep 10
fi

# ========== 验证 Flink 连接 ==========
echo ""
echo "[3.5/5] 验证 Flink 连接..."

# 检查 Flink JobManager RPC 端口
if nc -z flink-jobmanager 6123 2>/dev/null; then
    echo "  ✓ Flink RPC 端口 (6123) 可达"
else
    echo "  △ Flink RPC 端口 (6123) 不可达，继续启动"
fi

# 检查 Flink REST API
if curl -sf http://flink-jobmanager:8081/config > /dev/null 2>&1; then
    echo "  ✓ Flink REST API (8081) 可访问"

    # 使用 sed 提取 TaskManager 数量
    TM_COUNT=$(curl -s http://flink-jobmanager:8081/overview 2>/dev/null | \
               sed -n 's/.*"taskmanagers":\([0-9]*\).*/\1/p')

    if [ -n "$TM_COUNT" ] && [ "$TM_COUNT" -gt 0 ] 2>/dev/null; then
        echo "  ✓ Flink 集群正常 (TaskManagers: $TM_COUNT)"
    else
        echo "  △ Flink TaskManager 未注册，继续启动"
    fi
else
    echo "  △ Flink REST API 不可访问，继续启动"
fi

# ========== 启动服务函数 ==========
start_service() {
    local SERVICE_NAME=$1
    local MAIN_CLASS=$2
    local SERVICE_HOME=$DOLPHINSCHEDULER_HOME/$SERVICE_NAME

    echo ""
    echo "  启动 $SERVICE_NAME..."

    # ========== 构建 CLASSPATH ==========
    local CLASSPATH=""

    # 1. 服务配置（最高优先级）
    CLASSPATH="$SERVICE_HOME/conf"

    # 2. 公共配置
    CLASSPATH="$CLASSPATH:$DOLPHINSCHEDULER_HOME/conf"

    # 3. 服务 libs
    CLASSPATH="$CLASSPATH:$SERVICE_HOME/libs/*"

    # 4. 公共 libs
    if [ -d "$DOLPHINSCHEDULER_HOME/libs" ]; then
        CLASSPATH="$CLASSPATH:$DOLPHINSCHEDULER_HOME/libs/*"
    fi

    # 5. 插件目录（关键！）
    # 方式1: 遍历每个插件目录，单独添加
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

    # 方式2: 也添加插件根目录（双保险）
    CLASSPATH="$CLASSPATH:$DOLPHINSCHEDULER_HOME/plugins/task-plugins/*"
    CLASSPATH="$CLASSPATH:$DOLPHINSCHEDULER_HOME/plugins/alert-plugins/*"
    CLASSPATH="$CLASSPATH:$DOLPHINSCHEDULER_HOME/plugins/datasource-plugins/*"
    CLASSPATH="$CLASSPATH:$DOLPHINSCHEDULER_HOME/plugins/storage-plugins/*"

    # ========== 配置 JVM 参数 ==========
    local JAVA_OPTS="-server"
    JAVA_OPTS="$JAVA_OPTS -Xms1536m"                    # 初始堆内存 1GB
    JAVA_OPTS="$JAVA_OPTS -Xmx2048m"                   # 最大堆内存 2GB
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

    echo "    MAIN_CLASS: $MAIN_CLASS"
    echo "    配置文件: $SERVICE_HOME/conf/application.yaml"
    echo "    插件目录: $DOLPHINSCHEDULER_HOME/plugins"

    # 验证配置文件存在
    if [ ! -f "$SERVICE_HOME/conf/application.yaml" ]; then
        echo "    ✗ 错误: 配置文件不存在"
        sleep 60
        return 1
    fi

    # 创建日志目录（如果不存在）
    if [ ! -d "$SERVICE_HOME/logs" ]; then
        mkdir -p "$SERVICE_HOME/logs"
    fi

    # 切换到服务目录
    cd $SERVICE_HOME

    # 启动服务
    echo "    执行启动命令..."
    setsid $JAVA_HOME/bin/java $JAVA_OPTS \
        -cp "$CLASSPATH" \
        $MAIN_CLASS \
        > logs/start.log 2>&1 &

    local PID=$!
    echo $PID > $SERVICE_HOME/pid

    echo "    ✓ $SERVICE_NAME 启动命令已执行"
    echo "    ✓ PID: $PID"
    echo "    ✓ PID 文件: $SERVICE_HOME/pid"
    echo "    ✓ 启动日志: $SERVICE_HOME/logs/start.log"

    # 等待服务启动
    echo "    等待服务启动..."
    sleep 10

    # 检查进程是否存在
    if ps -p $PID > /dev/null 2>&1; then
        echo "    ✓ 进程运行正常"
    else
        echo "    ✗ 警告: 进程可能已退出,请检查日志"
        if [ -f "$SERVICE_HOME/logs/start.log" ]; then
            echo "    ========== 启动日志（最后30行）=========="
            tail -n 30 $SERVICE_HOME/logs/start.log | sed 's/^/      /'
            echo "    ========================================"
        fi
        return 1
    fi

    # 显示最新日志
    local LOG_FILE="$SERVICE_HOME/logs/dolphinscheduler-${SERVICE_NAME%-server}.log"
    if [ -f "$LOG_FILE" ]; then
        echo "    最新运行日志（最后5行）:"
        tail -n 5 $LOG_FILE 2>/dev/null | sed 's/^/      /' || echo "      (日志文件正在生成中...)"
    else
        echo "    运行日志文件尚未生成: $LOG_FILE"
    fi
}

# ========== 启动各服务 ==========
echo ""
echo "[4/5] 启动 DolphinScheduler 伪集群服务..."

# 按顺序启动各服务
start_service "master-server" "org.apache.dolphinscheduler.server.master.MasterServer"
start_service "worker-server" "org.apache.dolphinscheduler.server.worker.WorkerServer"
start_service "api-server" "org.apache.dolphinscheduler.api.ApiApplicationServer"
start_service "alert-server" "org.apache.dolphinscheduler.alert.AlertServer"

echo ""
echo "  ✓ 所有服务启动命令已执行完成"

# ========== 等待服务完全启动 ==========
echo ""
echo "[5/5] 等待服务完全启动..."

for i in {1..30}; do
    echo -n "."
    sleep 1
done
echo ""

# ========== 验证服务状态 ==========
echo ""
echo "验证服务状态..."

check_service_status() {
    local SERVICE_NAME=$1
    local PID_FILE=$DOLPHINSCHEDULER_HOME/$SERVICE_NAME/pid

    if [ -f "$PID_FILE" ]; then
        local PID=$(cat $PID_FILE)
        if ps -p $PID > /dev/null 2>&1; then
            echo "  ✓ $SERVICE_NAME: 运行中 (PID: $PID)"
            return 0
        else
            echo "  ✗ $SERVICE_NAME: 进程已退出 (PID: $PID)"
            local START_LOG="$DOLPHINSCHEDULER_HOME/$SERVICE_NAME/logs/start.log"
            if [ -f "$START_LOG" ]; then
                echo "    启动日志:"
                tail -n 20 "$START_LOG" | sed 's/^/      /'
            fi
            return 1
        fi
    else
        echo "  ✗ $SERVICE_NAME: PID 文件不存在"
        return 1
    fi
}

ALL_RUNNING=true
for service in "${SERVICES[@]}"; do
    if ! check_service_status "$service"; then
        ALL_RUNNING=false
    fi
done

# ========== 显示服务信息 ==========
echo ""
echo "========================================="
if [ "$ALL_RUNNING" = true ]; then
    echo "✓ DolphinScheduler 伪集群启动成功!"
else
    echo "⚠ DolphinScheduler 部分服务启动失败"
    echo ""
    echo "请检查以下日志文件:"
    for service in "${SERVICES[@]}"; do
        echo "  - $DOLPHINSCHEDULER_HOME/$service/logs/start.log"
    done
fi
echo "========================================="
echo ""
echo "服务进程:"
ps aux | grep -E "MasterServer|WorkerServer|ApiApplicationServer|AlertServer" | grep -v grep || echo "  ⚠ 未检测到运行中的进程"

echo ""
echo "访问地址:"
echo "  Web UI:  http://localhost:12345/dolphinscheduler"
echo "  API:     http://localhost:12345/dolphinscheduler/doc.html"
echo ""
echo "默认账号:"
echo "  用户名: admin"
echo "  密码:   dolphinscheduler123"
echo ""
echo "日志位置:"
for service in "${SERVICES[@]}"; do
    echo "  $service: $DOLPHINSCHEDULER_HOME/$service/logs/"
done
echo ""
echo "查看日志命令:"
echo "  # 查看启动日志"
echo "  docker exec dolphinscheduler-app tail -f /opt/dolphinscheduler/master-server/logs/start.log"
echo ""
echo "  # 查看运行日志"
echo "  docker exec dolphinscheduler-app tail -f /opt/dolphinscheduler/master-server/logs/dolphinscheduler-master.log"
echo "  docker exec dolphinscheduler-app tail -f /opt/dolphinscheduler/worker-server/logs/dolphinscheduler-worker.log"
echo "  docker exec dolphinscheduler-app tail -f /opt/dolphinscheduler/api-server/logs/dolphinscheduler-api.log"
echo "  docker exec dolphinscheduler-app tail -f /opt/dolphinscheduler/alert-server/logs/dolphinscheduler-alert.log"
echo ""
echo "停止服务命令:"
for service in "${SERVICES[@]}"; do
    echo "  docker exec dolphinscheduler-app kill \$(cat /opt/dolphinscheduler/$service/pid) 2>/dev/null || true"
done
echo "========================================="

# ========== 持续输出日志 ==========
echo ""
echo "开始输出服务日志..."
echo "按 Ctrl+C 停止日志输出"
echo ""
sleep 3

# 等待日志文件生成
for i in {1..15}; do
    if [ -f "$DOLPHINSCHEDULER_HOME/master-server/logs/dolphinscheduler-master.log" ]; then
        break
    fi
    echo "等待日志文件生成... ($i/15)"
    sleep 2
done

# 使用无限循环保持容器运行
while true; do
    sleep 60

    # 每分钟检查一次服务状态
    for service in "${SERVICES[@]}"; do
        PID_FILE="$DOLPHINSCHEDULER_HOME/$service/pid"
        if [ -f "$PID_FILE" ]; then
            PID=$(cat $PID_FILE)
            if ! ps -p $PID > /dev/null 2>&1; then
                echo "$(date '+%Y-%m-%d %H:%M:%S') - 警告: $service 进程已退出 (PID: $PID)"
            fi
        fi
    done
done



## 注意事项
## 一定要根据本地、容器的文件系统、目录结构编写运行脚本
## 最好对容器目录、文件、现有服务可用性进行检测
## 这里使用java结合固定的jvm配置运行服务，而不是用start.sh脚本，更不是daomon.sh只适用于dolphinscheduler2.x的方式
