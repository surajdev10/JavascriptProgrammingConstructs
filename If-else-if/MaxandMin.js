function findMaxMin(a, b, c) {
    var result1 = a + b * c;
    var result2 = a % b + c;
    var result3 = c + a / b;
    var result4 = a * b + c;

console.log("Maximum: " + Math.max(result1, result2, result3, result4));
console.log("Minimum: " + Math.min(result1, result2, result3, result4));
}
findMaxMin(3, 4, 6);
