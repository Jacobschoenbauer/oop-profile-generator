const Employee = require("./employee.js");

class Manager extends Employee {
  constructor(name, id, email, officeNumber) {
    super(name, id, email);

    this.officeNumber = officeNumber;
  }

 getOfficeNumber() {
    return this.officeNumber;
  }
  getRole() {
    return "Manager";
  }
  getHtml(){
    return `  <section class="manger" style="width: 150px; height:150px; border-style: solid; margin:80px;">
    <article style="font-size: 20px; color: white; background-color: blue;">
      <div class="name">${this.name}</div>
      <div class="job">Manger</div>
    </article>
    <div class="id">${this.id}</div>
    <div class="email"><a href="mailto:${this.email}">${this.email}<a></div>
    <div class="officenumber">${this.officeNumber}</div>
  </section>`
  }
}

module.exports = Manager;
