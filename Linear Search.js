let arr = [4, 9, 1, 0, 2];

function findNum(n) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == n) {
      return i;
    }
  }
  return "Not Found";
}

console.log(findNum(9));
