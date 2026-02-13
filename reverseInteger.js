function int(x) {
  let xCopy = x;
  let rev = 0;
  x = Math.abs(x);
  while (x > 0) {
    last = x % 10;
    rev = 10 * rev + last;
    x = Math.floor(x / 10);
  }
  return xCopy < 0 ? -rev : rev;
}

console.log(int(-123));
