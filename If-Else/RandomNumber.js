let min = Infinity;
let max = -Infinity;

for (let i = 0; i < 5; i++) {
  let randomNumber = Math.floor(Math.random() * 900) + 100;
  console.log(randomNumber);

  if (randomNumber < min) {
    min = randomNumber;
  }
  if (randomNumber > max) {
    max = randomNumber;
  }
}

console.log("Minimum value: " + min);
console.log("Maximum value: " + max);