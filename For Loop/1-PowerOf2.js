function printPowersOf2(n) {
    for (let i = 0; i <= n; i++) {
        console.log(`2^${i} = ${Math.pow(2, i)}`);
    }
}

const n = 8;
console.log(`Powers of 2 less than or equal to 2^${n}:`);
printPowersOf2(n);
