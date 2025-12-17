FROM openjdk:8-jdk-bullseye

WORKDIR /opt

# ========== 安装必要工具 ==========
RUN apt-get update && \
    apt-get install -y \
    netcat \
    wget \
    telnet \
    default-mysql-client \
    procps \
    vim \
    tree \
    net-tools \
    sudo \
    coreutils \
    && rm -rf /var/lib/apt/lists/*

RUN mysql --version

# ========== 创建目标目录 ==========
RUN mkdir -p /opt/dolphinscheduler && \
    chmod 777 /opt/dolphinscheduler

RUN mkdir -p /usr/local/flink && chmod 755 /usr/local/flink

# ========== 复制 DolphinScheduler 程序文件 ==========
COPY --chown=root:root apache-dolphinscheduler-3.3.1-bin/ /opt/dolphinscheduler/

# ========== 创建子目录 ==========
RUN mkdir -p \
    /opt/dolphinscheduler/master-server/logs \
    /opt/dolphinscheduler/worker-server/logs \
    /opt/dolphinscheduler/api-server/logs \
    /opt/dolphinscheduler/alert-server/logs \
    /opt/dolphinscheduler/sql && \
    chmod -R 755 /opt/dolphinscheduler && \
    chmod 755 /opt/dolphinscheduler/plugins/task-plugins && \
    chmod 755 /opt/dolphinscheduler/plugins/alert-plugins && \
    chmod 755 /opt/dolphinscheduler/plugins/datasource-plugins && \
    chmod 755 /opt/dolphinscheduler/plugins/storage-plugins

RUN mkdir -p /usr/local/flink/log && \
    chmod 755 /usr/local/flink/log

# ========== 复制配置文件（关键修改）==========
COPY --chown=root:root conf/application-common.yaml /opt/dolphinscheduler/conf/
COPY --chown=root:root conf/application-master.yaml /opt/dolphinscheduler/master-server/conf/application.yaml
COPY --chown=root:root conf/application-worker.yaml /opt/dolphinscheduler/worker-server/conf/application.yaml
COPY --chown=root:root conf/application-api.yaml /opt/dolphinscheduler/api-server/conf/application.yaml
COPY --chown=root:root conf/application-alert.yaml /opt/dolphinscheduler/alert-server/conf/application.yaml

# ========== 复制 SQL 和启动脚本 ==========
COPY --chown=root:root sql/dolphinscheduler_mysql.sql /opt/dolphinscheduler/sql/
COPY --chown=root:root scripts/entrypointWithoutCheck.sh /opt/entrypoint.sh

# ========== 设置权限 ==========
RUN sed -i 's/\r$//' /opt/entrypoint.sh && \
    chmod +x /opt/entrypoint.sh && \
    chmod 644 /opt/dolphinscheduler/sql/dolphinscheduler_mysql.sql && \
    chmod 644 /opt/dolphinscheduler/*/conf/application.yaml

# ========== 环境变量 ==========
ENV DOLPHINSCHEDULER_HOME=/opt/dolphinscheduler
ENV JAVA_HOME=/usr/local/openjdk-8
#ENV FLINK_HOME=/usr/local/flink
ENV PATH=$PATH:$DOLPHINSCHEDULER_HOME/bin
#$FLINK_HOME/bin
# ========== 最终验证 ==========
RUN echo "✓ DolphinScheduler 配置完成" && \
    ls -lh /opt/dolphinscheduler/master-server/conf/application.yaml && \
    ls -lh /opt/dolphinscheduler/worker-server/conf/application.yaml && \
    ls -lh /opt/dolphinscheduler/api-server/conf/application.yaml && \
    ls -lh /opt/dolphinscheduler/alert-server/conf/application.yaml

EXPOSE 12345 5678 1234 50052

HEALTHCHECK --interval=30s --timeout=10s --start-period=120s --retries=5 \
    CMD nc -z localhost 12345 || exit 1

ENTRYPOINT ["/opt/entrypoint.sh"]


## 注意事项
## 驱动要有，而且要和配置对应
## 目录权限一定要有
## 配置文件按bin项目中conf规范进行存储，这里主要是bin/cof以及server/conf公用、专属服务两种位置