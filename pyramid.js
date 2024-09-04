function pyramid(n) {
    for (let i = 0; i < n; i++) {
        let level = '';
        for (let j = (((n * 2) + 1) / 2) - i; j > 0; j--) {
            level += ' ';
        }
        for (let j = 0; j <= i; j++) {
            level += '# ';
        }
        console.log(level);
    }
}

pyramid(2);
pyramid(7);