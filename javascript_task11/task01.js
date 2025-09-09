function safedivide(employee) {
  try {
    let result = employee.age / null;
    if (!isFinite(result)) {
      throw new Error("Invalid division  by null");
    }
    console.log(result);
  } catch (error) {
    console.log(employee.age / 2);
  }
}
const employee = { age: 56 };
safedivide(employee);
