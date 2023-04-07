# MyBatis框架(MyBatis Framework)

## 一、MyBatis基础知识

### 1. 什么是MyBatis框架？

[[3](https://mybatis.org/mybatis-3/zh/index.html)]

MyBatis框架是一款用于数据持久化的开源框架，它可以将Sql语句与Java对象进行映射，简化了数据库操作过程。MyBatis通过ORM（Object Relation Mapping）实现了面向对象编程语言与关系型数据库之间的映射。相较于Hibernate等其他ORM框架，MyBatis更加灵活，支持动态SQL构建和多种映射方式。

### 2. MyBatis框架中的ORM是什么意思？

ORM指的是对象关系映射(Object Relation Mapping)，它将面向对象的语言程序中的类和对象映射到关系型数据库中的表和行。ORM使得Java开发人员无需编写SQL语句，即可完成对数据库的操作。

### 3. MyBatis框架中的Mapper接口是什么？

Mapper接口是指与MyBatis映射文件中的SQL语句对应的Java接口，它负责定义SQL操作所需要的方法。Mapper接口中的方法名和参数需要与映射文件中的SQL语句对应，并且返回值类型与执行结果对应。外部应用程序调用Mapper接口中的方法，MyBatis将自动执行对应的SQL语句。

### 4. MyBatis框架中的SqlSession是什么？

SqlSession是MyBatis框架中的关键对象之一，它是在应用程序与数据库之间建立会话连接的对象。SqlSession可以用于执行SQL语句、提交事务、关闭连接等操作。SqlSession也可以通过Mapper接口生成代理实现，以便更加方便地访问数据库。

### 5. MyBatis如何配置数据库连接池？

MyBatis可以通过配置文件来配置数据库连接池，常用的连接池有DBCP、C3P0和Druid等。在MyBatis的配置文件（mybatis-config.xml）中可以添加dataSource标签，指定数据库连接池的类型、驱动、URL、用户名和密码等连接参数。例如：

```xml
<dataSource type="com.alibaba.druid.pool.DruidDataSource">
  <property name="driverClassName" value="com.mysql.cj.jdbc.Driver"/>
  <property name="url" value="jdbc:mysql://localhost:3306/test"/>
  <property name="username" value="root"/>
  <property name="password" value="123456"/>
</dataSource>
```

## 二、MyBatis面试题

### 1. MyBatis框架与Hibernate框架有什么区别？

MyBatis框架与Hibernate框架有以下几点不同：
- ORM方式不同：MyBatis采用基于SQL语句的映射，而Hibernate采用基于对象的映射。
- 映射方式不同：MyBatis采用XML文件进行映射，Hibernate采用注解或XML文件进行映射。
- 性能不同：MyBatis的执行效率相对较高，而Hibernate在大数据量和高并发情况下会出现性能问题。
- 学习成本不同：MyBatis学习成本相对较低，而Hibernate需要掌握较强的ORM理论知识。

### 2. MyBatis中的动态SQL有哪些？

MyBatis中的动态SQL指的是根据不同条件生成不同SQL语句的功能，在MyBatis中，支持以下几种动态SQL：
- if标签：用于根据条件生成不同的SQL片段。例如：

```xml
<select id="getUserById" resultType="User">
  select * from user where 1=1
  <if test="id != null">
    and id = #{id}
  </if>
  <if test="name != null">
    and name = #{name}
  </if>
</select>
```

- choose标签：类似于Java中的switch语句，用于判断多个条件并生成对应的SQL片段。例如：

```xml
<select id="getUserList" resultType="User">
  select * from user
  <where>
    <choose>
      <when test="state == 'ACTIVE'">
        and status = 1
      </when>
      <when test="state == 'INACTIVE'">
        and status = 0
      </when>
    </choose>
  </where>
</select>
```

- where标签：用于在SQL语句中添加WHERE子句，同时可以根据条件判断是否生成WHERE子句。例如：

```xml
<select id="getUserList" resultType="User">
  select * from user
  <where>
    <if test="name != null">
      and name = #{name}
    </if>
    <if test="age != null">
      and age = #{age}
    </if>
  </where>
</select>
```

### 3. MyBatis如何进行一对多的查询？

MyBatis可以通过嵌套查询（nested queries）和嵌套结果（nested results）来实现一对多关系的查询。例如：

```xml
<select id="getUserAndOrders" resultMap="userMap">
  select * from user where id = #{id};
  select * from order where user_id = #{id};
</select>

<resultMap id="userMap" type="User">
  <id property="id" column="id"/>
  <result property="name" column="name"/>
  <collection property="orders" ofType="Order">
    <id property="id" column="order_id"/>
    <result property="name" column="order_name"/>
  </collection>
</resultMap>
```

上述代码中，首先根据用户ID查询用户信息，然后根据用户ID查询订单信息，最后将查询结果进行关联映射，并设置User中的orders属性为一个Order集合。

### 4. MyBatis如何使用注解配置？

MyBatis也支持使用注解来进行配置，常用的注解包括：
- @Select：用于查询操作。
- @Insert：用于插入操作。
- @Update：用于更新操作。
- @Delete：用于删除操作。
- @Param：用于指定方法参数与SQL中的参数对应。

例如：

```java
@Mapper
public interface UserMapper {
    @Select("select * from user where id = #{id}")
    User getUserById(@Param("id") int id);

    @Insert("insert into user(name, age) values(#{user.name}, #{user.age})")
    void insertUser(@Param("user") User user);
}
```

### 5. MyBatis如何进行分页查询？


MyBatis可以通过使用分页插件来实现分页查询。下面介绍如何使用MyBatis-PageHelper插件进行分页查询：

1. 引入MyBatis-PageHelper插件

在pom.xml中添加以下依赖：

```xml
<dependency>
  <groupId>com.github.pagehelper</groupId>
  <artifactId>pagehelper-spring-boot-starter</artifactId>
  <version>1.3.0</version>
</dependency>
```

2. 在Mapper接口方法中添加Page对象参数

```java
@Mapper
public interface UserMapper {
    List<User> getUserList(Page<User> page);
}
```

3. 在SQL语句中添加分页参数

```xml
<select id="getUserList" resultType="User">
  select * from user
  limit #{page.startRow}, #{page.pageSize}
</select>
```

4. 在Service中调用Mapper接口方法，并设置分页参数

```java
@Service
public class UserService {
    @Autowired
    private UserMapper userMapper;

    public PageInfo<User> getUserList(int pageNum, int pageSize) {
        PageHelper.startPage(pageNum, pageSize);
        List<User> userList = userMapper.getUserList();
        return new PageInfo<>(userList);
    }
}
```

上述代码中，我们通过PageHelper.startPage方法设置了分页的页码和每页记录数，在调用Mapper接口方法时，会自动填充Page对象的分页参数，最终返回PageInfo对象，该对象包含了分页信息以及查询结果。

除了PageHelper插件外，MyBatis还支持其他的分页插件，例如MyBatis-Paginator和MyBatis-Pageable等插件，读者可以根据项目需要进行选择。

### 6. 如何使用MyBatis进行事务控制？

MyBatis提供了两种方式进行事务控制：

编程式事务控制：通过SqlSession对象的commit()和rollback()方法来手动提交或回滚事务。
声明式事务控制：通过AOP机制实现，可以自动地管理事务。可以使用Spring框架等容器来实现声明式事务控制。
### 7 MyBatis中的懒加载是什么？

MyBatis中的懒加载指的是在需要数据时才进行加载数据的操作。MyBatis中提供了延迟加载的功能，即使用延迟加载器（lazy loading），当查询结果中包含关联对象时，可以让MyBatis只查询本对象，只有在真正要使用关联对象时，再去查询关联对象。MyBatis支持通过配置文件开启懒加载功能。

