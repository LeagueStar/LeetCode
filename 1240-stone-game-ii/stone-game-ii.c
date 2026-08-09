int stoneGameII(int* piles, int pilesSize) {
    int suffix[101] = {0};
    int dp[101][101] = {0};
    
    for (int i = pilesSize - 1; i >= 0; i--) {
        suffix[i] = piles[i] + (i + 1 < pilesSize ? suffix[i + 1] : 0);
    }
    
    for (int i = pilesSize - 1; i >= 0; i--) {
        for (int m = 1; m <= pilesSize; m++) {
            if (i + 2 * m >= pilesSize) {
                dp[i][m] = suffix[i];
            } else {
                int max_val = 0;
                for (int x = 1; x <= 2 * m; x++) {
                    int next_m = m > x ? m : x;
                    int val = suffix[i] - dp[i + x][next_m];
                    if (val > max_val) {
                        max_val = val;
                    }
                }
                dp[i][m] = max_val;
            }
        }
    }
    
    return dp[0][1];
}