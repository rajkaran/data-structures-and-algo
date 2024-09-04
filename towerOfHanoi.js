function towerOfHanoi(n, fromRod, toRod, usingRod) {
    console.log('on every iteration', n, fromRod, toRod, usingRod);
    if (n === 1) {
        console.log(`Movel disk 1 from ${fromRod} to ${toRod}`);
        return;
    }
    towerOfHanoi(n - 1, fromRod, usingRod, toRod);
    console.log(`Move disk ${n} from ${fromRod} to ${toRod}`);
    towerOfHanoi(n - 1, usingRod, toRod, fromRod);
}

console.log(towerOfHanoi(3, 'A', 'C', 'B'));