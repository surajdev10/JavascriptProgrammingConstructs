let money = 100;
let goal = 200;
let won = 0;
let bet = 0;

while (money > 0 && money < goal) {
    bet++;
    if (Math.random() < 0.5) {
        money++;
        won++;
    } else {
        money--;
    }
}

console.log(money >= goal ? `You reached your goal! You won ${won} times and made ${bet} bets.` : `You went broke after ${bet} bets. You won ${won} times.`);
