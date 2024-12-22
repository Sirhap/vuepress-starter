---
title: Spring Boot 全家桶面试题
category: Java
tag:
  - Spring Boot
  - Spring Cloud
  - Spring Security
---

# Spring Boot 全家桶面试题精选

## 核心概念

### 1. Spring Boot 基础
::: tip 面试官：什么是 Spring Boot？它解决了什么问题？
Spring Boot 是简化 Spring 应用开发的框架，通过自动配置和约定优于配置的理念，让开发者能够更快地构建应用。

核心优势：
1. 自动配置：减少手动配置的数量
2. 起步依赖：简化依赖管理
3. 内嵌服务器：简化部署流程
4. 监控管理：提供运维特性
:::

### 2. 自动配置原理
::: tip 面试官：能详细说说 Spring Boot 的自动配置原理吗？
自动配置的核心是 `@EnableAutoConfiguration` 注解，工作流程如下：

1. **配置文件加载**
   - 扫描 `META-INF/spring.factories`
   - 加载 AutoConfiguration 类

2. **条件注解判断**
   - `@ConditionalOnClass`
   - `@ConditionalOnMissingBean`
   - `@ConditionalOnProperty`

3. **配置类生效**
   - 创建配置类实例
   - 注册相关 Bean
:::

## Spring Cloud 组件

### 1. 服务注册与发现
::: tip 面试官：Eureka 和 Nacos 有什么区别？如何选择？
两者特点对比：

| 特性 | Eureka | Nacos |
|------|---------|-------|
| CAP | AP | CP+AP |
| 健康检查 | 心跳 | TCP/HTTP/MySQL/SQL Server |
| 配置功能 | 无 | 有 |
| 负载均衡 | Ribbon | 权重/metadata/Selector |
| 雪崩保护 | 有 | 有 |

选择建议：
- 需要配置中心：选择 Nacos
- 只需服务发现：都可以
- 老项目：Eureka
- 新项目：推荐 Nacos
:::

### 2. 网关
::: tip 面试官：Spring Cloud Gateway 的工作原理是什么？
Gateway 的核心概念：

1. **路由(Route)**
   - 由 ID、目标 URI、断言、过滤器组成
   - 当断言为真时匹配该路由

2. **断言(Predicate)**
   - 匹配 HTTP 请求中的任何内容
   - 支持多种断言工厂

3. **过滤器(Filter)**
   - 对请求和响应进行修改
   - 分为 Global Filter 和 Gateway Filter

工作流程：
1. 请求进入网关
2. 匹配断言
3. 经过过滤器链
4. 转发到微服务
:::

## 安全框架

### 1. Spring Security
::: tip 面试官：Spring Security 的认证流程是怎样的？
核心认证流程：

1. **认证入口**
   - `UsernamePasswordAuthenticationFilter`
   - 收集认证信息

2. **认证管理器**
   - `AuthenticationManager`
   - 委托给 `AuthenticationProvider`

3. **认证提供者**
   - 实现具体的认证逻辑
   - 可以有多个提供者

4. **用户详情服务**
   - `UserDetailsService`
   - 加载用户信息

5. **密码编码器**
   - `PasswordEncoder`
   - 密码的加密和匹配
:::

## 数据访问

### 1. Spring Data JPA
::: tip 面试官：JPA 和 MyBatis 的区别是什么？
主要区别：

| 特性 | JPA | MyBatis |
|------|-----|----------|
| 开发效率 | 高 | 中 |
| SQL 优化 | 较难 | 容易 |
| 学习曲线 | 陡峭 | 平缓 |
| 灵活性 | 较低 | 高 |

使用建议：
- 简单CRUD：使用 JPA
- 复杂查询：使用 MyBatis
- 性能要求高：使用 MyBatis
:::

## 性能调优

### 1. 性能优化
::: tip 面试官：Spring Boot 应用如何进行性能优化？
优化方向：

1. **JVM 优化**
   - 合理设置内存大小
   - 选择适合的垃圾收集器
   - 进行 JVM 参数调优

2. **数据库优化**
   - 使用连接池
   - SQL 语句优化
   - 合理使用索引

3. **缓存优化**
   - 使用多级缓存
   - 合理设置缓存策略
   - 防止缓存雪崩和穿透

4. **应用优化**
   - 使用异步处理
   - 添加熔断降级
   - 进行业务拆分
:::

## 最佳实践

### 1. 项目实战
::: tip 面试官：如何设计一个高可用的微服务架构？
核心要点：

1. **服务拆分**
   - 领域驱动设计
   - 合理粒度
   - 明确边界

2. **容错设计**
   - 服务降级
   - 熔断限流
   - 负载均衡

3. **监控告警**
   - 链路追踪
   - 日志收集
   - 性能监控

4. **部署架构**
   - 容器化部署
   - 多机房部署
   - 灰度发布
:::

## 参考资料
1. [Spring Boot 官方文档](https://docs.spring.io/spring-boot/docs/current/reference/html/)
2. [Spring Cloud 官方文档](https://spring.io/projects/spring-cloud)
3. [Spring Security 参考手册](https://docs.spring.io/spring-security/reference/)

<style>
/* 自定义样式 */
.tip {
  background-color: #f8f9fa;
  padding: 1rem;
  border-radius: 8px;
  margin: 1rem 0;
  box-shadow: 0 2px 12px rgba(0,0,0,0.1);
}

table {
  width: 100%;
  border-collapse: collapse;
  margin: 1rem 0;
}

th, td {
  padding: 0.75rem;
  border: 1px solid #ddd;
}

th {
  background-color: #f4f4f4;
}

/* 暗色主题适配 */
@media (prefers-color-scheme: dark) {
  .tip {
    background-color: #2d2d2d;
  }
  
  th {
    background-color: #363636;
  }
  
  th, td {
    border-color: #404040;
  }
}
</style> 