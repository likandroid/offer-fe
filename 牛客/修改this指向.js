// 封装函数 f，使 f 的 this 指向指定的对象
function bindThis(f, oTarget) {
  return () => {
    console.log(oTarget, arguments);
/**
 * 闭包：出现闭包，就代表调用的这个函数是另一个函数的返回值（或者说是能访问到另一个函数的私有变量），
 * 会占用内存，但是内部变量是独立的
 *
 * 箭头函数内部的this是词法作用域，由上下文确定, 匿名函数内部是独立的作用域不受污染
 *
 */
    return f.apply(oTarget, arguments)
  }
}

f = function (a, b) { return this.test + a + b }
oTarget = {test: 2}


console.log(bindThis(f, oTarget)(2, 3));



// function () { 
//   var r = bindThis(
//     function (a, b) { return this.test + a + b }, 
//     { test: 2 }
//   )(2, 3); 
//   return r === 7; 
// }

/*
为什么有匿名函数，是因为apply call 是绑定之后是立即调用的，
apply的第二个参数，是数组
call的第二、三、N个参数，是 参数与参数之间使用一个逗号隔开
所以需要匿名函数包装且需要传入原函数的参数argumengts.
bind 会创建一个新函数，即函数副本，绑定函数运行时本身的参数按照顺序作为原函数的参数来调用原函数。

匿名函数形态：
var test = function () {}
将匿名函数复制为变量test，再通过变量名执行函数
(function (){ console.log(111) }) 也称为自执行函数
匿名函数在括号内部可以看成是将匿名函数当作一个变量，再通过括号进行执行
自执行函数的好处是保证内部变量不会受到外部环境的污染
*/


function a() {
  var x = 0
  var y = {name: '张三'}
  var f1 = function () {
    x++
    console.log(x);
  }
  var f2 = function (name) {
    y.name = name
    console.log(y);
  }
  return [f1, f2]
}

var fun = a()
fun[0]() // 1
fun[0]() // 2
fun[0]('djwh') // 3
fun[0]() // 4
fun[1]('i') // i
fun[1]('dfdf') // dfdf


function b() {
  var name = null
  var f1 = function (n) {
    name = n 
  }
  var f2 = function () {
    return name
  }
  return { setName: f1, getName: f2 }
}
var funcB = b()
funcB.setName('qwe')

console.log(funcB.getName());

