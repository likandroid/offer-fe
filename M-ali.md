阿里健康

1. JSV8引擎的原理
  V8引擎的内部结构
  V8由许多子模块构成，其中这4个模块是最重要的：

  在运行C、C++以及Java等程序之前，需要进行编译，不能直接执行源码；但对于JavaScript来说，我们可以直接执行源码(比如：node server.js)，它是在运行的时候先编译再执行，这种方式被称为即时编译(Just-in-time compilation)，简称为JIT。因此，V8也属于JIT编译器。
  Parser：负责将JavaScript源码转换为Abstract Syntax Tree (AST)
  Ignition：interpreter，即解释器，负责将AST转换为Bytecode，解释执行Bytecode；同时收集TurboFan优化编译所需的信息，比如函数参数的类型；
  TurboFan：compiler，即编译器，利用Ignitio所收集的类型信息，将Bytecode转换为优化的汇编代码；
  Orinoco：garbage collector，垃圾回收模块，负责将程序不再需要的内存空间回收；
2. JS作用域
3. var变量提升，如何解决提升的问题
4. 垃圾回收机制
5. 闭包
6. promise、promise如何解决回调地狱
7. ES6中自己熟悉的知识点（我回答的var、let、const）
8. 如何实现手机扫描电脑上的二维码，然后PC端实现登录
  1. 每打开一次微信(Client)电脑浏览器网页时会随机生成一个含有唯一uid的二维码，每次刷新页面都会不一样(*这个可以保证一个uid只可以绑定一个帐号和密码，如果一个uid可以绑定多个帐号和密码，那么很可能你的电脑会登录别人的微信)
  返回uid的目的是识别用户身份，而且实际上打开这个页面时浏览器已经和Server创建了一个长连接等待确认信息。这个页面在加载完毕时，也已经把很多登录后才需要的相关资源都预先加载进来了，所以长连接等待登录用户得到确认后展示用户信息速度很快，因为无需刷新页面和加载头像外的其他资源。
  2. 
9. for in for of
  使用for in （大部分用于遍历json）也可以遍历数组，但是会存在以下问题：
  let person={name:"老王",age:23,city:"大唐"}
  1.index索引为字符串型数字，不能直接进行几何运算
  2.遍历顺序有可能不是按照实际数组的内部顺序
  3.使用for in会遍历数组所有的可枚举属性，包括原型。例如上栗的原型方法method和name属性
  
  for of:（可遍历map，object,array,set string等）用来遍历数据
  避免了for in的所有缺点，可以使用break,continue和return，
  但是for of无法循环对象person
10. WeakMap对Key有限制，它必须是Object