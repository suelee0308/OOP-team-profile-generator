const inquirer = require('inquirer');
const fs = require('fs');
const generateHTML = require('./generateHTML');

//   questions inquirer will ask all Employees - name, id, email, 
const employeeQuestions = [
    {
    type: 'input',
    name: 'name',
    message: "What is the employee's name?",
    },
    {
    type: 'input',
    name: 'id',
    message: "What is the employee's id?",
    },
    {
    type: 'input',
    name: 'email',
    message: "What is the employee's email?",
    },
    {
    type: 'list',
    name: 'employeeType',
    message: "Is the employee a manager, engineer, or intern?",
    choices: ['Manager', 'Engineer', 'Intern'],
    },
    {
    when: (data) => data.employeeType === "Manager",
    type: 'input',
    name: 'office',
    message: "What is the manager's office number?",
    },
    {
    when: (data) => data.employeeType === "Engineer",
    type: 'input',
    name: 'github',
    message: "What is the engineer's github username?",
    },
    {
    when: (data) => data.employeeType === "Intern",
    type: 'input',
    name: 'school',
    message: "What school does the intern attend?",
    }
];

// TODO: Create a function to write HTML file
function writeToFile(fileName, data) {
    fs.writeFileSync(fileName, generateHTML(data))
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(employeeQuestions)
    .then((userResponse) => {
        writeToFile("./output/generatedHTML", userResponse)
    })
};

// Function call to initialize app
init();