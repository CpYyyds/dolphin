#!/bin/bash
docker-compose down -v
docker-compose build --no-cache
docker-compose up -d
echo "DolphinScheduler 启动成功"
echo "API 端口: 12345"
sleep 30