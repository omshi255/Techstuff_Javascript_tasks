const employee = {
    id: 101,
    name: "Swati Sharma",
    age: 21,
    gender: "Female",
    department: "CSE",
    designation: "Software Developer",
    salary: 55000,
    city: "Indore",
    email: "swati.sharma@example.com",
    phone: "9876543210",
    experience: 3,     
};
for (let key in employee) {
    console.log(key, ":", employee[key]);
}
