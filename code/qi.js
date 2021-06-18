let x = 5;
function fn(x) {
  return function (y) {
    console.log(y + (++x))
  }
}
let f = fn(6)
// f = function () {
//   console.log(7 + 7);
// }
f(7)
console.log(x)