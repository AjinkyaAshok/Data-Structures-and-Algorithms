function maxSum(arr, k) {
  let windowSum = 0;

  for (let i = 0; i < k; i++) {
    windowSum = windowSum + arr[i];
  }
  let max = windowSum;

  for (let i = k; i < arr.length; i++) {
    windowSum = windowSum + arr[i];
    windowSum = windowSum - arr[i - k];

    max = Math.max(max, windowSum);

  }
  return max
}

console.log(maxSum([2,1,5,1,3,2],6))
