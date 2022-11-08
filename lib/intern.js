const Employee = require("./employee.js");

class Intern extends Employee {
  constructor(name, id, email, school) {
    super(name, id, email);

    this.school = school;
  }

  getSchool() {
    return this.school;
  }
  getRole() {
    return "Intern";
  }
  getHtml(){
    return ` <section class="intern" style="width: 150px; height:150px; border-style: solid; margin:80px;">
    <article style="font-size: 20px; color: white; background-color: blue;">
      <div class="name">${this.name}</div>
      <div class="job">Intern</div>
    </article>
    <div class="id">${this.id}</div>
    <div class="email"><a href="mailto:${this.email}">{}.email}<a></div>
    <div class="school">${this.school}</div>
  </section>
`
  }
}

module.exports = Intern;
