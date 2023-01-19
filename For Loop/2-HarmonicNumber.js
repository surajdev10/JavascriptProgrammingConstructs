function harmonicNumber(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += 1 / i;
    }
    return sum;
}

const n = 6;
console.log(`The ${n}th harmonic number is: ${harmonicNumber(n)}`);
