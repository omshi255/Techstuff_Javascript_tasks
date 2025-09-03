// ### task06.js  
// Take 2 variables and compare them using == and === such that result of both the comparisons operation is not equal.  


//same variable type
let a = 4;
let b = 4;
console.log(a==b);  //only checks values called loose equality

console.log(a===b);  //checks  values as well as types also called strict equality


//diffrent  variable type

let num = 10;
let str = "hello javascript";
console.log(num ==  str);    //false

console.log(num === str);   //false


