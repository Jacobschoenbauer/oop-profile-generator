const Intern = require("../lib/intern");
const e = new Intern("John", "4", "john@email.com", "Johnson");
test("name works", () => {
  expect(e.getName()).toBe("John");
});
test("id works", () => {
  expect(e.getId()).toBe("4");
});
test("email works", () => {
  expect(e.getEmail()).toBe("john@email.com");
});
test("school works", () => {
    expect(e.getSchool()).toBe("Johnson");
  });
  
test("role works", () => {
  expect(e.getRole()).toBe("Intern");
});
