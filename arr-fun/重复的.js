/**
 * 
 * 给定数组 ["a", "a","a", "c", "c", "t", "a", "a"]，输出连续同类项出现次数
    输出：["a-3", "c-2", "t-1", "a-2"]
 */


// var arr = ["a", "a", "a", "c", "c", "t", "a", "a"]
var arr = ['a', 'a', 'a']
function countFunc(arr) {
  var result = []
  var cur = arr[0]
  let count = 0

  for (let i = 0; i <= arr.length; i++) {
    if (cur !== arr[i]) {
      result.push(`${arr[i - 1]}-${count}`)
      cur = arr[i]
      count = 1
    } else {
      count++
    }
  }
  return result
}

console.log(countFunc(arr));