
# Java输入输出流的使用

Java作为一种面向对象的编程语言，提供了丰富的类库和API来实现输入输出流（IO）操作。Java中的IO主要是按照流（stream）的模式来实现，其中数据的流向是按照计算机的方向确定的，流入计算机的数据流叫做输入流(inputStream)，由计算机发出的数据流叫做输出流(outputStream)。在本篇文章中，我们会深入讲解Java中的输入输出流的基本概念和常用API，并给出相应的示例代码。

## IO的概述

Java中提供了java.io包来实现输入输出流的操作。在该包中，主要包含以下三个类：

- InputStream：字节输入流的抽象类
- OutputStream：字节输出流的抽象类
- Reader/Writer：字符输入输出流的抽象类

在Java IO中，按照数据流的不同，可以分类为字节流和字符流两种。其中字节流可以处理所有类型的数据，而字符流只能处理字符形式的数据。在下面的章节中，我们将分别介绍字节流和字符流的使用。

## 字节输入流

字节输入流用于读取二进制数据，每次可以从流中读取一个或若干个字节。Java中提供了多种字节输入流的实现类，包括FileInputStream、ByteArrayInputStream、PipedInputStream等。下面我们以FileInputStream为例，讲解如何使用字节输入流读取文件。

### 读取文件

FileInputStream是Java中用于读取文件的最常用类之一。使用FileInputStream读取文件需要以下三个步骤：

1. 创建FileInputStream对象并传入文件路径。
2. 使用FileInputStream的read()方法读取文件内容，并将结果存储在一个字节数组中。
3. 关闭FileInputStream对象。

下面是使用FileInputStream读取文件的示例代码：

```java
import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;

public class ReadFileDemo {
    public static void main(String[] args) throws IOException {
        File file = new File("test.txt");
        FileInputStream fis = new FileInputStream(file);
        byte[] data = new byte[(int)file.length()];
        fis.read(data);
        fis.close();
        String content = new String(data, "UTF-8");
        System.out.println(content);
    }
}
```

在上面的代码中，我们首先创建了一个FileInputStream对象fis，然后使用fis的read()方法读取了文本文件test.txt的所有内容，并将结果存储在data数组中。最后，我们将data数组转换为字符串并输出到控制台上。

### 读取二进制文件

除了文本文件，我们还可以使用FileInputStream读取二进制文件，例如图片、视频、音频等文件。在读取二进制文件时，通常需要使用缓冲区来提高读取效率。下面是读取二进制文件的示例代码：

```java
import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.io.InputStream;

public class ReadBinaryFileDemo {
    public static void main(String[] args) throws IOException {
        File file = new File("test.jpg");
        InputStream is = new FileInputStream(file);
        byte[] buffer = new byte[1024];
        int length;
        while ((length = is.read(buffer)) != -1) {
            // do something with the buffer
        }
        is.close();
    }
}
```

在上面的代码中，我们将缓冲区大小设置为1024字节，然后使用while循环不断读取文件内容，并将结果存储在缓冲区中。需要注意的是，如果读取到文件末尾，is.read()方法会返回-1，此时需要退出循环。

## 字节输出流

字节输出流用于向文件或其他设备写入二进制数据。Java中提供了多种字节输出流的实现类，包括FileOutputStream、ByteArrayOutputStream、PipedOutputStream等。下面我们以FileOutputStream为例，讲解如何使用字节输出流将内容写入文件。

### 写入文件

FileOutputStream是Java中用于写入文件的最常用类之一。使用FileOutputStream写入文件需要以下三个步骤：

1. 创建FileOutputStream对象并传入文件路径。
2. 使用FileOutputStream的write()方法写入文件内容。
3. 关闭FileOutputStream对象。

下面是使用FileOutputStream写入文件的示例代码：

```java
import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;

public class WriteFileDemo {
    public static void main(String[] args) throws IOException {
        File file = new File("test.txt");
        FileOutputStream fos = new FileOutputStream(file);
        String content = "Hello, world!";
        fos.write(content.getBytes("UTF-8"));
        fos.close();
    }
}
```

在上面的代码中，我们首先创建了一个FileOutputStream对象fos，然后使用fos的write()方法将字符串"Hello, world!"写入文件test.txt中，并最终关闭了fos对象。

### 写入二进制文件

除了文本文件，我们还可以使用FileOutputStream写入二进制文件，例如图片、视频、音频等文件。在写入二进制文件时，通常需要使用缓冲区来提高写入效率。下面是写入二进制文件的示例代码：

```java
import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.OutputStream;

public class WriteBinaryFileDemo {
    public static void main(String[] args) throws IOException {
        File file = new File("test.jpg");
        OutputStream os = new FileOutputStream(file);
        byte[] buffer = new byte[1024];
        // do something with the buffer
        os.write(buffer);
        os.close();
    }
}
```

在上面的代码中，我们将缓冲区大小设置为1024字节，然后使用os的write()方法将缓冲区中的内容写入文件中。

## 字符输入流

在Java中，字符输入流主要用于读取文本文件。Java中提供了多种字符输入流的实现类，包括FileReader、BufferedReader等。下面我们以FileReader为例，讲解如何使用字符输入流读取文件。

### 读取文件

FileReader是Java中用于读取文本文件的最常用类之一。使用FileReader读取文件也需要以下三个步骤：

1. 创建FileReader对象并传入文件路径。
2. 使用FileReader的read()方法读取文件内容。
3. 关闭FileReader对象。

下面是使用FileReader读取文件的示例代码：

```java
import java.io.File;
import java.io.FileReader;
import java.io.IOException;

public class ReadFileDemo {
    public static void main(String[] args) throws IOException {
        File file = new File("test.txt");
        FileReader reader = new FileReader(file);
        char[] data = new char[(int)file.length()];
        reader.read(data);
        reader.close();
        String content = new String(data);
        System.out.println(content);
    }
}
```

在上面的代码中，我们首先创建了一个FileReader对象reader，然后使用reader的read()方法读取了文本文件test.txt的所有内容，并将结果存储在data数组中。最后，我们将data数组转换为字符串并输出到控制台上。

接下来，我们继续来讲解BufferedReader的使用。

### 缓冲读取文本文件

BufferedReader是Java中常用的一种字符输入流类，它可以实现高效的从输入流中读取文本数据。和FileReader相比，BufferedReader具有更高的读取效率和更好的灵活性。下面我们以BufferedReader读取文本文件为例，演示使用BufferedReader的基本操作。

```java
import java.io.BufferedReader;
import java.io.File;
import java.io.FileReader;
import java.io.IOException;

public class ReadFileDemo {
    public static void main(String[] args) throws IOException {
        File file = new File("test.txt");
        FileReader fr = new FileReader(file);
        BufferedReader br = new BufferedReader(fr);
        String line = null;
        while((line=br.readLine()) != null) {
            System.out.println(line);
        }
        br.close();
        fr.close();
    }
}
```

### 缓冲读取标准输入

除了读取文本文件之外，BufferedReader还可以用来读取标准输入。下面是一个示例程序，演示如何使用BufferedReader从键盘上读取输入数据：

```java
import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

public class ReadInputDemo {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        String line = null;
        while((line=br.readLine()) != null) {
            if(line.equals("exit")) {
                break;
            }
            System.out.println("你输入的内容是：" + line);
        }
        br.close();
    }
}
```

在上面的示例程序中，我们使用BufferedReader从标准输入（键盘）中读取输入数据，并在控制台上输出。如果用户输入了"exit"，则退出程序。

至此，我们已经讲解了BufferedReader的基本用法，可以看出，BufferedReader是一个十分强大和实用的工具类，为我们处理复杂的输入流提供了很大的便利。