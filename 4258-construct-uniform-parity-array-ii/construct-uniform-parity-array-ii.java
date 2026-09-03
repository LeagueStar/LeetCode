class Solution {
    public boolean uniformArray(int[] nums1) {
        int minOdd = Integer.MAX_VALUE;
        int minEven = Integer.MAX_VALUE;
        
        for (int val : nums1) {
            if ((val & 1) == 1) {
                if (val < minOdd) minOdd = val;
            } else {
                if (val < minEven) minEven = val;
            }
        }
        
        return minOdd == Integer.MAX_VALUE || minEven == Integer.MAX_VALUE || minOdd < minEven;
    }
}