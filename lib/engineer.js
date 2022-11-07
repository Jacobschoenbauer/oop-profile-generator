const Employee = require("./employee.js");

class Engineer extends Employee {
  constructor(name, id, email, github, githubuser) {
    super(name, id, email);
    this.githubuser = githubuser;
    this.github = github;
  }

  gitHubUser() {
    return this.githubuser;
  }
  getGithub() {
    return this.github;
  }
  getRole() {
    return "Employee";
  }
}

module.exports = Engineer;
