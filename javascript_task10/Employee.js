class Employee {
  constructor(name, age, salary) {
    this.name = name;
    this.age = age;
    this.salary = salary;
  }

  // -------------------------
  // STATIC METHODS (utility)
  // -------------------------

  // Sort by name
  static sortByName(employees) {
    return employees.slice().sort((a, b) => a.name.localeCompare(b.name));
  }

  // Sort by age
  static sortByAge(employees) {
    return employees.slice().sort((a, b) => a.age - b.age);
  }

  // Sort by salary
  static sortBySalary(employees) {
    return employees.slice().sort((a, b) => a.salary - b.salary);
  }

  // Filter employees by minimum age
  static filterByAge(employees, minAge) {
    return employees.filter(emp => emp.age >= minAge);
  }
}

export default Employee;
