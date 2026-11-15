class Solution {
    public int numOfSubarrays(int[] arr) {
        int mod = 1000000007;
        int odd = 0, even = 1, sum = 0, res = 0;
        for (int x : arr) {
            sum += x;
            if ((sum & 1) == 1) {
                res = (res + even) % mod;
                odd++;
            } else {
                res = (res + odd) % mod;
                even++;
            }
        }
        return res;
    }
}