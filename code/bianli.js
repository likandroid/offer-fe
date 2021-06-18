// let str = "小，朋！？；友，请"
let str = "小，/>朋！？；友，请"
let contentArr = str.split('').filter(item => {
  return item !== ' '
})
let arr = [
  { 小: 240 },
  { 朋: 480},
  { 友: 660},
  { 请: 1110 },
]
let reg = /^[a-zA-Z0-9\u4E00-\u9FA5]+$/
let result = []
console.log(contentArr, arr);
fun(contentArr)
function fun(contentArr) {
  contentArr.forEach(r => {
    if (reg.test(r)) {
      result.push(r)
    } else {
      result[result.length - 1] = result[result.length - 1] + r
    }
  });
  console.log(result);
}