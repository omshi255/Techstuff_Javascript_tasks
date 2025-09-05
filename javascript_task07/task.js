const employees = [
  { name: "Alice", age: 28, position: "Developer" },
  { name: "Bob", age: 52, position: "Manager" },
  { name: "Charlie", age: 45, position: "Designer" },
  { name: "David", age: 34, position: "Tester" },
  { name: "Eve", age: 60, position: "HR" },
  { name: "Frank", age: 41, position: "Developer" },
  { name: "Grace", age: 29, position: "Analyst" },
  { name: "Hannah", age: 50, position: "Team Lead" },
  { name: "Ian", age: 38, position: "Developer" },
  { name: "Jack", age: 27, position: "Intern" },
  { name: "Karen", age: 44, position: "HR" },
  { name: "Leo", age: 32, position: "Designer" },
  { name: "Mona", age: 48, position: "Developer" },
  { name: "Nina", age: 36, position: "Tester" },
  { name: "Oscar", age: 55, position: "Manager" },
  { name: "Paul", age: 40, position: "Developer" },
  { name: "Quinn", age: 26, position: "Intern" },
  { name: "Rita", age: 53, position: "HR" },
  { name: "Sam", age: 31, position: "Developer" },
  { name: "Tina", age: 46, position: "Team Lead" },
  { name: "Uma", age: 39, position: "Designer" },
  { name: "Victor", age: 30, position: "Tester" },
  { name: "Wendy", age: 42, position: "Manager" },
  { name: "Xavier", age: 47, position: "Developer" },
  { name: "Yara", age: 33, position: "HR" },
  { name: "Zane", age: 58, position: "Architect" },
  { name: "Arjun", age: 29, position: "Developer" },
  { name: "Bhavna", age: 35, position: "Designer" },
  { name: "Chetan", age: 43, position: "Tester" },
  { name: "Deepa", age: 37, position: "HR" },
  { name: "Farhan", age: 49, position: "Developer" },
  { name: "Gauri", age: 28, position: "Analyst" },
  { name: "Harsh", age: 54, position: "Manager" },
  { name: "Isha", age: 25, position: "Intern" },
  { name: "Jatin", age: 46, position: "Team Lead" },
  { name: "Kavya", age: 40, position: "Developer" },
  { name: "Laksh", age: 34, position: "Tester" },
  { name: "Meera", age: 52, position: "HR" },
  { name: "Neeraj", age: 45, position: "Developer" },
  { name: "Ojas", age: 27, position: "Designer" }
];



const EmpFilter = employees.filter(emp=>emp.age<=50)
{
    console.log(EmpFilter);
    
}