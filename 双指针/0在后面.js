var moveZeroes = function (nums) {
  let j = 0
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] != 0) {
      if (i > j) {
        nums[j] = nums[i];
        nums[i] = 0;
        console.log(nums);
      }
      j++;
    }
  }
  return nums
};


console.log(moveZeroes([0, 1, 0, 3, 0, 12]));
