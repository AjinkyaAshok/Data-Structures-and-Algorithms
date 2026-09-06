function missingNUmber(nums) {
  let n = nums.length;

  const expected = (n * (n + 1)) / 2;
  let actual = 0;

  for(let num of nums){
    actual += num
  }
  return expected - actual
}

console.log(missingNUmber([0, 1]));
