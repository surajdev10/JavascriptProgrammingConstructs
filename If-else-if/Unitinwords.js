function displayUnits(num) {
    if (num === 1) {
      console.log("Unit: 1");
    } else if (num === 10) {
      console.log("Ten: 10");
    } else if (num === 100) {
      console.log("Hundred: 100");
    } else if (num === 1000) {
      console.log("Thousand: 1000");
    } else {
      console.log("Input number not valid.")
    }
  }
  
  displayUnits(1); 
  displayUnits(10); 
  displayUnits(100); 
  displayUnits(1000); 
  