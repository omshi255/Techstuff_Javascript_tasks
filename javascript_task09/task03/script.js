import employees from './utils.js';

function showEmp(data) {
    const tbody = document.querySelector("#employeeTable tbody"); // ✅ fixed selector
    tbody.innerHTML = "";

    data.forEach(emp => {
        const tr = document.createElement("tr");
        const salaryInc = (emp.salary / 100000).toFixed(1) + " Lac";

        tr.innerHTML = `
            <td>${emp.id}</td>
            <td>${emp.name}</td>
            <td>${emp.age}</td>
            <td>${emp.department}</td>
            <td>${salaryInc}</td>
        `;
        tbody.appendChild(tr);
    });
}

showEmp(employees);

const highSalary = employees.filter(emp => emp.salary > 700000);
console.log("Employees with salary > 700000:", highSalary);
