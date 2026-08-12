#include <stdlib.h>

int maxSubarrayLength(int* nums, int numsSize, int k) {
    int* keys = (int*)calloc(262144, sizeof(int));
    int* counts = (int*)calloc(262144, sizeof(int));
    int left = 0, right = 0, max_len = 0;
    
    while (right < numsSize) {
        int val = nums[right];
        unsigned int pos = ((unsigned int)val * 2654435761u) & 262143;
        while (keys[pos] != 0 && keys[pos] != val) {
            pos = (pos + 1) & 262143;
        }
        keys[pos] = val;
        counts[pos]++;
        
        while (counts[pos] > k) {
            int left_val = nums[left];
            unsigned int l_pos = ((unsigned int)left_val * 2654435761u) & 262143;
            while (keys[l_pos] != 0 && keys[l_pos] != left_val) {
                l_pos = (l_pos + 1) & 262143;
            }
            counts[l_pos]--;
            left++;
        }
        
        int len = right - left + 1;
        if (len > max_len) {
            max_len = len;
        }
        right++;
    }
    
    free(keys);
    free(counts);
    return max_len;
}