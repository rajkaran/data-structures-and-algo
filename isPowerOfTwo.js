// O(logn)
/**
 * n = 8
 * 8/2 = 4 (remainder = 0)
 * 4/2 = 2 (remainder = 0)
 * 2/2 = 1 (remainder = 0)
 */
function isPowerOfTwo(n) {
    if (n < 1) {
        return false;
    }

    while (n > 1) {
        if (n % 2 !== 0) {
            return false;
        }
        n = n / 2;
    }
    return true;
}

console.log(isPowerOfTwo(0));
console.log(isPowerOfTwo(1));
console.log(isPowerOfTwo(2));
console.log(isPowerOfTwo(5));