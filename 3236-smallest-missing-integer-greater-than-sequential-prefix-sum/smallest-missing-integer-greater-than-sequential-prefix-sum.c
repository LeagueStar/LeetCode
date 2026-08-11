int missingInteger(int* nums, int numsSize) {
    int sum = nums[0];
    for (int i = 1; i < numsSize; i++) {
        if (nums[i] == nums[i - 1] + 1) {
            sum += nums[i];
        } else {
            break;
        }
    }
    int present[3000] = {0};
    for (int i = 0; i < numsSize; i++) {
        if (nums[i] < 3000) {
            present[nums[i]] = 1;
        }
    }
    while (present[sum]) {
        sum++;
    }
    return sum;
}