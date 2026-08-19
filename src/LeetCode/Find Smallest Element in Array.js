var arr = [1,2,3,4,5,1];

function smallestNumber(arr) {
  let smallest = arr[0]

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < smallest) {
      smallest = arr[i];
    }
  }
  return smallest;
}

console.log(smallestNumber(arr));
