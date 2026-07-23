var arr = [2,4,6];

function findAvg(arr) {
  let avg = 0;
  for (let i = 0; i < arr.length; i++) {
    avg = (avg + arr[i]) / arr.length + 1;
  }
  return Math.floor(avg);
}

console.log(findAvg(arr));
