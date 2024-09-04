function climbingStaircase(n) {
    if (n <= 2) {
        return n;
    }
    return climbingStaircase(n - 1) + climbingStaircase(n - 2);
}

console.log(climbingStaircase(0));
console.log(climbingStaircase(1));
console.log(climbingStaircase(2));
console.log(climbingStaircase(3));
console.log(climbingStaircase(5));