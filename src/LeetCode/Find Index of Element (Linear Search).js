var arr = [2, 5, 8, 10];

function findIndex(arr, val) {

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === val ) {
      return i;
    }
  }
  return -1;
}

console.log(findIndex(arr, 10));
