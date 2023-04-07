# MVC架构(Model-View-Controller)

## 一、Java MVC架构

### 1. 什么是MVC模式？

MVC模式是一种常见的软件架构模式，包含三个核心组件：模型、视图、控制器。其中，模型负责数据的存储和操作，视图和用户直接交互，负责将模型数据呈现给用户，控制器从视图接收请求并处理这些请求，调用模型中的方法进行数据操作，并将结果返回给视图。这三个组件相互独立，通过接口进行通信。

### 2. Java中常用的MVC框架有哪些？

在Java中，常用的MVC框架有Struts、Spring MVC和JSF等。

### 3. Spring MVC框架的基本组成是什么？

Spring MVC框架的基本组成包括：
- DispatcherServlet：前端控制器，负责请求的分发和处理。
- HandlerMapping：用于将请求映射到对应的Controller中。
- Controller：负责业务逻辑的处理。
- Model：负责数据的封装和传递。
- ViewResolver：用于查找视图并进行渲染。
- View：负责将数据渲染成HTML格式的响应。

### 4. Spring MVC框架的工作流程是什么？

Spring MVC框架的工作流程如下：
- 用户发送请求，请求会被DispatcherServlet拦截。
- DispatcherServlet根据请求的URL映射到不同的Controller上。
- Controller进行业务逻辑处理，将处理结果封装为ModelAndView对象并返回。
- DispatcherServlet将ModelAndView对象传给ViewResolver，由ViewResolver找到对应的视图。
- 视图将模型数据渲染为HTML等格式的响应，返回给客户端。

## 二、10个高频面试题

### 1. Spring框架中的IOC和AOP有什么区别？

- IOC是一种设计模式，负责维护对象之间的依赖关系，将这些依赖关系交给容器管理，使得对象的创建和变化与业务逻辑解耦。Spring中的IOC容器可以自动完成对象的创建和依赖注入。
- AOP是一种编程范式，用于将程序中的横切关注点（如日志记录、事务管理等）从业务逻辑中剥离出来。在Spring中，使用AspectJ语法和代理模式实现AOP功能。

### 2. 什么是RESTful API？如何在Spring MVC中实现RESTful服务？

RESTful API是一种通过URL传递参数，使用HTTP协议的GET、POST、PUT、DELETE等方法来操作资源的软件架构风格。在Spring MVC中，可以使用@RequestMapping注解的value参数来实现RESTful服务，如：

```java
@RestController
@RequestMapping("/users")
public class UserController {
    @Autowired
    private UserService userService;
    
    @GetMapping("/{id}")
    public User getUserById(@PathVariable int id) {
        return userService.getUserById(id);
    }
    
    @PostMapping("/")
    public String createUser(@RequestBody User user) {
        userService.save(user);
        return "success";
    }
}
```

### 3. Spring MVC如何实现文件上传？

Spring MVC中可以通过使用MultipartResolver来实现文件上传功能。首先需要在配置文件中配置MultipartResolver，然后在前端页面的form表单中添加enctype="multipart/form-data"，然后在Controller中接收文件并进行存储等操作即可。

```java
@RequestMapping("/upload")
public String uploadFile(@RequestParam("file") MultipartFile file) throws IOException {
    if (!file.isEmpty()) {
        String fileName = file.getOriginalFilename();
        String filePath = "/path/to/upload/directory/" + fileName;
        File dest = new File(filePath);
        file.transferTo(dest);   // 保存文件
        return "success";
    }
    return "error";
}
```

### 4. Spring MVC如何处理异常？

在Spring MVC中，可以通过@ControllerAdvice注解定义一个全局的异常处理类，在其中编写对应的异常处理方法，并使用@ExceptionHandler注解将处理方法与具体异常关联起来。当发生异常时，Spring MVC会调用相关的异常处理方法，返回处理结果给客户端。

```java
@ControllerAdvice
public class ExceptionHandlerAdvice {
    @ExceptionHandler(Exception.class)
    public ModelAndView handleException(Exception e) {
        ModelAndView mav = new ModelAndView();
        mav.addObject("message", e.getMessage());
        mav.setViewName("error");
        return mav;
    }
}
```

### 5. Spring MVC中如何使用JSON数据格式？

在Spring MVC中，可以通过使用@ResponseBody注解和相关的序列化工具（如Jackson）将Java对象转换为JSON数据格式。例如：

```java
@GetMapping("/users")
@ResponseBody
public List<User> getUsers() {
    List<User> users = userService.getUsers();
    return users;
}
```


### 6. Spring MVC中的拦截器有什么作用？

拦截器是 SpringMVC 中一种常用的拦截器机制，通过拦截器实现对请求进行预处理、后处理和错误处理。拦截器可以用来拦截所有的请求或是指定的请求，并对请求进行一些自定义的处理，例如记录日志、验证用户登录状态等。拦截器是基于AOP（面向切面编程）实现的。

```java
public class LoginInterceptor implements HandlerInterceptor {
    @Override
    public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler) throws Exception {
        HttpSession session = request.getSession();
        User user = (User) session.getAttribute("user");
        if (user == null) {
            // 用户未登录，跳转到登录页
            response.sendRedirect("/login");
            return false;
        }
        return true;
    }
}
```

### 7. Spring MVC如何实现文件下载？

可以使用HttpServletResponse提供的OutputStream将文件内容输出到浏览器，实现文件下载功能。例如：

```java
@GetMapping("/download")
public void downloadFile(HttpServletResponse response) throws IOException {
    File file = new File("/path/to/file");
    response.setContentType("application/octet-stream");
    response.setHeader("Content-Disposition", "attachment; filename=" + file.getName());
    byte[] bytes = FileUtils.readFileToByteArray(file);
    response.getOutputStream().write(bytes);
    response.flushBuffer();
}
```

### 8. 什么是Spring Boot？与Spring框架有何区别？

Spring Boot是一个基于Spring框架的快速开发平台，通过提供自动化配置、嵌入式Web服务器等特性来简化应用程序的搭建和部署。与Spring框架相比，Spring Boot可以更快地开发Web应用程序，并且可以更容易地进行部署、扩展和维护。

### 9. Bean的作用域有哪些？

在Spring中，Bean的作用域包括以下五种：
- singleton：单例模式，每个容器内只存在一个Bean实例。
- prototype：原型模式，每次请求容器时都创建一个新的Bean实例。
- request：请求模式，每次HTTP请求都会创建一个新的Bean实例。
- session：会话模式，同一会话中共享一个Bean实例。
- global-session：全局会话模式，同一全局会话中共享一个Bean实例。

### 10. Spring框架中的事务管理是