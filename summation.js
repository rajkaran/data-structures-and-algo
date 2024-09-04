// O(n)
function summation(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += i;
    }
    return sum;
}

// O(1)
function summationImproved(n) {
    return n * (n + 1) / 2;
}


console.log(summation(4));
console.log(summation(9));
console.log(summation(35454));
console.log(summation(1000000000));