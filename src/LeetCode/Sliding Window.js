function maxSum(arr, k) {
  let sum = 0;

  for (let i = 0; i < k; i++) {
    sum = sum + arr[i];
  }
  let max = sum;
  for (let i = k; i < arr.length; i++) {
    sum = sum + arr[i];
    sum = sum - arr[i - k];

    max = Math.max(max, sum);

  }
  return max;
}

console.log(maxSum([2, 3, 5, 1, 3, 2], 3));
