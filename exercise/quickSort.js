
var arr = [5,3,9,7, 1, 12, 33]
// O(nlog_2n)
console.log(quickSort(arr, 0, arr.length - 1));
console.log(arr);
function partation(arr, left, right) {
  let indexValue = arr[left]
  while (left < right) {
    while (indexValue < arr[right] && left < right) {
      right--
    }
    arr[left] = arr[right]
    console.log(arr[left]);
    while (indexValue >= arr[left] && left < right) {
      left++
    }
    arr[right] = arr[left]
  }
  arr[left] = indexValue
  return left
}
function quickSort(arr, min, max) {
  if (min < max) {
    let pos = partation(arr, min, max)
    quickSort(arr, min, pos - 1)
    quickSort(arr, pos + 1, max)
  }
}