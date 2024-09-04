/**
 * 
 * Split a given array into two parts such that the sum of the elements in both the parts is equal.
 */

// O(n^2)
function splitArrayBySum(arr) {
    let index = -1;

    for (let i = 1, len = arr.length; i < len; i++) {
        let cloned = arr.slice();

        totalLeft = cloned.slice(0, i).reduce((a, b) => a + b, 0);
        totalRight = cloned.slice(i + 1).reduce((a, b) => a + b, 0);

        if (totalLeft == totalRight) {
            index = i;
            i = len * 2;
        }
    }

    return index;
}


const index = splitArrayBySum([2, 14, 8, 6, 19, 5]);
console.log('index at which array can be split with equal sum ', index)