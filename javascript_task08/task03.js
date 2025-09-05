const employees = [
  { name: "Alice", age: 28, position: "Developer" },
  { name: "Bob", age: 52, position: "Manager" },
  { name: "Charlie", age: 45, position: "Designer" },
  { name: "David", age: 34, position: "Tester" },
  { name: "Eve", age: 60, position: "HR" }
];

function  sortEmp(employees , attribute)
{
    return employees.sort(function(a , b)

{
    if(a[attribute] < b[attribute])
    {
        return -1;
    }
    if(a[attribute] > b[attribute])
    {
        return  1;
    }
    return 0;
});
}

console.log("sort by age: ");
console.log((sortEmp(employees , "age")));

console.log("sort by name:");
console.log(sortEmp(employees , "name"));



