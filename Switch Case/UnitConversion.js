function convertUnit(unitFrom, unitTo, value) {
    switch (unitFrom) {
        case "feet":
            switch (unitTo) {
                case "inch":
                    return value * 12;
                case "meter":
                    return value * 0.3048;
                default:
                    return "Invalid unitTo";
            }
        case "inch":
            switch (unitTo) {
                case "feet":
                    return value / 12;
                case "meter":
                    return value * 0.0254;
                default:
                    return "Invalid unitTo";
            }
        case "meter":
            switch (unitTo) {
                case "feet":
                    return value / 0.3048;
                case "inch":
                    return value / 0.0254;
                default:
                    return "Invalid unitTo";
            }
        default:
            return "Invalid unitFrom";
    }
}

console.log(convertUnit("feet", "inch", 10));
console.log(convertUnit("inch", "feet", 120)); 
console.log(convertUnit("feet", "meter", 10)); 
console.log(convertUnit("meter", "feet", 3.048)); 
