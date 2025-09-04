// ATM machine asks for PIN at least once, even if correct

let correctPin = 1234;
let enteredPin;
do {
  enteredPin = 1234;
 if (enteredPin === correctPin) {
  console.log("Access Granted ");
} else {
  console.log("Access Denied ");

  }
} while (false);
