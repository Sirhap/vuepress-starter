import {SidebarConfig} from "@vuepress/theme-default/lib/shared/nav";
import {LinkIcon} from "vuepress-theme-hope/lib/client/modules/blog/components/icons";

export default [
    {
        text: '八股文网址介绍',
        link: '/',
    },
    {
        text: 'Java基础',
        collapsible: true,
        children:[
            {
                text:'Java虚拟机（JVM）',
                link:"/Java基础/Java虚拟机（JVM）.html"
            },{
                text:'集合框架（Collection Framework）',
                link:"/Java基础/集合框架（Collection Framework）.html"
            },{
                text:'多线程（Multithreading）',
                link:"/Java基础/多线程（Multithreading）.html"
            },{
                text:'反射（Reflection）',
                link:"/Java基础/反射（Reflection）.html"
            },{
                text:'抽象类（Abstract Class）',
                link:"/Java基础/抽象类（Abstract Class）.html"
            },{
                text:'接口（Interface）',
                link:"/Java基础/接口（Interface）.html"
            },{
                text:'异常处理（Exception Handling）',
                link:"/Java基础/异常处理（Exception Handling）.html"
            },{
                text:'泛型（Generics）',
                link:"/Java基础/泛型（Generics）.html"
            },{
                text:'注解（Annotations）',
                link:"/Java基础/注解（Annotations）.html"
            },{
                text:'Lambda表达式（Lambda Expressions）',
                link:"/Java基础/Lambda表达式（Lambda Expressions）.html"
            },{
                text:'设计模式',
                link:"/Java基础/设计模式.html"
            }
        ],
    },

    {
        text: 'Java热门面试题',
        collapsible: true,
        children:[
            {
                text:'Stream流',
                link:"/Java热门面试题/Stream流.html"
            },{
                text:'AOP(Aspect-Oriented Programming)',
                link:"/Java热门面试题/AOP(Aspect-Oriented Programming).html"
            },{
                text:'GC(Garbage Collection)',
                link:"/Java热门面试题/GC(Garbage Collection).html"
            },{
                text:'Hibernate框架(Hibernate Framework)',
                link:"/Java热门面试题/Hibernate框架(Hibernate Framework).md"
            },{
                text:'Java并发编程(Java Concurrency Programming)',
                link:"/Java热门面试题/Java并发编程(Java Concurrency Programming).md"
            },{
                text:'JVM(Java Virtual Machine)',
                link:"/Java热门面试题/JVM(Java Virtual Machine).md"
            },{
                text:'MVC架构(Model-View-Controller)',
                link:"/Java热门面试题/MVC架构(Model-View-Controller).md"
            },{
                text:'MyBatis框架(MyBatis Framework)',
                link:"/Java热门面试题/MyBatis框架(MyBatis Framework).md"
            },{
                text:'RESTful API(Representational API)',
                link:"/Java热门面试题/RESTful API(Representational API).md"
            },{
                text:'MyBatis框架(MyBatis Framework)',
                link:"/Java热门面试题/MyBatis框架(MyBatis Framework).md"
            },
            {  text:" 数据库连接池（Database Connection Pool）",  link: "/Java热门面试题/数据库连接池(Database Connection Pool).md"},
            {  text:" 线程池（Thread Pool）",  link: "/Java热门面试题/线程池(Thread Pool).md"},
            {  text:" 输入输出流（Input Output Stream）",  link: "/Java热门面试题/输入输出流(Input Output Stream).md"},
            {  text:" 锁（Lock）",  link: "/Java热门面试题/锁(Lock).md"},
            {  text:" 高并发（High Concurrency）",  link: "/Java热门面试题/高并发(High Concurrency).md"}        ],
    },

] as SidebarConfig;