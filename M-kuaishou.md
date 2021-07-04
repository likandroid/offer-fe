快手

用户输入url后的过程
flex了解吗？flex：1的作用，是哪几种属性合成的？
未知宽高元素垂直水平居中水平，用flex实现
给一个div，里面包含很多span，怎么给第5n个span后添加一个冒号
1. nth-child和nth-of-type区别
    :nth-child(n) 选择器匹配属于其父元素的第 N 个子元素
    :nth-of-type(n) 选择器匹配属于父元素的特定类型的第 N 个子元素的每个元素
    odd 奇数 even 偶数
2. js怎么判断数据类型，基本数据类型有哪些，typeof null得到什么，
  JavaScript中变量是“弱类型”的，一个变量可以现在被赋值为 字符串类型，随后又被赋值为数字类型。typeof是一个操作符而不是函数，用来检测给定变量的数据类型。
  typeof原理： 不同的对象在底层都表示为二进制，在Javascript中二进制前（低）三位存储其类型信息。
  000: 对象
  010: 浮点数
  100：字符串
  110： 布尔
  1： 整数
  typeof null 为"object", 原因是因为 不同的对象在底层都表示为二进制，在Javascript中二进制前（低）三位都为0的话会被判断为Object类型，null的二进制表示全为0，自然前三位也是0，所以执行typeof时会返回"object"。
一个不恰当的例子，假设所有的Javascript对象都是16位的，也就是有16个0或1组成的序列，
  Symbol 是ES6中引入的一种原始数据类型，表示独一无二的值
  typeof null // 'object'
  typeof undefined; // "undefined"
  typeof false; // "boolean"
  typeof 1; // "number"
  typeof '1'; // "string"
  typeof {}; // "object" 
  typeof []; // "object" 
  typeof new Date(); // "object"
  function foo() {}; typeof foo; // 'function'
  typeof Symbol; // "Symbol"
  typeof 123n // 'bigint'
  instanceof 的内部机制是：检测构造函数的 prototype 属性是否出现在某个实例对象的原型链上。
  Object.prototype是js原型链的最顶端，它的__proto__是null(有__proto__属性，但值是 null，因为这是原型链的最顶端)；为什么要这么设计？
最主要的就是节省内存，如果属性和方法定义在原型上，那么所有的实例对象就能共享。
  [] instanceof Array; // true
  [] instanceof Object; // true
  [] instanceof RegExp; // false
  new Date instanceof Date; // true

  对象的Symbol.hasInstance属性，指向一个内部方法。当其他对象使用instanceof运算符，判断是否为该对象的实例时，会调用这个方法。比如，foo instanceof Foo在语言内部，实际调用的是Foo[Symbol.hasInstance](foo)。
  class MyClass {
    [Symbol.hasInstance](foo) {
      return foo instanceof Array;
    }
  }
  [1, 2, 3] instanceof new MyClass() // true
变量提升
promise知道哪些API，promise.all
promise和async，await区别
算法题 ：给一个字符串，返回这个字符串中连续出现次数最多的字符
防抖节流，手写一个防抖或节流
vue组件通信
vue原理

ES6新特性
箭头函数和普通函数的区别
==和===的区别
null==false的结果
实现固定宽度窗口溢出可横向滚动
css定位
flex布局
Nodejs的模块化
ES6的模块化
Nodejs可以通过import来引入模块吗
ES6中可以通过require来引入模块吗
Nodejs中的常用模块
promise

vue组件传值
常见数据结构
数组和 链表 的区别
一个4升和一个9升的杯子倒出6升水
