//  - Create a function that returns array of employees from a random time from 1 to 2 seconds using promise chaining.
// - Create another promisified function that sorts this employee list from above response by name. Chain it to above promise

function getEmployees()
{
    return new Promise  ((resolve , reject )=>
    {
        const dealy = Math.floor(Math.random()*1000)+1000;
        console.log("fetching employees.........will take",dealy,"ms");

        setTimeout(()=>
        {
             const employees = [
        { id: 1, name: "Charlie", age: 25 },
        { id: 2, name: "Alice", age: 30 },
        { id: 3, name: "Bob", age: 28 },
        { id: 4, name: "David", age: 22 }
      ];
      resolve(employees)
        },dealy);
        
    });
}

async function  fetchEmployees()
{
    try {
        const employees = await getEmployees();
        console.log("fetched employees:",employees);
        
    } catch (error) {
        console.log(error);
        
    }
}
fetchEmployees();