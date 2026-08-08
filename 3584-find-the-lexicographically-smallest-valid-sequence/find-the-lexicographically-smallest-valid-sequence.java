class Solution {
    public int[] validSequence(String word1, String word2) {
        int n = word1.length();
        int m = word2.length();
        
        int[] suf = new int[m + 1];
        for (int i = 0; i <= m; i++) {
            suf[i] = -1;
        }
        suf[m] = n;
        
        int p = n - 1;
        for (int k = m - 1; k >= 0; k--) {
            while (p >= 0 && word1.charAt(p) != word2.charAt(k)) {
                p--;
            }
            if (p >= 0) {
                suf[k] = p;
                p--;
            } else {
                break;
            }
        }
        
        int[] ans = new int[m];
        boolean changed = false;
        int j = 0;
        
        for (int i = 0; i < n; i++) {
            if (j == m) break;
            
            if (word1.charAt(i) == word2.charAt(j)) {
                ans[j++] = i;
            } else if (!changed && suf[j + 1] > i) {
                ans[j++] = i;
                changed = true;
            }
        }
        
        if (j == m) {
            return ans;
        }
        
        return new int[0];
    }
}