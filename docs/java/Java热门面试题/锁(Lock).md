# 锁(Lock)


## 1. 什么是锁？为什么需要锁？


锁是一种多线程并发控制机制，用于保证线程之间的同步和互斥。在多线程环境下，如果两个或多个线程同时访问共享资源，可能会产生数据竞争、死锁等问题，而锁可以有效避免这些问题的出现。

需要锁的原因包括：

- 共享资源的访问需要保证线程之间的同步和互斥，避免数据竞争导致数据不一致。
- 锁可以保证线程之间的有序执行，避免出现死锁等问题。
- 锁可以提供可见性保证，确保线程读取到的数据是正确的。

## 2. Java中常见的锁有哪些？它们的区别是什么？


Java中常见的锁包括：

- `synchronized`关键字：一种内置锁，用于保证方法或代码块在同一时刻只能被一个线程执行，实现了独占锁的机制。
- `ReentrantLock`：一种可重入锁，与`synchronized`功能相似，但比`synchronized`更加灵活。它可以实现公平锁或非公平锁，并提供了一些高级功能，如中断等待锁、获取多个锁等。
- `ReadWriteLock`：一种读写锁，由读锁和写锁组成。在没有线程获取写锁时，多个线程可以同时获取读锁进行读取操作，实现了共享锁的机制，在需要对资源进行写操作时再获取写锁，实现了独占锁的机制。
- `StampedLock`：一种乐观锁，支持读锁、写锁和乐观读锁三种模式。乐观读锁是一种无锁操作，当没有写锁存在时，可以直接读取资源。

以上锁都是Java内置的锁，可以根据不同的应用场景进行选择。

以下是基于Java8的锁示例代码：

```java
import java.util.concurrent.locks.Lock;
import java.util.concurrent.locks.ReentrantLock;

public class LockExample {
    private int count = 0;
    private Lock lock = new ReentrantLock();
    
    public void increment() {
        lock.lock();
        try {
            count++;
        } finally {
            lock.unlock();
        }
    }
    
    public int getCount() {
        return count;
    }
}
```

## 3. `synchronized`关键字和`ReentrantLock`的区别是什么？


`synchronized`关键字和`ReentrantLock`的区别包括：

- `synchronized`是一种内置锁，而`ReentrantLock`是一种基于类的锁。
- `synchronized`在使用时不需要手动释放锁，而`ReentrantLock`需要手动释放锁，否则可能会出现死锁的问题。
- `ReentrantLock`支持公平锁和非公平锁，而`synchronized`只支持非公平锁。
- `ReentrantLock`提供了一些高级功能，如可中断锁、锁申请等待限时、锁多次获取等，而`synchronized`没有提供这些功能。

## 4. 什么是死锁？如何避免死锁的发生？


死锁是指两个或多个线程互相持有对方所需的资源，导致线程无法继续执行的一种状态。如果不加以处理，可能会导致程序永久阻塞。

避免死锁的方法包括：

- 避免一个线程同时获得多个锁。
- 避免多个线程竞争相同的资源。
- 尝试使用定时锁，超时机制可以避免死锁的发生。
- 尽量减少锁的使用，可以使用无锁算法或者基于CAS的原子操作来代替锁。
- 如果无法避免使用锁，要注意加锁的顺序，尽量按照相同的顺序获取锁。

## 5. Java中的可重入锁是什么？如何实现？


可重入锁是指同一个线程可以多次获取同一个锁，而不会出现死锁的情况。例如，在一个递归方法中，方法调用自身时可以多次获取锁，但如果锁不能重入，则可能会出现死锁的情况。

实现可重入锁一般有两种方式：

- 对于每个锁维护一个计数器，在获取锁时将计数器加一，在释放锁时将计数器减一。只有当计数器为零时，锁才能被其他线程获取。
- 在锁中保存当前持有锁的线程信息，并且记录这个线程在锁上的重入次数，每次获取锁时判断当前线程是否已经持有该锁，如果是则重入，重入的次数则需要保存到锁状态中。

以下是第二种方式的示例代码：

```java
import java.util.concurrent.locks.Lock;
import java.util.concurrent.locks.ReentrantLock;

public class ReentrantLockExample {
    private Lock lock = new ReentrantLock();
    
    public void method1() {
        lock.lock();
        try {
            method2();
        } finally {
            lock.unlock();
        }
    }
    
    public void method2() {
        lock.lock();
        try {
            // do something
        } finally {
            lock.unlock();
        }
    }
}
```

## 6. 什么是读写锁？如何实现？


读写锁是一种特殊的锁，由读锁和写锁两部分组成。

在没有线程获取写锁时，多个线程可以同时获取读锁进行读取操作，实现了共享锁的机制。在需要对资源进行写操作时，需要获取写锁，此时读锁和写锁都不能被其他线程获取，实现了独占锁的机制。

Java中的`ReadWriteLock`提供了读写锁的基本实现。读写锁的实现一般包括两部分：

- 读锁的控制：通过一个计数器来记录读锁的数量，每当一个线程获取到读锁时，就将计数器加一；释放读锁时，将计数器减一。在没有线程持有写锁的情况下，只要计数器的值不为零，就可以允许其他线程获取读锁。
- 写锁的控制：在获取写锁时，需要先检查读锁的数量是否为零，如果不为零，则需要等待读锁被释放。获取写锁后，所有的读锁和写锁都不能被其他线程获取。

以下是基于Java8的读写锁示例代码：

```java
import java.util.concurrent.locks.ReadWriteLock;
import java.util.concurrent.locks.ReentrantReadWriteLock;

public class ReadWriteLockExample {
    private int count = 0;
    private ReadWriteLock lock = new ReentrantReadWriteLock();
    
    public void increment() {
        lock.writeLock().lock();
        try {
            count++;
        } finally {
            lock.writeLock().unlock();
        }
    }
    
    public int getCount() {
        lock.readLock().lock();
        try {
            return count;
        } finally {
            lock.readLock().unlock();
        }
    }
}
```

## 7. `volatile`关键字有什么作用？与锁的区别是什么？


`volatile`关键字用于保证变量在多线程环境下的可见性和禁止重排序优化。使用`volatile`修饰的变量可以被多个线程同时访问，读取到的值是该变量的最新值。

`volatile`关键字与锁的区别包括：

- `volatile`只能保证可见性，不能保证原子性和互斥性，而锁既可以保证可见性，也可以保证原子性和互斥性。
- `volatile`不会造成线程阻塞，因而执行效率比锁高，但如果存在计算逻辑等复杂操作，则使用锁更为合适。
- `volatile`只能修饰变量，而锁可以用于任意对象。

## 8. Java中的乐观锁是什么？如何实现？


乐观锁是一种非阻塞锁，它认为在大多数情况下并发修改是不会冲突的，因此不采用悲观锁的方式直接加锁。在Java中，常见的乐观锁实现包括 Atomic 类和StampedLock。

其中，Atomic 类提供了一组原子操作方法，可以保证读取和更新操作的原子性和内存可见性。例如，AtomicInteger 就是一个使用 CAS（Compare-and-swap）操作实现的乐观锁，可以实现线程安全的自增、自减等操作。

另外，StampedLock 是一个基于乐观读的锁实现，支持读锁、写锁和乐观读锁三种模式。乐观读锁是一种无锁操作，当没有写锁存在时，可以直接读取资源。

具体来说，StampedLock 通过一个 long 类型的 stamp 来控制锁的状态。在获取读锁和写锁时都会返回一个 stamp 值，使用这个 stamp 值来释放锁。而乐观读锁则不需要获取 stamp 值，只需要使用 tryOptimisticRead() 方法进行尝试，在之后使用 validate() 方法校验是否有写锁占用，如果没有，则操作成功，否则需要获取读锁重试。