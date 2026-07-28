// function fun(num) {
//   if (num == 0) return;
//   console.log(num);
//   num = num - 1;
//   fun(num);
// }
// fun(5);

// function print(n) {
//   if (n < 1) return;
//   console.log(n);
//   n = n - 1;
//   print(n);
// }
// n = 5;
// print(n);
let n = 5;
function print(x) {
  if (x > n) return;
  console.log(x);
  x = x + 1;
  print(x);
}

print(1);
