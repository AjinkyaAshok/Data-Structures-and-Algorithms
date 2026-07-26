var arr = [1, 3, 5, 7, 8, 10];

function reverseArray(arr) {
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    let temp = arr[left];
    arr[left] = arr[right];
    arr[right] = temp;

    right--;
    left++;
    
  }
  return arr;
}

console.log(reverseArray(arr));




// Using reverse( method)
 var arr = [1, 3, 5, 7, 8, 10];

 function reverse(arr){
    let temp = arr.reverse()
    return temp
 }

 console.log(reverse(arr))