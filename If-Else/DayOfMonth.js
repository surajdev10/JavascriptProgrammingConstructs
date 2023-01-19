function DayOfMonth(day, month) 
{
    return (month == 3 && day >= 20 || month == 4 || month == 5 || (month == 6 && day <= 20))
}
let day = 2;
let month  = 6;
if (DayOfMonth(day, month)) 
{
    console.log(true);
} else {
  console.log(false);
}