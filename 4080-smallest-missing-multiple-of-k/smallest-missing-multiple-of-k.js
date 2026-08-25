var missingMultiple = function(nums, k) {
    const s = new Uint8Array(101);
    for (let i = 0; i < nums.length; i++) {
        s[nums[i]] = 1;
    }
    let m = k;
    while (m <= 100 && s[m]) {
        m += k;
    }
    return m;
};