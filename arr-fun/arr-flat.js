// var arr = [1, 2, 3, [4, 1, 2]]
// 中间的depth为可选的结构深度参数，使用 Infinity正无穷大 展开任意深度的嵌套数组
var arr = [1, 2, 3, [4, 1, [12, [555, [66, [77, 8]]]]]]
function flat(arr, depth) {
  var result = []
  var count = 0
  func(arr, result, depth, count)
  return result
}

function func(arr, result, depth, count) {
  for (let i = 0; i < arr.length; i++) {
    // console.log(Array.isArray(arr[i]));
    if (Array.isArray(arr[i])) {
      flat(arr[i])
      count++
      if (count > depth && depth !== Infinity) {
        result.push(arr[i])
      } else {
        func(arr[i], result, depth, count)
      }
    } else {
      result.push(arr[i])
      // console.log(result);
    }
  }
}

console.log(flat(arr, Infinity), flat(arr, Infinity).length)