## 集合框架（Collection Framework）

### 面试题1：什么是集合框架？它包含哪些接口和类？

答：集合框架是Java中用于存储和操作数据的一组接口和类，它包含以下接口和类：

1. Collection接口：表示一组对象的集合，包括List、Set和Queue三种类型。
2. List接口：表示有序的集合，可以重复。
3. Set接口：表示无序的集合，不可以重复。
4. Queue接口：表示队列，先进先出。
5. Map接口：表示键值对的集合。
6. ArrayList类：实现了List接口，使用数组实现，支持随机访问。
7. LinkedList类：实现了List接口，使用链表实现，支持快速插入和删除。
8. HashSet类：实现了Set接口，使用哈希表实现，不保证元素的顺序。
9. TreeSet类：实现了Set接口，使用红黑树实现，保证元素按照自然顺序排序。
10. HashMap类：实现了Map接口，使用哈希表实现，可以快速查找键值对。
11. TreeMap类：实现了Map接口，使用红黑树实现，可以按照键的自然顺序排序。

### 面试题2：List和Set有什么区别？它们的实现类有哪些？

答：List和Set的区别在于List是有序的，可以重复，而Set是无序的，不可以重复。它们的实现类有以下几种：

1. List的实现类：ArrayList、LinkedList、Vector。
2. Set的实现类：HashSet、TreeSet、LinkedHashSet。

### 面试题3：HashMap和Hashtable有什么区别？它们的实现方式是什么？

答：HashMap和Hashtable的区别在于HashMap是非线程安全的，而Hashtable是线程安全的。它们的实现方式是使用哈希表实现，将键映射到值。