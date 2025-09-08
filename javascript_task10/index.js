import Employee from './Employee.js'
// Create employees
let emp1 = new Employee("Swati", 22, 30000);
let emp2 = new Employee("Rahul", 28, 40000);
let emp3 = new Employee("Neha", 24, 35000);
let emp4 = new Employee("Amit", 30, 45000);

let employees = [emp1, emp2, emp3, emp4];


console.log("Original Employees:");
console.log(employees);

// Sorting examples
console.log("\nSorted by Name:");
console.log(Employee.sortByName(employees));

console.log("\nSorted by Age:");
console.log(Employee.sortByAge(employees));

console.log("\nSorted by Salary:");
console.log(Employee.sortBySalary(employees));

// Filtering example
console.log("\nEmployees older than or equal to 25:");
console.log(Employee.filterByAge(employees, 25));