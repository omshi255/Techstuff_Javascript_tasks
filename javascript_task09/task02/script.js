import findEmployeeWithAm from "./utils.js";
const employees = [
    { name: "Aman", age: 28, position: "Developer" },
    { name: "Swati", age: 22, position: "Tester" },
    { name: "Ramesh", age: 35, position: "Manager" },
    { name: "Samir", age: 30, position: "Designer" },
    { name: "Anita", age: 27, position: "Developer" },
    { name: "Ravi", age: 32, position: "Tester" },
    { name: "Priya", age: 29, position: "Designer" },
    { name: "Amit", age: 40, position: "Manager" },
    { name: "Rahul", age: 25, position: "Developer" },
    { name: "Sneha", age: 31, position: "Tester" },
    { name: "Vikram", age: 33, position: "Designer" },
    { name: "Karan", age: 36, position: "Manager" },
    { name: "Simran", age: 26, position: "Developer" },
    { name: "Ankur", age: 38, position: "Tester" },
    { name: "Ritika", age: 24, position: "Designer" },
    { name: "Samar", age: 41, position: "Manager" },
    { name: "Alok", age: 23, position: "Developer" },
    { name: "Shreya", age: 30, position: "Tester" },
    { name: "Amisha", age: 29, position: "Designer" },
    { name: "Rajesh", age: 37, position: "Manager" }
];

const cardContainer = document.getElementById("cardContainer");
        const showAllBtn = document.getElementById("showAll");
        const showAmBtn = document.getElementById("showAm");

        function displayCards(data) {
            cardContainer.innerHTML = "";
            data.forEach(emp => {
                const card = document.createElement("div");
                card.classList.add("card");
                card.innerHTML = `<h3>${emp.name}</h3><p>Age: ${emp.age}</p><p>Position: ${emp.position}</p>`;
                cardContainer.appendChild(card);
            });
        }

        // Initially show all
        displayCards(employees);

        // Show all button
        showAllBtn.addEventListener("click", () => displayCards(employees));

        // Show only "am" names
        showAmBtn.addEventListener("click", () => {
            const filtered = findEmployeeWithAm(employees);
            displayCards(filtered);
        });