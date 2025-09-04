let name = String(prompt("enter the namee of the person"));
let english = Number(prompt("enter the number in english"));
let hindi = Number(prompt("enter the number in hindi"));
let maths = Number(prompt("enter the number in maths"));
let computer = Number(prompt("enter the number in computer"));
let ssc = Number(prompt("enter the number in ssc"));

let obtained = english + hindi + maths + computer + ssc;

let outoff = 500;

let percentage = (obtained / outoff) * 100;

let grade;

switch (true) {
  case (percentage >= 90 && percentage <= 100):
    grade = "A";
    break;

  case (percentage >= 75 && percentage <= 89):
    grade = "B";
    break;
  case (percentage >= 60 && percentage <= 74):
    grade = "C";
    break;
  case (percentage >= 50 && percentage <= 59):
    grade = "D";
    break;
    case (percentage >= 0 && percentage < 50):
    grade = "F";
    break;
  default:
    grade = "invalid percentage";
    break;
}
console.log("student name is:"+ name);
console.log("student grade is:"+grade);
console.log("student percentage is:"+percentage.toFixed(2)+"%");

