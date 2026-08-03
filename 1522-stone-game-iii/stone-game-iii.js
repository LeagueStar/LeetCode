var stoneGameIII = function(stoneValue) {
    const n = stoneValue.length;
    let dp1 = 0, dp2 = 0, dp3 = 0;
    
    for (let i = n - 1; i >= 0; i--) {
        let maxDiff = stoneValue[i] - dp1;
        let sum = stoneValue[i];
        
        if (i + 1 < n) {
            sum += stoneValue[i + 1];
            if (sum - dp2 > maxDiff) maxDiff = sum - dp2;
        }
        
        if (i + 2 < n) {
            sum += stoneValue[i + 2];
            if (sum - dp3 > maxDiff) maxDiff = sum - dp3;
        }
        
        dp3 = dp2;
        dp2 = dp1;
        dp1 = maxDiff;
    }
    
    if (dp1 > 0) return "Alice";
    if (dp1 < 0) return "Bob";
    return "Tie";
};