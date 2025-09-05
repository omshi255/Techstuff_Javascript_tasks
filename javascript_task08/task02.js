const employees = [
  { name: "Swati", age: 21 },
  { name: "Aman", age: 35 }, 
  { name: "Priya", age: 45 },
  { name: "Ravi", age: 28 },
  { name: "Neha", age: 50 }
];

const filterAge = (employees , age)=>employees.filter(emp=>emp.age <=age);
console.log(filterAge(employees ,  50));
