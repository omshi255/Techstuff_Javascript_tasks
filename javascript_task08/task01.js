// 1. Create a function that takes a number and prints all even numbers upto that number
// 2. Create a function that takes 2 parameter => an array of employees and age and returns all employees whose age is less than input age.
// 3. Create a function that takes 2 parameter => an array of employees and an attribute and returns all employees sorted based on the emoplees attribute being passed as second parameter.


function printEven(num)
{
    for (let i = 1; i<=num;i++ )
    {
        if(i%2==0)
        {
            console.log(i);
            
        }
    }

}
let  inp = Number(prompt("Enter the number:"));

printEven(inp)