
# Java Stream 的使用

Java Stream 是一个强大的 API，它提供了一种流式处理数据的方式。使用 Stream 可以轻松地进行集合操作，例如过滤、映射、排序等等。在本文中，我们将探讨 Stream 的基础知识及其使用。

## 基础概念

### 什么是 Stream？

Stream 是一个 Java API，它提供了一种流式处理数据的方式。Stream 可以像管道一样将数据从一个操作传递到另一个操作，最终输出结果。Stream 的操作可以分为两类：中间操作和终止操作。中间操作是指对数据的处理操作，例如过滤、映射、排序等等。终止操作是指最终输出结果的操作，例如 forEach、count、reduce 等等。

### Stream 的优势

Stream 有以下优势：

- 简洁明了。使用 Stream 可以简化代码，使代码更易于理解和维护。
- 高效性。Stream 可以并行处理数据，提高效率。
- 函数式编程。Stream 是基于函数式编程的思想设计的，可以写出更加简洁、高效、灵活的代码。

### 如何创建 Stream？

Stream 可以从集合、数组、IO 流等数据源创建。我们可以使用以下方式创建 Stream：

```java
// 从集合创建 Stream
List<String> list = Arrays.asList("apple", "banana", "orange");
Stream<String> stream1 = list.stream();

// 从数组创建 Stream
int[] array = {1, 2, 3, 4, 5};
IntStream stream2 = Arrays.stream(array);

// 从文件创建 Stream
Path path = Paths.get("file.txt");
Stream<String> stream3 = Files.lines(path);

// 从函数创建 Stream
Stream<Integer> stream4 = Stream.iterate(1, n -> n + 1).limit(10);
```

## 中间操作

### 过滤数据

使用 filter() 方法可以从 Stream 中过滤出符合条件的数据。例如，我们可以从一个字符串集合中过滤出长度大于等于 5 的字符串：

```java
List<String> list = Arrays.asList("apple", "banana", "orange", "grape", "pear");
Stream<String> stream = list.stream().filter(s -> s.length() >= 5);
```

### 转换数据

使用 map() 方法可以将 Stream 中的数据按照指定的方式进行转换。例如，我们可以将一个字符串集合中的所有字符串转换为大写：

```java
List<String> list = Arrays.asList("apple", "banana", "orange", "grape", "pear");
Stream<String> stream = list.stream().map(String::toUpperCase);
```

### 排序数据

使用 sorted() 方法可以对 Stream 中的数据进行排序。例如，我们可以对一个整数集合进行排序：

```java
List<Integer> list = Arrays.asList(3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5);
Stream<Integer> stream = list.stream().sorted();
```

### 去重数据

使用 distinct() 方法可以去重 Stream 中的数据。例如，我们可以对一个整数集合进行去重：

```java
List<Integer> list = Arrays.asList(3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5);
Stream<Integer> stream = list.stream().distinct();
```

### 截取数据

使用 limit() 方法可以截取 Stream 中的前 n 个元素。例如，我们可以对一个整数集合进行截取：

```java
List<Integer> list = Arrays.asList(3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5);
Stream<Integer> stream = list.stream().limit(5);
```

### 跳过数据

使用 skip() 方法可以跳过 Stream 中的前 n 个元素。例如，我们可以对一个整数集合进行跳过：

```java
List<Integer> list = Arrays.asList(3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5);
Stream<Integer> stream = list.stream().skip(5);
```

### 合并数据

使用 flatMap() 方法可以将多个 Stream 合并成一个 Stream。例如，我们可以将两个字符串集合合并成一个字符串集合：

```java
List<String> list1 = Arrays.asList("apple", "banana", "orange");
List<String> list2 = Arrays.asList("grape", "pear");
Stream<String> stream = Stream.of(list1, list2).flatMap(Collection::stream);
```

## 终止操作

### 循环输出数据

使用 forEach() 方法可以循环输出 Stream 中的数据。例如，我们可以循环输出一个字符串集合中的所有字符串：

```java
List<String> list = Arrays.asList("apple", "banana", "orange", "grape", "pear");
list.stream().forEach(System.out::println);
```

### 计算数据个数

使用 count() 方法可以计算 Stream 中的数据个数。例如，我们可以计算一个整数集合中的数据个数：

```java
List<Integer> list = Arrays.asList(3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5);
long count = list.stream().count();
```

### 求和数据

使用 sum() 方法可以对 Stream 中的数据进行求和。例如，我们可以对一个整数集合进行求和：

```java
List<Integer> list = Arrays.asList(3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5);
int sum = list.stream().mapToInt(Integer::intValue).sum();
```

### 求最大值数据

使用 max() 方法可以对 Stream 中的数据进行求最大值。例如，我们可以对一个整数集合进行求最大值：

```java
List<Integer> list = Arrays.asList(3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5);
Optional<Integer> max = list.stream().max(Integer::compareTo);
```

### 求最小值数据

使用 min() 方法可以对 Stream 中的数据进行求最小值。例如，我们可以对一个整数集合进行求最小值：

```java
List<Integer> list = Arrays.asList(3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5);
Optional<Integer> min = list.stream().min(Integer::compareTo);
```

### 求平均值数据

使用 average() 方法可以对 Stream 中的数据进行求平均值。例如，我们可以对一个整数集合进行求平均值：

```java
List<Integer> list = Arrays.asList(3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5);
OptionalDouble average = list.stream().mapToDouble(Integer::doubleValue).average();
```

### 求和并行处理

使用 parallel() 方法可以对 Stream 中的数据进行并行处理。例如，我们可以对一个整数集合进行求和并行处理：

```java
List<Integer> list = Arrays.asList(3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5);
int sum = list.parallelStream().mapToInt(Integer::intValue).sum();
```

## 示例代码

以下是一个使用 Stream 对整数集合进行处理的示例代码：

```java
import java.util.Arrays;
import java.util.List;

public class StreamDemo {
    public static void main(String[] args) {
        List<Integer> list = Arrays.asList(3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5);

        // 使用 filter() 方法过滤数据
        System.out.println("使用 filter() 方法过滤数据：");
        list.stream().filter(n -> n % 2 == 0).forEach(System.out::println);

        // 使用 map() 方法转换数据
        System.out.println("使用 map() 方法转换数据：");
        list.stream().map(n -> n * n).forEach(System.out::println);

        // 使用 sorted() 方法排序数据
        System.out.println("使用 sorted() 方法排序数据：");
        list.stream().sorted().forEach(System.out::println);

        // 使用 distinct() 方法去重数据
        System.out.println("使用 distinct() 方法去重数据：");
        list.stream().distinct().forEach(System.out::println);

        // 使用 limit() 方法截取数据
        System.out.println("使用 limit() 方法截取数据：");
        list.stream().limit(5).forEach(System.out::println);

        // 使用 skip() 方法跳过数据
        System.out.println("使用 skip() 方法跳过数据：");
        list.stream().skip(5).forEach(System.out::println);

        // 使用 flatMap() 方法合并数据
        System.out.println("使用 flatMap() 方法合并数据：");
        List<Integer> list1 = Arrays.asList(1, 2, 3);
        List<Integer> list2 = Arrays.asList(4, 5, 6);
        List<Integer> list3 = Arrays.asList(7, 8, 9);
        List<List<Integer>> lists = Arrays.asList(list1, list2, list3);
        lists.stream().flatMap(list4 -> list4.stream()).forEach(System.out::println);

        // 使用 forEach() 方法循环输出数据
        System.out.println("使用 forEach() 方法循环输出数据：");
        list.stream().forEach(System.out::println);

        // 使用 count() 方法计算数据个数
        System.out.println("使用 count() 方法计算数据个数：" + list.stream().count());

        // 使用 sum() 方法求和数据
        System.out.println("使用 sum() 方法求和数据：" + list.stream().mapToInt(Integer::intValue).sum());

        // 使用 max() 方法求最大值数据
        System.out.println("使用 max() 方法求最大值数据：" + list.stream().max(Integer::compareTo).get());

        // 使用 min() 方法求最小值数据
        System.out.println("使用 min() 方法求最小值数据：" + list.stream().min(Integer::compareTo).get());

        // 使用 average() 方法求平均值数据
        System.out.println("使用 average() 方法求平均值数据：" + list.stream().mapToDouble(Integer::doubleValue).average().getAsDouble());

        // 使用 parallel() 方法求和并行处理
        System.out.println("使用 parallel() 方法求和并行处理：" + list.parallelStream().mapToInt(Integer::intValue).sum());
    }
}
```

## 总结

本文介绍了 Java Stream 的基础知识及其使用。Stream 可以方便地进行集合操作，例如过滤、映射、排序等等。使用 Stream 可以使代码更加简洁、高效、灵活。在使用 Stream 时，我们需要注意 Stream 的中间操作和终止操作，以及 Stream 的优势和创建方式。