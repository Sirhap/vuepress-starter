# 线程池(Thread Pool)

# Java 线程池高频面试题

以下是关于Java线程池的一些高频面试题，供参考：

## 1. 简述什么是线程池？有什么优点？

[[2](https://blog.csdn.net/qq_40093255/article/details/116990431)]

线程池是一个用于管理线程的技术，它可以创建一定数量的线程并将它们放入一个队列中。当有任务需要执行时，线程池就会从队列中获取一个空闲线程来执行该任务，直到任务完成为止。

线程池的优点包括：

- 方便线程并发数的管控。
- 可以重复利用线程，减少线程的创建和销毁所带来的开销。
- 提高程序的执行效率，可以充分利用系统的资源，避免过度占用系统资源导致系统僵死。

## 2. Java中常见的线程池有哪些？它们的区别是什么？

[[2](https://blog.csdn.net/qq_40093255/article/details/116990431)]

Java中常见的线程池有：

- `FixedThreadPool`：一个固定大小的线程池，当提交一个任务时，如果当前线程池的线程数量没有达到设定值，就会创建一个新的线程来执行该任务，否则该任务就会被放入到等待队列中，直到有线程空闲为止。
- `CachedThreadPool`：一个将线程池大小自动调整的线程池，当提交一个任务时，如果当前线程池的线程数量没有达到设定值，就会创建一个新的线程来执行该任务，否则会将任务放入到等待队列中，并等待一段时间看是否有空闲线程可以执行任务，如果超过时间还没有空闲线程，那么就会再次创建一个新的线程来执行任务。
- `SingleThreadPool`：一个只有一个线程的线程池，所有的任务都会排队等待该线程依次执行。
- `ScheduledThreadPool`：一个支持定时以及周期性执行任务的线程池，可以实现类似于定时器的功能。

```java
import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;

public class ThreadPoolExample {
    public static void main(String[] args) {
        // 创建一个固定大小的线程池
        ExecutorService executorService = Executors.newFixedThreadPool(5);
        for (int i = 1; i <= 10; i++) {
            final int count = i;
            // 提交任务到线程池
            executorService.submit(() -> {
                System.out.println("Task " + count + " is running.");
                try {
                    Thread.sleep(1000);
                } catch (InterruptedException e) {
                    e.printStackTrace();
                }
                System.out.println("Task " + count + " is completed.");
            });
        }
        // 关闭线程池
        executorService.shutdown();
    }
}

```
以上线程池都是通过`Executor`框架实现的，并且具有不同的应用场景和特点。

## 3. 线程池中的等待队列有哪些？它们的区别是什么？

[[2](https://blog.csdn.net/qq_40093255/article/details/116990431)]

线程池中的等待队列有：

- `SynchronousQueue`：一个不存储元素的阻塞队列，每个插入操作都必须等待一个相应的移除操作，反之亦然。主要用于提交短任务或执行任务的吞吐量比较大的情况。
- `LinkedBlockingQueue`：一个基于链表结构的阻塞队列，可以无限制的存储元素，但是也可以指定队列的大小。当线程池中的线程数量已经达到了最大值，此时如果新的任务还要被执行，那么这些任务就会被放入到该队列中等待执行。
- `ArrayBlockingQueue`：一个有界阻塞队列，底层使用数组实现。它在创建时需要指定容量大小，并且容量一旦达到了最大值，就不允许再插入新的元素。当线程池中的线程数量达到了最大值，此时如果新的任务还要被执行，那么这些任务就会被放入到该队列中等待执行。
- `PriorityBlockingQueue`：一个支持优先级排序的无限阻塞队列，底层使用堆数据结构实现。可以通过指定元素的优先级来决定哪个元素先被取出。

以上等待队列都具有不同的特点和应用场景，可以根据具体的情况进行选择和配置。

## 4. 线程池中的拒绝策略有哪些？它们的区别是什么？

[[2](https://blog.csdn.net/qq_40093255/article/details/116990431)]

线程池中的拒绝策略有：

- `AbortPolicy`：默认的拒绝策略，当达到缓存队列的上限并且当前线程池中的线程数量已经达到了最大值时，新的任务就会被丢弃并抛出一个`RejectedExecutionException`异常。
- `CallerRunsPolicy`：当达到缓存队列的上限并且当前线程池中的线程数量已经达到了最大值时，新的任务由提交该任务的线程来执行。
- `DiscardPolicy`：当达到缓存队列的上限并且当前线程池中的线程数量已经达到了最大值时，新的任务会被丢弃，但不会抛出异常。
- `DiscardOldestPolicy`：当达到缓存队列的上限并且当前线程池中的线程数量已经达到了最大值时，新的任务会替换队列中等待时间最久的任务。

## 5. 如何创建一个自定义的线程池？

[[2](https://blog.csdn.net/qq_40093255/article/details/116990431)]

可以通过继承`ThreadPoolExecutor`类来自定义一个线程池，重写其构造函数和`beforeExecute()`、`afterExecute()`等方法，在其中实现自己的逻辑即可。也可以通过实现`ExecutorService`接口来创建一个自定义的线程池。在创建线程池时，需要设置合理的参数，例如核心线程数、线程池大小、等待队列类型、拒绝策略等。