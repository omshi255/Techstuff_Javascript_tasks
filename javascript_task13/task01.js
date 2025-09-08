const employes = [
    { name: "David", age: 35, department: "IT" },
  { name: "Alice", age: 25, department: "HR" },
  { name: "Bob", age: 30, department: "IT" },
  { name: "Eva", age: 22, department: "HR" },
  { name: "charlie", age: 28, department: "HR" },
 
  
];
//funcction to fetch the employeesss
function getEmployees() {
  return new Promise(function (resolve, reject) {
    const dealy = Math.floor(Math.random() * 1000) + 1000;

    console.log(`fetching employees.....(dealy: ${dealy}ms)`);

    setTimeout(function () {
      resolve(employes);
    }, dealy);
  });
}

//function to  sort the employees  by name

function sortEmployeesByName(empList) {
  return new Promise(function (resolve, reject) {
    const sortedList = empList.sort(function (a, b) {
        if(a.name  < b.name) return -1;
        if(a.name > b.name) return 1;
        return 0;
    });
    resolve(sortedList)
  });
}

//promise chaining

getEmployees()
.then(function(empList)
{
    console.log("employees fetched",empList);
    return  sortEmployeesByName(empList);
})
.then(function(sortedList)
{
    console.log("sorted Employees by name:" , sortedList);
    
})
.catch(function(error)
{
console.error("error", error);

});