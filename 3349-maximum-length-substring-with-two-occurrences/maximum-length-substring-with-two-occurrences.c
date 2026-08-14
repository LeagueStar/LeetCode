int maximumLengthSubstring(char* s) {
    int c[26] = {0}, m = 0, l = 0, r = 0;
    while (s[r]) {
        c[s[r] - 'a']++;
        while (c[s[r] - 'a'] > 2) c[s[l++] - 'a']--;
        if (r - l + 1 > m) m = r - l + 1;
        r++;
    }
    return m;
}