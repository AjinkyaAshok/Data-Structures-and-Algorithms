var arr = [13,2];

function arraySorted(arr) {
  for (let i = 0; i < arr.length; i++) {
    let current = arr[i];
    let next = arr[i + 1];
    if (current > next) {
      return false;
    } else if (current < next) {
      return true;
    }else{
        console.log("first")
    }
  }
}

console.log(arraySorted(arr));
