const Engineer = require("../lib/engineer");
const e = new Engineer("John", "4", "john@email.com", "https:coolstuff");
test("name works", () => {
  expect(e.getName()).toBe("John");
});
test("id works", () => {
  expect(e.getId()).toBe("4");
});
test("id email works", () => {
  expect(e.getEmail()).toBe("john@email.com");
});
test("github work", () => {
    expect(e.getGithub()).toBe("https:coolstuff");
  });
  
test("role works", () => {
  expect(e.getRole()).toBe("Engineer");
});
