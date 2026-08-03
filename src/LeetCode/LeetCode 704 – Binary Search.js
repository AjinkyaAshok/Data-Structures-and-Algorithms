function search(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    const m = Math.floor((left + right )/ 2);
    if (arr[m] === target) return m;
    if (arr[m] < target) {
      left = m + 1;
    } else {
      right = m - 1;
    }
  }
  return -1;
}

console.log(search([1, 2, 3, 4, 5, 6], 1));
