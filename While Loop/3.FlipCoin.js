let heads = 0;
let tails = 0;

while (heads < 11 && tails < 11) {
    let flip = Math.random() < 0.5 ? "heads" : "tails";
    console.log(`The coin landed on ${flip}.`);
    if (flip === "heads") {
        heads++;
    } else {
        tails++;
    }
    console.log(`Heads: ${heads}, Tails: ${tails}`);
}

console.log(heads === 11 ? "Heads wins!" : "Tails wins!");
