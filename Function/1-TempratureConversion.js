function convertTemperature(unit, value) {
    if (value < 0 || value > 100) {
        console.log("Temperature must be between 0 and 100");
        return;
    }
    switch (unit) {
        case "C":
            return (value * 9/5) + 32;
        case "F":
            return (value - 32) * 5/9;
        default:
            console.log("Invalid unit. Please use 'C' for Celsius or 'F' for Fahrenheit.");
    }
}

console.log(convertTemperature("C", 45));
console.log(convertTemperature("F", 78)); 
