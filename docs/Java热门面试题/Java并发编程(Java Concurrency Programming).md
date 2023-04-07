# Java并发编程(Java Concurrency Programming)

# Java并发编程的10个高频面试题

[[1](https://www.zhihu.com/question/36028919)]

Java并发编程是Java语言中比较重要的技术之一，它涉及到多线程、锁、线程池等方面的知识。在Java后端开发的面试过程中，Java并发编程也是一个经常被问到的重要话题之一。本文总结了Java并发编程的10个高频面试题。

## 1. 什么是线程安全？如何保证线程安全？

线程安全指的是多线程并发执行时，程序不会出现数据不一致或者其他异常情况。常见的保证线程安全的方式有以下几种：

- 使用synchronized关键字或者Lock接口进行同步。这种方式保证了同一时间只有一个线程访问共享数据，从而避免了多线程竞争导致的数据不一致。
- 使用原子类。Java提供了一些原子类，例如AtomicInteger、AtomicLong、AtomicReference等，可以在保证线程安全的同时提高程序的效率。
- 使用线程安全的容器类。Java中提供了一些线程安全的容器类，例如ConcurrentHashMap、CopyOnWriteArrayList等，这些容器可以在多线程并发访问时保证数据的安全性。

## 2. 什么是线程池？为什么要使用线程池？

线程池是一个可以复用线程的线程集合。它可以避免重复创建和销毁线程对象，从而提高程序的效率和性能。使用线程池有以下几个好处：

- 降低系统资源消耗。线程池可以复用线程，避免了重复创建和销毁线程对象，从而降低了系统资源消耗。
- 提高响应速度。由于线程池中的线程可以复用，因此可以在短时间内响应更多的任务请求，提高了系统的响应速度。
- 提高线程的可管理性。线程池可以设置线程数、队列长度等参数，从而提高了线程的可管理性。

## 3. 什么是死锁？如何避免死锁？

死锁指的是多个线程在互相等待对方释放所占用的资源，导致彼此都无法继续执行的一种情况。常见的避免死锁的方式包括以下几种：

- 避免使用嵌套锁。尽量避免使用多层嵌套的锁结构，否则容易导致死锁。
- 使用tryLock方法。在使用ReentrantLock时，可以使用tryLock方法进行尝试获取锁，如果获取不到锁就放弃等待，避免了死锁的发生。
- 按照固定的顺序获取锁。在使用多个锁的情况下，可以按照固定的顺序获取锁，从而避免死锁的发生。

## 4. 什么是线程上下文切换？如何降低线程上下文切换的次数？

线程上下文切换指的是CPU从一个线程中暂停执行转而开始执行另一个线程的过程。线程上下文切换会导致系统的开销增加，从而降低了系统的效率和性能。常见的降低线程上下文切换的方式包括以下几种：

- 减少线程数量。线程上下文切换是由于CPU在不同的线程间切换导致的，因此可以通过减少线程数量来降低上下文切换的次数。
- 使用协程。协程是一种轻量级的线程，它不需要操作系统的支持，能够在单个线程中实现多个协程任务的切换，从而避免了线程上下文切换的开销。
- 减少锁的使用。锁的使用是导致线程上下文切换的一个重要原因，因此可以通过减少锁的使用来降低线程上下文切换的次数。


## 5. 什么是 CAS？如何使用 CAS 实现原子操作？

CAS（Compare and Swap）是一种乐观锁机制，用来解决并发环境下的数据一致性问题。它通过比较当前值与预期值的方式来判断是否发生了冲突，如果没有发生冲突则进行更新操作，并返回更新前的值，否则不进行任何操作。在 Java 中，CAS 通常使用 AtomicInteger、AtomicLong、AtomicReference 等原子类来实现。

CAS 的实现原理可以概括为以下三步：

1. 读取共享变量的当前值；
2. 比较该值与预期值是否相等；
3. 如果相等，则更新共享变量的值。

使用 CAS 实现原子操作的示例代码如下：

```java
import java.util.concurrent.atomic.AtomicInteger;

public class Counter {
    private AtomicInteger count = new AtomicInteger(0);

    public int getCount() {
        return count.get();
    }

    public void increment() {
        int oldValue, newValue;
        do {
            oldValue = count.get();
            newValue = oldValue + 1;
        } while (!count.compareAndSet(oldValue, newValue));
    }
}
```

在上述代码中，increment() 方法使用 CAS 实现对 count 值的原子操作。该方法首先读取 count 的当前值，然后通过 CAS 比较当前值与预期值是否相等，如果相等则更新 count 的值，否则继续循环直到更新成功为止。

CAS 的优点包括：

- 可以避免死锁和线程挂起的问题；
- 能够提高并发效率，减少锁的竞争；
- 由于不需要加锁，因此可以降低系统开销和资源消耗。

CAS 的缺点包括：

- 循环 CAS 如果长时间不成功，会给 CPU 带来非常大的执行开销；
- 只能保证一个共享变量的原子操作，对于多个共享变量的操作无法保证原子性。

以上就是 CAS 的基本概念和使用方式。

## 6. 什么是 AQS？如何使用 AQS 实现自定义锁？

AQS（AbstractQueuedSynchronizer）是 Java 并发编程中的重要组件，它提供了一种实现同步器的框架，并被 ReentrantLock、CountDownLatch、Semaphore 等锁和同步工具所使用。AQS 的核心思想是利用一个双向队列来维护等待线程，而锁的获取和释放过程则分别对应着入队和出队的操作。

使用 AQS 实现自定义锁的步骤如下：

1. 定义一个内部类继承 AQS；
2. 重写 tryAcquire()、tryRelease() 等方法；
3. 在自定义锁中调用 AQS 提供的 acquire()、release() 等方法。

下面是一个使用 AQS 实现的自定义锁的示例代码：

```java
import java.util.concurrent.locks.AbstractQueuedSynchronizer;

public class MyLock {
    private Sync sync = new Sync();

    public void lock() {
        sync.acquire(1);
    }

    public void unlock() {
        sync.release(1);
    }

    private static class Sync extends AbstractQueuedSynchronizer {
        protected boolean tryAcquire(int arg) {
            return compareAndSetState(0, 1);
        }

        protected boolean tryRelease(int arg) {
            setState(0);
            return true;
        }
    }
}
```

在上述代码中，我们定义了一个 MyLock 类作为自定义锁，并通过一个内部类 Sync 继承了 AQS。在 tryAcquire() 方法中，我们使用 compareAndSetState() 方法来进行原子性操作，如果修改成功，则返回 true，表示当前线程获取到了锁。在 tryRelease() 方法中，我们只需要将 state 设置为 0 即可实现释放锁的操作。最后，在 lock() 和 unlock() 方法中我们分别调用了 Sync 的 acquire() 和 release() 方法，以实现自定义锁的功能。

使用 AQS 实现自定义锁可以更加灵活地控制同步逻辑，例如可以实现公平锁、非公平锁等不同的同步方式。

## 7. 什么是线程间通信？如何实现线程间通信？

线程间通信是指多个线程之间通过共享内存或者其他机制来交换信息的过程。在 Java 中，线程间通信通常使用 wait()、notify()、notifyAll() 等方法来实现。

具体实现步骤如下：

1. 在共享变量上加锁；
2. 判断条件是否满足，如果不满足，则调用 wait() 方法等待；
3. 如果条件满足，则进行相应的操作，并唤醒其他线程；
4. 释放锁。

下面是一个使用 wait() 和 notify() 实现线程间通信的示例代码：

```java
public class MyTask implements Runnable {
    private int number;

    public MyTask(int number) {
        this.number = number;
    }

    public void run() {
        synchronized (this) {
            try {
                while (true) {
                    System.out.println("Task " + number + " is waiting");
                    wait();
                    System.out.println("Task " + number + " is running");
                }
            } catch (InterruptedException e) {
                e.printStackTrace();
            }
        }
    }

    public void signal() {
        synchronized (this) {
            notifyAll();
        }
    }
}
```

在上述代码中，我们定义了一个 MyTask 类作为线程任务，在 run() 方法中使用 while 循环来等待条件的满足。在 signal() 方法中，我们使用 notifyAll() 方法来唤醒所有等待的线程。注意到在使用 wait() 和 notify() 方法时必须获得对象的监视器锁，因此在代码中我们使用 synchronized(this) 来对共享对象进行加锁。

## 8. 什么是读写锁？如何使用读写锁提高程序的效率？

读写锁是一种特殊的锁机制，它允许多个线程同时读取共享变量，但只允许一个线程进行写操作。与普通锁相比，读写锁能够更加有效地利用 CPU 和内存资源，从而提高程序的效率。

在 Java 中，读写锁通常使用 ReentrantReadWriteLock 类来实现。

使用读写锁提高程序效率的基本策略是：

- 尽量减少对共享变量的写操作，尤其是长时间占用锁的写操作；
- 在读操作不会影响数据一致性的情况下，尽可能多地使用读锁。

下面是一个使用读写锁实现缓存的示例代码：

```java
import java.util.HashMap;
import java.util.Map;
import java.util.concurrent.locks.ReentrantReadWriteLock;

public class Cache {
    private Map<String, Object> map = new HashMap<String, Object>();
    private ReentrantReadWriteLock lock = new ReentrantReadWriteLock();

    public Object get(String key) {
        lock.readLock().lock();
        try {
            return map.get(key);
        } finally {
            lock.readLock().unlock();
        }
    }

    public void put(String key, Object value) {
        lock.writeLock().lock();
        try {
            map.put(key, value);
        } finally {
            lock.writeLock().unlock();
        }
    }
}
```

在上述代码中，我们使用 ReentrantReadWriteLock 来实现了一个缓存类。在 get() 方法中，我们先获取读锁，然后直接从 map 中读取数据，最后释放读锁。在 put() 方法中，我们获取写锁，然后将数据写入 map 中，最后释放写锁。这样，在大量读操作和少量写操作的情况下，我们可以充分利用读锁对共享资源的并发读取，从而提高程序效率。

## 9. 什么是线程安全？如何保证线程安全？

线程安全是指在多个线程同时访问共享资源时，不会出现数据不一致、状态异常等问题的情况。线程安全的实现需要满足两个条件：原子性和可见性。原子性即能够保证操作的连续性和独立性，比如说对于一个变量的自增操作应该是原子操作，不能出现数据慢慢累加的情况；可见性则要求对一个变量的修改能够被其他线程及时感知到，否则就有可能发生不一致的情况。

在 Java 中，常用的保证线程安全的方法有以下几种：

1. 使用 synchronized 关键字：synchronized 能够保证同一时刻只有一个线程可以访问共享资源，其他线程需要等待当前线程释放锁后才能访问。synchronized 可以用在方法上或代码块中。

2. 使用 ReentrantLock 类：与 synchronized 类似，ReentrantLock 也是用来保证同步的机制，但相较于 synchronized，它提供了更加灵活的锁处理方式。

3. 使用 volatile 关键字：volatile 能够保证变量的可见性，即多个线程能够及时感知到变量值的修改，从而保证线程安全。

4. 使用原子类：Java 中提供了多种原子类来保证单个操作的原子性，例如 AtomicInteger 和 AtomicLong 等。

5. 使用线程安全的集合：Java 中的线程安全集合类有 ConcurrentHashMap、ConcurrentSkipListMap、ConcurrentLinkedQueue 等，它们能够确保在并发访问时数据的一致性和正确性。

总之，保证线程安全的方式有很多，具体实现取决于具体的应用场景和需求。

## 10 .假设高并发场景

针对高并发场景，我们需要考虑以下几个方面来进行处理：

1. 分布式架构：通过分布式系统的方式将负载均衡到多台机器上，避免单点故障，提升系统并发量和吞吐量。

2. 缓存优化：通过使用缓存来减少数据库访问压力，提升响应速度。可以将热点数据放入缓存中，或者使用 CDN 来缓存静态资源。

3. 数据库优化：对于频繁读写的表，可以采用分库分表的方式，避免单一数据库成为系统瓶颈。同时也要注意数据库的索引、SQL 语句的优化等方面。

4. 异步处理：对于一些 I/O 密集型的操作，可以采用异步的方式进行处理，提升系统并发量。

5. 限流控制：可以通过设置 QPS（每秒请求量）的方式对系统进行限流，避免系统因为超出承载能力而崩溃。

6. 扩容升级：当以上措施都不能满足高并发的需求时，可以考虑增加机器数量，升级硬件等方式来扩大系统的承载能力。

总之，在高并发场景下，需要综合考虑多种因素，采取多种措施来进行处理，以保障系统的稳定性和高可用性。需要根据具体情况来制定相应的策略。