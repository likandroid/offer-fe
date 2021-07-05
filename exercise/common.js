var arr1 = [1, 4, 5, 6, 9], arr2 = [2, 3, 5, 8, 9]
repeatElement(arr1, arr2)
function repeatElement(arr1, arr2) {
  let result = []
  for (let i = 0, j = 0; i < arr1.length, j<arr2.length; i++, j++) {
    // 谁大就往后退1
    if (arr1[i] > arr2[j]) {
      i--
    } else if (arr1[i] < arr2[j]) {
      console.log(j);
      j--
    } else {
      result.push(arr1[i])
    }
  }
  console.log(result);
}