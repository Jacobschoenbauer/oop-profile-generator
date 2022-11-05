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
const inquirer = require("./lib/employee")
const inquirer = require("./lib/manger")
const inquirer = require("./lib/intern")
const inquirer = require("./lib/engineer")


const team = []

function defineEmployee(){
    inquirer.prompt([
        
        //employee questions
    ]
    ).then(answers=>{
        //const employee = new Employee(// provide Employee information, eg answers.id)
        //team.push(employee)
        menu() 
    })
    }
function defineManager(){
inquirer.prompt([
    
    //manger questions
]
).then(answers=>{
    //const manager = new Manager(// provide manger information, eg answers.id)
    //team.push(manager)
    menu() 
})
}
function defineEngineer(){
    inquirer.prompt([
        //engineer questions
      
    
    ]).then(answers =>{
        //const engineer = new Engineer(// provide engineer information, eg answers.id)
    //team.push(engineer)
    menu() 
})
}
function defineIntern(){
    inquirer.prompt([
        //intern questions
      
    
    ]).then(answers =>{
        //const intern = new Intern(// provide Intern information, eg answers.id)
    //team.push(intern)
    menu() 
})
}
function menu(){
inquirer.prompt([
    // choice type add engeneer, add intern or crfeate profile

]).then(answers =>{
    if (answers.option === "add engineer")
        defineEngineer()
      else if (answers.option === "add intern")
      defineIntern()
    else
    createProfile()   
})
}
function createProfile(){
   //define html template
// loop through team array
}
function buildProfile() {
defineManager()
}

buildProfile()