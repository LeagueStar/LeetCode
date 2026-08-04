var findMissingElements = function(nums) {
    let min = 101;
    let max = 0;
    let present = new Uint8Array(101);
    
    for (let i = 0; i < nums.length; i++) {
        let val = nums[i];
        if (val < min) min = val;
        if (val > max) max = val;
        present[val] = 1;
    }
    
    let res = [];
    for (let i = min + 1; i < max; i++) {
        if (present[i] === 0) {
            res.push(i);
        }
    }
    
    return res;
};