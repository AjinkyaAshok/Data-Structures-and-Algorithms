var arr = [1, 2, 4, 2, 3, 6];

function duplicateDetection() {
  let seen = new Set();

  for (let num of arr) {
    if (seen.has(num)) {
    //   return true;
    }
    seen.add(num);
  }
  return seen;
}

console.log(duplicateDetection(arr));
