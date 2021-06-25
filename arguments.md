arguments 类数组
箭头函数么有arguments
转化为数组
ES6 的解构赋值

Array.prototype.slice.call(arguments)

# 为什么在调用这个函数的时候，代码中的‘b’却变成全局变量
```js

function func() {
  // let a = b = 0
  let a = (b = 0)
}
```

# 垃圾回收机制
https://segmentfault.com/a/1190000018605776
一般来说没有被引用的对象就是垃圾，就是要被清除， 有个例外如果几个对象引用形成一个环，互相引用，但根访问不到它们，这几个对象也是垃圾，也要被清除。

# 哪些操作造成内存泄漏
闭包
意外的全局变量
被遗忘的定时器
脱离dom的引用，虽然dom被清除，但是还是保存这dom的引用，所以。。。

# 什么是高阶函数
将函数作为参数或者返回着的函数

```js
function func (params, callback) {
  return callback(params)
}
```

# 手写Array.prototype.map
```js
  function func() {
    
  }
```