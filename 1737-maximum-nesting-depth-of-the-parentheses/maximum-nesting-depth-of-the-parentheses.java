class Solution {
    public int maxDepth(String s) {
        int max = 0, curr = 0;
        for (char c : s.toCharArray()) {
            if (c == '(') {
                if (++curr > max) {
                    max = curr;
                }
            } else if (c == ')') {
                curr--;
            }
        }
        return max;
    }
}