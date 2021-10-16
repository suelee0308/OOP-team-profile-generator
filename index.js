const inquirer = require('inquirer');
const fs = require('fs');
const generateHTML = require('./generateHTML');
const Engineer = require('./lib/engineer');
const Manager = require('./lib/manager');
const Intern = require('./lib/intern');

const allEmployees = [];

//   questions inquirer will ask 
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

// function to push all answer into allAnswers array
function pushAnswers(input) {
    switch (input.employeeType) {
        case "Manager" : {
        allEmployees.push(new Manager(input.name, input.id, input.email, input.office));
        break;
        }
        case "Engineer" : {
        allEmployees.push(new Engineer(input.name, input.id, input.email, input.github));
        break;
        }
        case "Intern" : {
        allEmployees.push(new Intern(input.name, input.id, input.email, input.school));
        break;
        }
    }
}

// function to write HTML file
function writeToFile(fileName, data) {
    fs.writeFileSync(fileName, generateHTML(data))
}

// function to initialize app
function init() {
    inquirer.prompt(employeeQuestions)
    .then((userResponse) => {
        pushAnswers(userResponse);
        writeToFile("./output/generatedHTML", userResponse)
    })
};

// Function call to initialize app
init();