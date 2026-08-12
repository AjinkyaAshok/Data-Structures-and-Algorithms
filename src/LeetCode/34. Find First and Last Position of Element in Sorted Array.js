var searchRange = function (nums, target) {
    function binarySearch(first) {
        let left = 0;
        let right = nums.length - 1;
        let ans = -1;

        while (left <= right) {
            const mid = Math.floor((left + right) / 2);

            if (nums[mid] === target) {
                ans = mid;

                if (first) {
                    right = mid - 1;
                } else {
                    left = mid + 1;
                }

            } else if (nums[mid] < target) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }

        return ans;
    }

    return [binarySearch(true), binarySearch(false)];
};
console.log(searchRange([1,2,4,5,6,6],6))