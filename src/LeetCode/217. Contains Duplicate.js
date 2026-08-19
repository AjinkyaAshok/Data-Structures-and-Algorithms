function containsDup(arr) {
  let seen = new Set();

  for (let num of arr) {
    if (seen.has(num)) {
      return true;
    }
    seen.add(num);
  }
  return false;
}
console.log(containsDup([1, 2, 3, 1]));
