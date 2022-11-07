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
const { default: Choices } = require("inquirer/lib/objects/choices.js");

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
    ])
    .then((answers) => {
      const manager = new Manager(answers.id);
      team.push(manager);
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
        message: "Github username ?",
        name: "githubuser",
      },
      {
        type: "input",
        message: "Github URL",
        name: "github",
      },
    ])
    .then((answers) => {
      const engineer = new Engineer(answers.id);
      team.push(engineer);
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
        message: "intern email",
        name: "email",
      },
      {
        type: "input",
        message: "School Attending",
        name: "school",
      },
    ])
    .then((answers) => {
      const intern = new Intern(answers.id);
      team.push(intern);
      menu();
    });
}
function menu() {
  inquirer
    .prompt([
      // choice type add engeneer, add intern or crfeate profile
      {
        type: "checkbox",
        name: "choice",
        message: "Choose from options below",
        choices: ["add engineer", "add intern", "Create Profile"],
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
    .then((choices) => {
      if (choices !== "add engineer") defineEngineer();
      else if (choices !== "add intern") defineIntern();
      else createProfile();
    });
}

function createProfile() {
  //define html template
  // loop through team array
}
function buildProfile() {
  defineManager();
}

buildProfile();
