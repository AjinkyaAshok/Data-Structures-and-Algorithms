function containsDubplicate(nums) {
 
    const seen = new Set();

    for(let num of nums){
        if(seen.has(num)){
            return true
        }
        seen.add(num)
    }
    return false
}

console.log(containsDubplicate([1,2,3,4]))