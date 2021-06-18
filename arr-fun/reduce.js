let datasource = [{
  error: true,
}, {
  error: false,
}]
/**
 * 将其结果汇总为单个返回值,
 * 由reduce返回的值将是最后一次回调返回值，那么就返回的是isOk的值
 */
let result = datasource.reduce((isOk, next) => {
  if (!next.error) {
    console.log('111' + isOk);
    return isOk
  }
  isOk = false
  return isOk
}, true)
console.log(result);

/**
 * 累加数组中的所有值
 */
var sum = [0, 1, 2, 3].reduce(function (accumulator, currentValue) {
  return accumulator + currentValue;
}, 0);

console.log(sum);
/**
 * 使用箭头函数
 */
var initialValue = 0;
var sum = [{ x: 1 }, { x: 2 }, { x: 3 }].reduce(
  (accumulator, currentValue) => {
    accumulator + currentValue.x
  }
  , initialValue
);
console.log(sum);
/**
 * 计算数组中每个元素出现的次数
 */
var names = ['Alice', 'Bob', 'Tiff', 'Bruce', 'Alice'];
let count = names.reduce((allNames, next) => {
  if (next in allNames) {
    allNames[next]++
  } else {
    allNames[next] = 1
  }
  return allNames
}, {})

console.log(count);

