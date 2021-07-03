let myArray = ['a', 'b', 'a', 'b', 'c', 'e', 'e', 'c', 'd', 'd', 'd', 'd']
console.log(new Set(myArray));
// 从一个类似数组或可迭代对象创建一个新的，浅拷贝的数组实例
console.log(Array.from(new Set(myArray)));
console.log(Array.from('foo'));
// expected output: Array ["f", "o", "o"]

console.log(Array.from([1, 2, 3], x => x + x));
// expected output: Array [2, 4, 6]

// 去重合并

var m = [1, 2, 2], n = [2, 3, 3], h = [4, 5, 4, 6];
function combine(m, n) {
  // 对于参数有要求
  var arr = m.concat(n)
  console.log(Array.from(new Set(arr)));
}
// arguments 是一个对应于传递给函数的参数的类数组对象。
function combineNoParam() {
  /**
   * var args = Array.prototype.slice.call(arguments);可以转化为真正的数组
   * slice 包含begin，不包含end
   */
  // 无关参数的个数多少
  var args = Array.prototype.slice.call(arguments);
  console.log('weweew');
  console.log(arguments);
  console.log(args);
  let arr = [].concat.apply([], arguments)
  console.log(Array.from(new Set(arr)));

}
combine(m, n, h)
combineNoParam(m,n, h)
/**
 * 深拷贝
 */

