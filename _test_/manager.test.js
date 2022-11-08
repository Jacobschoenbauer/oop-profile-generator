const Manager = require("../lib/manager");
const e = new Manager("John", "4", "john@email.com", "65");
test("name works", () => {
  expect(e.getName()).toBe("John");
});
test("id works", () => {
  expect(e.getId()).toBe("4");
});
test("email works", () => {
  expect(e.getEmail()).toBe("john@email.com");
});
test("getOfficeNumer works", () => {
  expect(e.getOfficeNumber()).toBe("65");
});
test("role works", () => {
  expect(e.getRole()).toBe("Manager");
});