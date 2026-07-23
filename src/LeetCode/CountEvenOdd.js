var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function countOddEven() {
  let odd = 0;
  let even = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 == 0) {
      odd++;
    } else if (arr[i] % 2 == 1) {
      even++;
    } else {
      return "Invalid input";
    }
  }
    return{ odd, even };
}
console.log(countOddEven(arr));
