const Employee = require("./lib/employee");

class Engineer extends Employee {
  constructor(name, id, email, github) {
    super(name, id, email);
    this.github = githubuser;
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
