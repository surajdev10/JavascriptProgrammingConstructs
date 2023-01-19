function primeFactors(n) {
    for (let i = 2; i <= Math.sqrt(n); i++) {
      while (n % i == 0) {
        console.log(i);
        n = n / i;
      }
    }
  
    if (n > 2) console.log(n);
  }
  
  console.log("Prime factors of 50:");
  primeFactors(100);
  
  console.log("Prime factors of 12:");
  primeFactors(12); // prints 2, 2, 3
  