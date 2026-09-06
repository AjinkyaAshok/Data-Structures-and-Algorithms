function twosum(nums, target) {
 const map = new Map();

  for (let i = 0; i < nums.length; i++) {
    const need = target - nums[i];
    if (map.has(need)) {
      return [map.get(need), i];
    }
    map.set(nums[i], i);
  }
}

console.log(twosum([1, 2, 3, 4, 5], 6));
