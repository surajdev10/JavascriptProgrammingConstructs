function arePalindromes(num1, num2) {
    // Convert the numbers to strings
    var num1String = num1.toString();
    var num2String = num2.toString();

    // Reverse the strings
    var num1Reverse = num1String.split("").reverse().join("");
    var num2Reverse = num2String.split("").reverse().join("");

    // Check if the original and reversed strings are equal
    if (num1String === num1Reverse && num2String === num2Reverse) {
        return true;
    } else {
        return false;
    }
}

console.log(arePalindromes(121, 121));
console.log(arePalindromes(12, 121)); 
