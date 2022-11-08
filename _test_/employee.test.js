const Employee = require("../lib/employee");
const e = new Employee("John", "4", "john@email.com");
test("name works", () => {
  expect(e.getName()).toBe("John");
});
test("id works", () => {
  expect(e.getId()).toBe("4");
});
test("email works", () => {
  expect(e.getEmail()).toBe("john@email.com");
});
test("role works", () => {
  expect(e.getRole()).toBe("Employee");
});
