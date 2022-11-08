/*GIVEN a command-line application that accepts user input
WHEN I am prompted for my team members and their information
THEN an HTML file is generated that displays a nicely formatted team roster based on user input
WHEN I click on an email address in the HTML
THEN my default email program opens and populates the TO field of the email with the address
WHEN I click on the GitHub username
THEN that GitHub profile opens in a new tab
WHEN I start the application
THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number
WHEN I enter the team manager’s name, employee ID, email address, and office number
THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team
WHEN I select the engineer option
THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu
WHEN I select the intern option
THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu
WHEN I decide to finish building my team
THEN I exit the application, and the HTML is generated*/
const inquirer = require("inquirer");
const fs = require("fs");
const { type } = require("os");
//const { Employee } = require("./lib/employee");
const Manager = require("./lib/manager.js");
const Intern = require("./lib/intern.js");
const Engineer = require("./lib/engineer.js");

const generateMarkdown = require("./dist/html.js");
const Employee = require("./lib/employee.js");
const team = [];

function defineManager() {
  inquirer
    .prompt([
      //Manager questions
      {
        type: "input",
        message: "Manager name ?",
        name: "name",
      },
      {
        type: "input",
        message: "Manager id?",
        name: "id",
      },
      {
        type: "input",
        message: "Manager email",
        name: "email",
      },
      {
        type: "input",
        message: "Office Number",
        name: "officeNumber",
      },
    ])
    .then((answer) => {
      const { name, id, email, officeNumber } = answer;
      const manager = new Manager(name, id, email, officeNumber);
      team.push(manager);
      console.log(manager);
      menu();
    });
}
function defineEngineer() {
  inquirer
    .prompt([
      //engineer questions
      {
        type: "input",
        message: "Engineer name?",
        name: "name",
      },
      {
        type: "input",
        message: "Engineer id?",
        name: "id",
      },
      {
        type: "input",
        message: "Engineer email",
        name: "email",
      },
      {
        type: "input",
        message: "Github URL",
        name: "github",
      },
    ])
    .then((answer) => {
      const { name, id, email, github } = answer;
      const engineer = new Engineer(name, id, email, github);
      team.push(engineer);
      console.log(engineer);
      menu();
    });
}
function defineIntern() {
  inquirer
    .prompt([
      //intern questions
      {
        type: "input",
        message: "Intern name",
        name: "name",
      },
      {
        type: "input",
        message: "Intern email",
        name: "email",
      },
      {
        type: "input",
        message: "Intern id",
        name: "id",
      },
      {
        type: "input",
        message: "School Attending",
        name: "school",
      },
    ])
    .then((answer) => {
      const { name, id, email, school } = answer;
      const intern = new Intern(name, id, email, school);
      team.push(intern);
      console.log(intern);
      menu();
    });
}
function menu() {
  inquirer
    .prompt([
      // choice type add engeneer, add intern or crfeate profile
      {
        type: "list",
        name: "choice",
        message: "Choose from options below",
        choices: [
          "add manager",
          "add engineer",
          "add intern",
          "Create Profile",
        ],
        validate: (optionGroup) => {
          if (optionGroup) {
            return true;
          } else {
            console.log("please choose a job");
            return false;
          }
        },
      },
    ])
    .then((entered) => {
      console.log(entered.choice);
      if (entered.choice === "add engineer") defineEngineer();
      else if (entered.choice === "add intern") defineIntern();
      else if (entered.choice === "add manager") defineManager();
      else createProfile();
    });
}

function createProfile() {}
function buildProfile() {
  menu();
}

buildProfile();
