function majorityElement(nums) {
  const map = new Map();
  const n = nums.length / 2;

  for (let num of nums) {
    map.set(num, (map.get(num) || 0) + 1);

    if (map.get(num)>n) {
      return num;
    }
  }
}
console.log(majorityElement([2,2,1,1,1,2,2]));

