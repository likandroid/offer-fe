var names = ['Alice', 'Bob', 'Tiff', 'Bruce', 'Alice'];
let result = names.reduce((allNames, next) => {
  if (next in allNames) {
    allNames[next]++
  } else {
    allNames[next] = 1
  }
  return allNames
}, {})
console.log(result);