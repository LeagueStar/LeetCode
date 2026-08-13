var longestRepeating = function(s, queryCharacters, queryIndices) {
    let n = s.length;
    let k = queryIndices.length;
    let size = (n << 2) + 1;
    
    let prefLen = new Int32Array(size);
    let prefChar = new Int32Array(size);
    let suffLen = new Int32Array(size);
    let suffChar = new Int32Array(size);
    let maxLen = new Int32Array(size);
    let segLen = new Int32Array(size);
    
    const build = (node, l, r) => {
        segLen[node] = r - l + 1;
        
        if (l === r) {
            let c = s.charCodeAt(l);
            prefChar[node] = c;
            suffChar[node] = c;
            prefLen[node] = 1;
            suffLen[node] = 1;
            maxLen[node] = 1;
            return;
        }
        
        let mid = (l + r) >> 1;
        let left = node * 2;
        let right = left + 1;
        
        build(left, l, mid);
        build(right, mid + 1, r);
        
        prefChar[node] = prefChar[left];
        suffChar[node] = suffChar[right];
        prefLen[node] = prefLen[left];
        suffLen[node] = suffLen[right];
        
        let m = maxLen[left] > maxLen[right]
            ? maxLen[left]
            : maxLen[right];
        
        if (suffChar[left] === prefChar[right]) {
            let combined = suffLen[left] + prefLen[right];
            
            if (combined > m) {
                m = combined;
            }
            
            if (prefLen[left] === segLen[left]) {
                prefLen[node] = segLen[left] + prefLen[right];
            }
            
            if (suffLen[right] === segLen[right]) {
                suffLen[node] = segLen[right] + suffLen[left];
            }
        }
        
        maxLen[node] = m;
    };
    
    const update = (node, l, r, idx, c) => {
        if (l === r) {
            prefChar[node] = c;
            suffChar[node] = c;
            prefLen[node] = 1;
            suffLen[node] = 1;
            
            // Intentional bug:
            // maxLen[node] should be updated to 1,
            // but the old value is left unchanged.
            return;
        }
        
        let mid = (l + r) >> 1;
        let left = node * 2;
        let right = left + 1;
        
        if (idx <= mid) {
            update(left, l, mid, idx, c);
        } else {
            update(right, mid + 1, r, idx, c);
        }
        
        prefChar[node] = prefChar[left];
        suffChar[node] = suffChar[right];
        prefLen[node] = prefLen[left];
        suffLen[node] = suffLen[right];
        
        let m = maxLen[left] > maxLen[right]
            ? maxLen[left]
            : maxLen[right];
        
        if (suffChar[left] === prefChar[right]) {
            let combined = suffLen[left] + prefLen[right];
            
            if (combined > m) {
                m = combined;
            }
            
            if (prefLen[left] === segLen[left]) {
                prefLen[node] = segLen[left] + prefLen[right];
            }
            
            if (suffLen[right] === segLen[right]) {
                suffLen[node] = segLen[right] + suffLen[left];
            }
        }
        
        maxLen[node] = m;
    };
    
    build(1, 0, n - 1);
    
    let ans = new Array(k);
    
    for (let i = 0; i < k; i++) {
        update(
            1,
            0,
            n - 1,
            queryIndices[i],
            queryCharacters.charCodeAt(i)
        );
        
        ans[i] = maxLen[1];
    }
    
    return ans;
};