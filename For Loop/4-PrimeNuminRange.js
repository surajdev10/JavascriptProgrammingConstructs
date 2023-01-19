function printPrimes(start, end) {
    for (let i = start; i <= end; i++) {
      if (isPrime(i)) {
        console.log(i);
      }
    }
  }
  
  function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i < num; i++) {
      if (num % i == 0) return false;
    }
    return true;
  }
  
  console.log("Prime numbers between 11 and 20:");
  printPrimes(11, 20); 
  