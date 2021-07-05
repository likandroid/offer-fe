var arr = [1, 3, 5, 7, 9, 11, 12, 33]
// 二分查找

console.log(binarySearch(arr, 0, arr.length - 1, 12));
function binarySearch(arr, min, max, findValue) {
  if (min > max) return -1
  let index = Math.floor((min + max)/2)
  let indexValue = arr[index]
  if (indexValue > findValue) {
    return binarySearch(arr, min, index - 1, findValue)
  } else if (indexValue < findValue) {
    console.log(index + 1, max);
    return binarySearch(arr, index + 1, max, findValue)
  } else if (indexValue === findValue){
    return index
  }
}