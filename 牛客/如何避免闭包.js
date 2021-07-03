
// https://www.cnblogs.com/echolun/p/10584703.html
var fun = function() {
  var a = []
  console.log(b);
  var b = []
  /**
   * let 与 var的区别
   * var 时输出的一直是3
   * let 可递增输出 0 1 2
   */
  for (var i = 0; i < 3; i++) {
    a.push(function() {
      return i
    })
    b.push(i)
  }
  // console.log(i);
  return a
}

// var f = fun()

// console.log(f[0]());