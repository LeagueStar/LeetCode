int largestInteger(int* nums, int numsSize, int k) {
    int counts[51] = {0};
    for (int i = 0; i <= numsSize - k; i++) {
        int seen[51] = {0};
        for (int j = 0; j < k; j++) {
            if (!seen[nums[i + j]]) {
                seen[nums[i + j]] = 1;
                counts[nums[i + j]]++;
            }
        }
    }
    for (int i = 50; i >= 0; i--) {
        if (counts[i] == 1) return i;
    }
    return -1;
}