const Employee = require("./employee.js");

class Manager extends Employee {
  constructor(name, id, email, officeNumber) {
    super(name, id, email);

    this.officeNumber = officeNumber;
  }

  officeNumber() {
    return this.officeNumber;
  }
  getRole() {
    return "Manger";
  }
}

module.exports = Manager;
