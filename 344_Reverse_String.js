const arr = ["a", "j", "i", "n", "k"];

function reverseString() {
  let len = arr.length;
  let halflen = Math.floor(len / 2);
  for (let i = 0; i < halflen; i++) {
   let temp = arr[i]
   arr[i] = arr[halflen -1-i]
   arr[halflen -1-i] = temp
}
return temp;
}
console.log(reverseString())