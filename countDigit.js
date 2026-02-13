
function countDigit(n){
  if(n==0) return 1
  let count = 0;
  n= Math.abs(n)
  while(n>0){
    n=Math.floor(n/10)
    count++
  }
  return count
}

let num = -112;
console.log(countDigit(num))