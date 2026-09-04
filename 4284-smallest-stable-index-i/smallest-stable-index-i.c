int firstStableIndex(int* nums, int numsSize, int k) {
    int suffix_min[105];
    suffix_min[numsSize - 1] = nums[numsSize - 1];
    for (int i = numsSize - 2; i >= 0; i--) {
        suffix_min[i] = nums[i] < suffix_min[i + 1] ? nums[i] : suffix_min[i + 1];
    }
    
    int prefix_max = -1;
    for (int i = 0; i < numsSize; i++) {
        if (nums[i] > prefix_max) {
            prefix_max = nums[i];
        }
        if (prefix_max - suffix_min[i] <= k) {
            return i;
        }
    }
    
    return -1;
}