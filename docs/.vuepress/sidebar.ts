import { SidebarOptions } from "vuepress-theme-hope";

export default [
    {
        text: '导航',
        link: '/',
        collapsible: true,
    },
    {
        text: "java",
        icon: "java",
        prefix: "java/",
        collapsible: true,
        children: [
            {
                text: 'Java基础结构',
                collapsible: true,
                children:[
                    {
                        text:'Java虚拟机（JVM）',
                        link:"/java/Java基础结构/Java虚拟机（JVM）.html"
                    },{
                        text:'集合框架（Collection Framework）',
                        link:"/java/Java基础结构/集合框架（Collection Framework）.html"
                    },{
                        text:'多线程（Multithreading）',
                        link:"/java/Java基础结构/多线程（Multithreading）.html"
                    },{
                        text:'反射（Reflection）',
                        link:"/java/Java基础结构/反射（Reflection）.html"
                    },{
                        text:'抽象类（Abstract Class）',
                        link:"/java/Java基础结构/抽象类（Abstract Class）.html"
                    },{
                        text:'接口（Interface）',
                        link:"/java/Java基础结构/接口（Interface）.html"
                    },{
                        text:'异常处理（Exception Handling）',
                        link:"/java/Java基础结构/异常处理（Exception Handling）.html"
                    },{
                        text:'泛型（Generics）',
                        link:"/java/Java基础结构/泛型（Generics）.html"
                    },{
                        text:'注解（Annotations）',
                        link:"/java/Java基础结构/注解（Annotations）.html"
                    },{
                        text:'Lambda表达式（Lambda Expressions）',
                        link:"/java/Java基础结构/Lambda表达式（Lambda Expressions）.html"
                    },{
                        text:'设计模式',
                        link:"/java/Java基础结构/设计模式.html"
                    }
                ],
            },
            {
                text: 'Java热门面试题',
                collapsible: true,
                children:[
                    {
                        text:'Stream流',
                        link:"/java/Java热门面试题/Stream流.html"
                    },{
                        text:'AOP(Aspect-Oriented Programming)',
                        link:"/java/Java热门面试题/AOP(Aspect-Oriented Programming).html"
                    },{
                        text:'GC(Garbage Collection)',
                        link:"/java/Java热门面试题/GC(Garbage Collection).html"
                    },{
                        text:'Hibernate框架(Hibernate Framework)',
                        link:"/java/Java热门面试题/Hibernate框架(Hibernate Framework).md"
                    },{
                        text:'Java并发编程(Java Concurrency Programming)',
                        link:"/java/Java热门面试题/Java并发编程(Java Concurrency Programming).md"
                    },{
                        text:'JVM(Java Virtual Machine)',
                        link:"/java/Java热门面试题/JVM(Java Virtual Machine).md"
                    },{
                        text:'MVC架构(Model-View-Controller)',
                        link:"/java/Java热门面试题/MVC架构(Model-View-Controller).md"
                    },{
                        text:'MyBatis框架(MyBatis Framework)',
                        link:"/java/Java热门面试题/MyBatis框架(MyBatis Framework).md"
                    },{
                        text:'RESTful API(Representational API)',
                        link:"/java/Java热门面试题/RESTful API(Representational API).md"
                    },{
                        text:'MyBatis框架(MyBatis Framework)',
                        link:"/java/Java热门面试题/MyBatis框架(MyBatis Framework).md"
                    },
                    {  text:" 数据库连接池（Database Connection Pool）",  link: "/java/Java热门面试题/数据库连接池(Database Connection Pool).md"},
                    {  text:" 线程池（Thread Pool）",  link: "/java/Java热门面试题/线程池(Thread Pool).md"},
                    {  text:" 输入输出流（Input Output Stream）",  link: "/java/Java热门面试题/输入输出流(Input Output Stream).md"},
                    {  text:" 锁（Lock）",  link: "/java/Java热门面试题/锁(Lock).md"},
                    {  text:" 高并发（High Concurrency）",  link: "/java/Java热门面试题/高并发(High Concurrency).md"} ,      
                    {
                        text: "Spring Boot 全家桶",
                        link: "/java/Java热门面试题/SpringBoot全家桶.html",
                    }
                    ],
                },
            {
                text: "基础",
                prefix: "basis/",
                icon: "basic",
                children: [
                    "/java/basis/java-basic-questions-01",
                    "/java/basis/java-basic-questions-02",
                    "/java/basis/java-basic-questions-03",
                    {
                        text: "重要知识点",
                        icon: "star",
                        collapsible: true,
                        children: [
                            "/java/basis/why-there-only-value-passing-in-java",
                            "/java/basis/serialization",
                            "/java/basis/generics-and-wildcards",
                            "/java/basis/reflection",
                            "/java/basis/proxy",
                            "/java/basis/bigdecimal",
                            "/java/basis/unsafe",
                            "/java/basis/spi",
                            "/java/basis/syntactic-sugar",
                        ],
                    },
                ],
            },
            {
                text: "集合",
                prefix: "collection/",
                icon: "container",
                children: [
                    "/java/collection/java-collection-questions-01",
                    "/java/collection/java-collection-questions-02",
                    "/java/collection/java-collection-precautions-for-use",
                    {
                        text: "源码分析",
                        icon: "star",
                        collapsible: true,
                        children: [
                            "/java/collection/arraylist-source-code",
                            "/java/collection/hashmap-source-code",
                            "/java/collection/concurrent-hash-map-source-code",
                        ],
                    },
                ],
            },
            {
                text: "并发编程",
                prefix: "concurrent/",
                icon: "et-performance",
                children: [
                    "/java/concurrent/java-concurrent-questions-01",
                    "/java/concurrent/java-concurrent-questions-02",
                    "/java/concurrent/java-concurrent-questions-03",
                    {
                        text: "重要知识点",
                        icon: "star",
                        collapsible: true,
                        children: [
                            "/java/concurrent/optimistic-lock-and-pessimistic-lock",
                            "/java/concurrent/jmm",
                            "/java/concurrent/java-thread-pool-summary",
                            "/java/concurrent/java-thread-pool-best-practices",
                            "/java/concurrent/java-concurrent-collections",
                            "/java/concurrent/aqs",
                            "/java/concurrent/atomic-classes",
                            "/java/concurrent/threadlocal",
                            "/java/concurrent/completablefuture-intro",
                        ],
                    },
                ],
            },
            {
                text: "IO",
                prefix: "io/",
                icon: "code",
                collapsible: true,
                children: ["/java/io/io-basis", "/java/io/io-design-patterns", "/java/io/io-model"],
            },
            {
                text: "JVM",
                prefix: "/java/jvm/",
                icon: "virtual_machine",
                collapsible: true,
                children: [
                    "/java/jvm/memory-area",
                    "/java/jvm/jvm-garbage-collection",
                    "/java/jvm/class-file-structure",
                    "/java/jvm/class-loading-process",
                    "/java/jvm/classloader",
                    "/java/jvm/jvm-parameters-intro",
                    "/java/jvm/jvm-intro",
                    "/java/jvm/jdk-monitoring-and-troubleshooting-tools",
                ],
            },
            {
                text: "新特性",
                prefix: "/java/new-features/",
                icon: "featured",
                collapsible: true,
                children: [
                    "/java/new-features/java8-common-new-features",
                    "/java/new-features/java8-tutorial-translate",
                    "/java/new-features/java9",
                    "/java/new-features/java10",
                    "/java/new-features/java11",
                    "/java/new-features/java12-13",
                    "/java/new-features/java14-15",
                    "/java/new-features/java16",
                    "/java/new-features/java17",
                    "/java/new-features/java18",
                    "/java/new-features/java19",
                    "/java/new-features/java20",
                ],
            },
        ],
    },
    {
        text: "数据库",
        icon: "database",
        prefix: "database/",
        collapsible: true,
        children: [
            {
                text: "基础",
                icon: "basic",
                children: [
                    "/database/basis",
                    "/database/nosql",
                    "/database/character-set",
                    {
                        text: "SQL",
                        icon: "SQL",
                        prefix: "sql/",
                        collapsible: true,
                        children: ["/database/sql/sql-syntax-summary", "/database/sql/sql-questions-01"],
                    },
                ],
            },
            {
                text: "MySQL",
                prefix: "mysql/",
                icon: "mysql",
                children: [
                    "/database/mysql/mysql-questions-01",
                    "/database/mysql/mysql-high-performance-optimization-specification-recommendations",
                    {
                        text: "重要知识点",
                        icon: "star",
                        collapsible: true,
                        children: [
                            "/database/mysql/mysql-index",
                            {
                                text: "MySQL三大日志详解",
                                link: "mysql-logs",
                            },
                            "/database/mysql/transaction-isolation-level",
                            "/database/mysql/innodb-implementation-of-mvcc",
                            "/database/mysql/how-sql-executed-in-mysql",
                            "/database/mysql/mysql-query-cache",
                            "/database/mysql/mysql-query-execution-plan",
                            "/database/mysql/mysql-auto-increment-primary-key-continuous",
                            "/database/mysql/some-thoughts-on-database-storage-time",
                            "/database/mysql/index-invalidation-caused-by-implicit-conversion",
                        ],
                    },
                ],
            },
            {
                text: "Redis",
                prefix: "redis/",
                icon: "redis",
                children: [
                    "/database/redis/cache-basics",
                    "/database/redis/redis-questions-01",
                    "/database/redis/redis-questions-02",
                    {
                        text: "重要知识点",
                        icon: "star",
                        collapsible: true,
                        children: [
                            "/database/redis/3-commonly-used-cache-read-and-write-strategies",
                            "/database/redis/redis-data-structures-01",
                            "/database/redis/redis-data-structures-02",
                            "/database/redis/redis-persistence",
                            "/database/redis/redis-memory-fragmentation",
                            "/database/redis/redis-common-blocking-problems-summary",
                            "/database/redis/redis-cluster",
                        ],
                    },
                ],
            },
            {
                text: "Elasticsearch",
                prefix: "elasticsearch/",
                icon: "elasticsearch",
                collapsible: true,
                children: ["/database/elasticsearch/elasticsearch-questions-01",
                          "/database/elasticsearch/elasticsearch-questions-02.md"
                ],
            },
            {
                text: "MongoDB",
                prefix: "mongodb/",
                icon: "mongodb",
                collapsible: true,
                children: ["/database/mongodb/mongodb-questions-01", "/database/mongodb/mongodb-questions-02"],
            },
        ],
    },
    {
        text: 'AI网址',
        icon: "otherWeb",
        prefix: "other/AI 助手导航/",
        collapsible: true,
        children: [
            {
                text: 'AI助手推荐',
                link: "/other/其他网址/AI 助手导航.md"
            },
            {
                text: 'AI编程工具',
                link: "/other/其他网址/AI编程工具.md"
            }
        ]
    },
    {
        text: '个人公众号',
        icon: "officialAccounts",
        prefix: "officialAccounts/",
        collapsible: true,
        children: [
            {
                text:'公众号',
                link:"/officialAccounts/WeChat.md"
            }
        ]
    },
] as SidebarOptions;