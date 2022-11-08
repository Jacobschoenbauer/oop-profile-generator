const Employee = require("./employee.js");

class Engineer extends Employee {
  constructor(name, id, email, github) {
    super(name, id, email);

    this.github = github;
  }

  getGithub() {
    return this.github;
  }
  getRole() {
    return "Engineer";
  }
  getHtml(){
    return `<section class="engineer" style="width: 150px; height:150px; border-style: solid; margin:80px;">
    <article style="font-size: 20px; color: white; background-color: blue;">
      <div class="name">${this.name}</div>
      <div class="job">Engineer</div>
    </article>
    <div class="id">${this.id}</div>
    
    <div class="email"><a href="mailto:${this.email}">${this.email}<a></div>
    <div class="github"><a href="${this.github}">${this.github}<a></div>
  </section>  `
  }
  

}

module.exports = Engineer;
