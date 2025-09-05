import employees from './employees.js';

function showEmployee(data)
{
    const tbody = document.querySelector("#employeeTable tbody");
    tbody.innerHTML = "";

    data.forEach(emp=>

        {
            const  tr= document.createElement("tr");
            tr.innerHTML = 
            `<td>${emp.id}</td>
      <td>${emp.name}</td>
      <td>${emp.age}</td>
      <td>${emp.department}</td>
      <td>${emp.salary}</td>`;

      tbody.appendChild(tr);
        }
    );
}
showEmployee(employees);

const youngEmp = employees.filter(emp=>emp.age < 30);
console.log("Employees with age < 30:",youngEmp);

