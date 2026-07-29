function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (arr[mid] === target) {
      return mid;
    }
    if (arr[mid] > target) {
      right--;
    } else {
      left++;
    }
  }
  return -1;
}

console.log(binarySearch([2, 5, 8, 10, 15, 20], 20));
