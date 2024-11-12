#!/bin/bash
set -e
# 修改镜像标签为当前日期时间
time=$(date "+%Y%m%d%H%M%S")
image=liuhuapiaoyuan/bolt.new
# 构建镜像，指定Dockerfile以及Context
docker build -t $image:$time -f docker/Dockerfile .
docker tag $image:$time $image:latest
docker push $image:latest
docker push $image:$time