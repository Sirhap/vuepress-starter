---
title: Redis 集群详解(付费)
category: 数据库
tag:
  - Redis
---

# Redis 集群详解

## 1. Redis 集群简介

Redis Cluster 是 Redis 提供的分布式数据库方案，支持数据自动分片和高可用性。主要特点包括：

- 数据自动分片，分布在多个节点上
- 去中心化的分布式架构
- 支持自动故障转移
- 提供较好的可扩展性和高可用性

## 2. Redis 集群架构

### 2.1 节点通信
- 使用 Gossip 协议进行节点间通信
- 通过 16384 个槽位进行数据分片
- 客户端可以与任意节点通信

### 2.2 分片机制
- 所有键值对根据 key 被分配到 16384 个槽位中
- 每个主节点负责一部分槽位
- 从节点复制主节点的数据，提供故障转移支持

## 3. 集群搭建

### 3.1 基础配置
```bash
# redis.conf 配置示例
port 6379
cluster-enabled yes
cluster-config-file nodes-6379.conf
cluster-node-timeout 15000
appendonly yes
```

### 3.2 创建集群
```bash
# 创建包含 3 主 3 从的集群
redis-cli --cluster create 127.0.0.1:6379 127.0.0.1:6380 127.0.0.1:6381 \
127.0.0.1:6382 127.0.0.1:6383 127.0.0.1:6384 \
--cluster-replicas 1
```

## 4. 集群原理

### 4.1 数据分片
- 使用 CRC16 算法计算 key 的哈希值
- 将哈希值对 16384 取模得到槽位
- 根据槽位确定数据存储的节点

### 4.2 故障转移流程
1. 节点心跳检测
2. 主观下线（Subjectively Down）
3. 客观下线（Objectively Down）
4. 从节点选举
5. 故障转移执行

## 5. 集群运维

### 5.1 常用命令
```bash
# 查看集群信息
redis-cli cluster info

# 查看节点信息
redis-cli cluster nodes

# 检查集群健康状态
redis-cli --cluster check host:port
```

### 5.2 扩容缩容
```bash
# 添加节点
redis-cli --cluster add-node new_host:new_port existing_host:existing_port

# 删除节点
redis-cli --cluster del-node host:port node_id
```

## 6. 注意事项

### 6.1 数据一致性
- Redis 集群不保证强一致性
- 在网络分区等特殊情况下可能丢失写入
- 默认采用异步复制机制

### 6.2 使用限制
- 不支持多键操作（除非所有键在同一个槽位）
- 不支持跨节点的事务操作
- 单个键值对的数据不能超过 512MB

## 7. 最佳实践

### 7.1 架构设计
- 至少部署 3 个主节点
- 每个主节点配置一个从节点
- 考虑跨机房部署提高可用性

### 7.2 性能优化
- 使用连接池
- 合理设置超时时间
- 避免大键值对
- 使用批量操作减少网络往返

### 7.3 运维建议
- 定期备份数据
- 监控关键指标
- 制定应急预案
- 定期进行容灾演练

## 参考资料
1. [Redis 官方文档](https://redis.io/topics/cluster-tutorial)
2. [Redis 集群规范](https://redis.io/topics/cluster-spec)