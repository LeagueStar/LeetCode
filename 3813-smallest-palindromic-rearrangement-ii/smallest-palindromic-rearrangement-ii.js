/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var smallestPalindrome = function(s, k) {
    let counts = new Int32Array(26);
    for (let i = 0; i < s.length; i++) {
        counts[s.charCodeAt(i) - 97]++;
    }
    
    let leftFreq = new Int32Array(26);
    let midChar = "";
    let N = 0;
    
    // Calculate frequencies for the left half and find the middle character if any
    for (let i = 0; i < 26; i++) {
        if (counts[i] % 2 !== 0) {
            midChar = String.fromCharCode(i + 97);
        }
        leftFreq[i] = counts[i] >> 1;
        N += leftFreq[i];
    }
    
    // Compute the total number of permutations of the left half using BigInt to prevent overflow
    let P = 1n;
    for (let i = 1; i <= N; i++) {
        P *= BigInt(i);
    }
    for (let i = 0; i < 26; i++) {
        for (let j = 2; j <= leftFreq[i]; j++) {
            P /= BigInt(j);
        }
    }
    
    let K = BigInt(k);
    
    // If the required k is greater than the total possible permutations, return empty string
    if (P < K) {
        return "";
    }
    
    let leftHalf = [];
    let currentN = N;
    
    // Build the left half string character by character
    for (let i = 0; i < N; i++) {
        for (let c = 0; c < 26; c++) {
            if (leftFreq[c] > 0) {
                // Number of permutations if we pick character 'c' for the current position
                let P_prime = (P * BigInt(leftFreq[c])) / BigInt(currentN);
                
                if (K <= P_prime) {
                    leftHalf.push(String.fromCharCode(c + 97));
                    leftFreq[c]--;
                    currentN--;
                    P = P_prime; // Update permutations count for the remaining positions
                    break;
                } else {
                    K -= P_prime;
                }
            }
        }
    }
    
    let leftStr = leftHalf.join("");
    
    // Construct the right half by reversing the left half
    let rightHalf = [];
    for (let i = leftHalf.length - 1; i >= 0; i--) {
        rightHalf.push(leftHalf[i]);
    }
    
    return leftStr + midChar + rightHalf.join("");
};