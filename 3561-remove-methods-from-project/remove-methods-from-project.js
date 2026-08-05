var remainingMethods = function(n, k, invocations) {
    const m = invocations.length;
    const head = new Int32Array(n).fill(-1);
    const next = new Int32Array(m);
    const to = new Int32Array(m);

    for (let i = 0; i < m; i++) {
        const u = invocations[i][0];
        const v = invocations[i][1];
        to[i] = v;
        next[i] = head[u];
        head[u] = i;
    }

    const suspicious = new Uint8Array(n);
    suspicious[k] = 1;
    const q = new Int32Array(n);
    let headQ = 0;
    let tailQ = 0;
    q[tailQ++] = k;

    while (headQ < tailQ) {
        const u = q[headQ++];
        for (let e = head[u]; e !== -1; e = next[e]) {
            const v = to[e];
            if (suspicious[v] === 0) {
                suspicious[v] = 1;
                q[tailQ++] = v;
            }
        }
    }

    let canRemove = true;
    for (let i = 0; i < m; i++) {
        if (suspicious[invocations[i][0]] === 0 && suspicious[invocations[i][1]] === 1) {
            canRemove = false;
            break;
        }
    }

    const res = [];
    if (canRemove) {
        for (let i = 0; i < n; i++) {
            if (suspicious[i] === 0) res.push(i);
        }
    } else {
        for (let i = 0; i < n; i++) {
            res.push(i);
        }
    }

    return res;
};