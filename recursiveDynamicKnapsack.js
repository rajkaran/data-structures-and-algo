
/**
 * weight [3,2,4]
 * profit [6,8,7]
 * capacity(w) 8
 */

// O(2^n)
function recursiveDynamicKnapsack(weightArr, profitArr, capacity, n) {
    if (n == 0 || capacity == 0) {
        return 0;
    }
    if (weightArr[n - 1] > capacity) {
        return dynamicKnapsack(weightArr, profitArr, capacity, n - 1);
    }
    else {
        return Math.max(profitArr[n - 1] + dynamicKnapsack(weightArr, profitArr, capacity - weightArr[n - 1], n - 1), dynamicKnapsack(weightArr, profitArr, capacity, n - 1));
    }
}

console.log(dynamicKnapsack([3, 2, 4], [6, 8, 7], 8, 3));