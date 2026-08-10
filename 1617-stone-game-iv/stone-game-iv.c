#include <stdbool.h>
#include <stdlib.h>

bool winnerSquareGame(int n) {
    bool* dp = (bool*)calloc(n + 1, sizeof(bool));
    
    for (int i = 1; i <= n; i++) {
        for (int k = 1; k * k <= i; k++) {
            if (!dp[i - k * k]) {
                dp[i] = true;
                break;
            }
        }
    }
    
    bool result = dp[n];
    free(dp);
    
    return result;
}