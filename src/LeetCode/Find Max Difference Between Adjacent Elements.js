var arr = [2, 8, 3, 15];

function maxDiff(arr) {
  let max = 0;

  for (let i = 0; i < arr.length; i++) {
    let diff = arr[i + 1] - arr[i];
    if (diff > max) {
      max = diff;
    }
  }
  return max;
}
console.log(maxDiff(arr));
