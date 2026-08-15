int longestSubsequence(int* nums, int numsSize) {
    int x = 0;
    int c = 0;
    for (int i = 0; i < numsSize; i++) {
        x ^= nums[i];
        if (nums[i] != 0) {
            c = 1;
        }
    }
    if (x != 0) return numsSize;
    if (c == 0) return 0;
    return numsSize - 1;
}