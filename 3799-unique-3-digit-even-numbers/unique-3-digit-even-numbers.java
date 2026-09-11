class Solution {
    public int totalNumbers(int[] digits) {
        int[] counts = new int[10];
        for (int d : digits) {
            counts[d]++;
        }
        
        int total = 0;
        for (int num = 100; num < 1000; num += 2) {
            int d1 = num / 100;
            int d2 = (num / 10) % 10;
            int d3 = num % 10;
            
            counts[d1]--;
            counts[d2]--;
            counts[d3]--;
            
            if (counts[d1] >= 0 && counts[d2] >= 0 && counts[d3] >= 0) {
                total++;
            }
            
            counts[d1]++;
            counts[d2]++;
            counts[d3]++;
        }
        
        return total;
    }
}