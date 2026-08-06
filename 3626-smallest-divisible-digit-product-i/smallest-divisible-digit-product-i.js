var smallestNumber = function(n, t) {
    while (true) {
        let p = 1;
        let x = n;
        while (x > 0) {
            p *= x % 10;
            x = Math.trunc(x / 10);
        }
        if (p % t === 0) return n;
        n++;
    }
};