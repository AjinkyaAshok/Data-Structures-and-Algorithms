function twoPointers(arr, target) {
   let left = 0;
    let right = arr.length - 1;

    while (left < right) {

        const sum = arr[left] + arr[right];

        if (sum === target) {
            return [left, right];
        }

        if (sum < target) {
            left++;
        } else {
            right--;
        }
    }

    return [];
}

console.log(twoPointers([1,2,3,4,5,6],10))