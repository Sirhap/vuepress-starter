# 高并发(High Concurrency)

# Java高并发五道面试题

## 1. 什么是线程池，如何使用线程池？

线程池是一个管理线程的机制，它通过预创建一些线程来避免线程的创建和销毁带来的性能损耗。在并发访问下，线程池可以合理地调度系统资源，使得服务器能够处理更多的请求。

在Java中，可以通过 `ThreadPoolExecutor` 等类来创建线程池。其中，`ThreadPoolExecutor` 是一个灵活的线程池实现，可以设置线程池大小、队列类型、拒绝策略等参数，以满足不同场景的需求。

使用线程池的一般步骤包括：

1. 创建线程池对象：`ThreadPoolExecutor executor = new ThreadPoolExecutor(corePoolSize, maximumPoolSize, keepAliveTime, unit, workQueue, threadFactory, handler);`
2. 提交任务到线程池：`executor.execute(task);`
3. 关闭线程池：`executor.shutdown();`

## 2. 什么是CAS，如何实现CAS操作？

CAS（Compare And Swap）是一种无锁算法，常用于实现并发数据结构和并发编程。CAS操作包括三个参数：内存地址V、期望值A和新值B。当且仅当内存地址V上的值等于期望值A时，才会将该地址上的值修改为新值B，否则不做任何操作。

在Java中，可以使用 `sun.misc.Unsafe` 类的相关方法来实现CAS操作。Java 8 引入的 `java.util.concurrent.atomic` 包也提供了一组原子操作类，包括 `AtomicInteger`、`AtomicLong` 等，可以方便地进行CAS操作。

以下是一个简单的CAS示例代码：

```java
public class Counter {
    private AtomicInteger count = new AtomicInteger(0);
    
    public void increment() {
        int expect;
        do {
            expect = count.get();
        } while (!count.compareAndSet(expect, expect + 1));
    }
    
    public int getCount() {
        return count.get();
    }
}
```

## 3. 什么是线程安全，如何保证线程安全？

线程安全指的是多线程环境下，程序能够正确地处理共享资源，不会出现数据竞争和活跃性问题。为了保证线程安全，需要遵循以下原则：

1. 不使用共享可变变量；
2. 加锁保护共享资源，防止并发修改；
3. 使用并发容器代替同步容器，以减小锁的粒度；
4. 使用原子类代替显式锁，以降低锁的开销。

在Java中，可以通过使用 `synchronized` 关键字或 `ReentrantLock` 类等锁机制来保证线程安全。此外，Java 5 引入的 `java.util.concurrent` 包提供了一些并发容器和原子操作类，可以更加方便地实现线程安全。

## 4. 什么是乐观锁和悲观锁？如何实现乐观锁？

乐观锁和悲观锁都是并发控制的方式。悲观锁假设并发修改会产生冲突，因此需要在访问共享资源时加上独占锁，阻止其他线程的访问。而乐观锁则认为在大多数情况下并发修改是不会冲突的，因此不采用悲观锁的方式直接加锁。

在Java中，常见的乐观锁实现包括 `Atomic` 类和 `StampedLock`。其中，`Atomic` 类提供了一组原子操作方法，可以保证读取和更新操作的原子性和内存可见性。另外，`StampedLock` 是一个基于乐观读的锁实现，支持读锁、写锁和乐观读锁三种模式。

## 5. 什么是死锁，如何避免死锁？

死锁指的是两个或多个线程互相等待对方释放资源的一种状态，导致程序无法继续执行。为了避免死锁，可以采取以下措施：

1. 破坏互斥条件：如使用非独占资源或减小锁的粒度；
2. 破坏请求和保持条件：如一次性申请所有需要的资源；
3. 破坏不剥夺条件：如允许线程抢占资源；
4. 破坏循环等待条件：如按顺序获取资源或引入超时机制。

死锁的实际解决方法因情况而异，通常需要根据代码和运行日志分析出死锁原因，再采取相应的解决措施。