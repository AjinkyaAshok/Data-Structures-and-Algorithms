var arr = [22,22];

function findLargest(arr) {
  let largest;

  if (arr.length > 0) {
    for (let i = 0; i < arr.length; i++) {
      arr[i] > arr[i + 1];
      largest = arr[i];
    }
    return largest;
  } else {
    return -1;
  }
}

console.log(findLargest(arr));
