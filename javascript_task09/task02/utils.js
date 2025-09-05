function findEmployeeWithAm(employees)
{
     return employees.filter(emp=>emp.name.toLowerCase().includes("am"))
}
export default findEmployeeWithAm;