"use strict";

const ps = require("prompt-sync");
const prompt = ps();

let n = parseInt(prompt("Think of a number between 1 and 100 : "));
let low = 1;
let high = 100;

while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    let response = prompt(`Is your number less than or equal to ${mid}? (yes/no) :`);
    if (response === "yes") {
        high = mid - 1;
    } else {
        low = mid + 1;
    }
}

console.log(`The magic number is ${low}`);
