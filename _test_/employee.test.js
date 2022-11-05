const Employee = require("../lib/employee");
describe("Employee", () => {
  it("create a employee with name id email", () => {
    const employee = new Employee("Sarah", "3", "jhwt65@yahoo.com");

    // Verify that the new object has the correct properties
    expect(employee.name).toEqual("Sarah");
    expect(employee.age).toEqual("3");
    expect(employee.email).toEqual("jhwt65@yahoo.com");
  });
});
