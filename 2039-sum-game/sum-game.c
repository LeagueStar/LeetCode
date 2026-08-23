bool sumGame(char* num) {
    int diff = 0, q = 0, len = 0;
    while (num[len]) len++;
    int half = len >> 1;
    for (int i = 0; i < half; i++) {
        if (num[i] == '?') q++;
        else diff += num[i] - '0';
    }
    for (int i = half; i < len; i++) {
        if (num[i] == '?') q--;
        else diff -= num[i] - '0';
    }
    return (q & 1) || (diff * 2 != -q * 9);
}