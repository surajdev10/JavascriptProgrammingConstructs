"use strict";

const ps = require("prompt-sync");
const prompt = ps();

let n = parseInt(prompt("Enter a number: "));
let i = 1;

console.log("Powers of 2 less than or equal to 2^" + n + ":");

while (i <= Math.pow(2, n) && i <= 256) {
    console.log(i);
    i *= 2;
}
