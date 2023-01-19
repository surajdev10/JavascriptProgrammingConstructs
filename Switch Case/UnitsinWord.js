function displayUnits(num) {
  switch (true) {
    case (num == 1):
      console.log("Unit: 1");
      break;
    case (num == 10):
      console.log("Ten: 10");
      break;
    case (num == 100):
      console.log("Hundred: 100");
      break;
    case (num == 1000):
      console.log("Thousand: 1000");
      break;
    default:
      console.log("Input number not valid.");
  }
}

displayUnits(1); 
displayUnits(10); 
displayUnits(100); 
displayUnits(1000); 
