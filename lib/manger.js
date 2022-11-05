const Employee = require("./lib/employee");

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
