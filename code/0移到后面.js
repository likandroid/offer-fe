// 将0移到最后，在原数组操作，不改变顺序
// 示例：输入: [2, 0, 0, 1, 0, 3], 结果：[2, 1, 3, 0, 0, 0]
var arr = [2, 0, 0, 1, 0, 3]
function func (arr) {
  let y = 0
  for (let i = 0; y<arr.length; y++) {
    console.log(y);
    if (!arr[i]) {
      arr.push(arr[i])
      arr.splice(i, 1)
      console.log(arr);
    } else {
      i++
    }
  }
  return arr
}


// console.log(func(arr));

// 例如，在字符串“arabcacfr”中，最长的不含重复字符的子字符串是“acfr”，长度为4
function repeat(params) {
  var result = []
  var numArr = []
  params.split('').forEach(element => {
    if (!result.includes(element)) {
      result.push(element)
    } else {
      numArr.push(result.length)
      result = []
      result.push(element)
    }
    console.log(result);
  });
  numArr.push(result.length)
  return Math.max(...numArr)
}

console.log(repeat('arabcacfr'));