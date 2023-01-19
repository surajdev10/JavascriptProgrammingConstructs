function getWeekday(dayNum) {
    if (dayNum === 0) {
        return "Sunday";
    } else if (dayNum === 1) {
        return "Monday";
    } else if (dayNum === 2) {
        return "Tuesday";
    } else if (dayNum === 3) {
        return "Wednesday";
    } else if (dayNum === 4) {
        return "Thursday";
    } else if (dayNum === 5) {
        return "Friday";
    } else if (dayNum === 6) {
        return "Saturday";
    } else {
        return "Not a valid day number";
    }
}
console.log(getWeekday(2));
