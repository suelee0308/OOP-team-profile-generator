const inquirer = require('inquirer');
const fs = require('fs');
const generateHTML = require('./lib/generateHTML');
const generateCSS = require('./lib/generateCSS');
const Engineer = require('./lib/engineer');
const Manager = require('./lib/manager');
const Intern = require('./lib/intern');

const allEmployees = [];

//   questions inquirer will ask 
const confirmInput = (input) => {
    if (input === "") {
      return "Please do not leave section blank";
    } else {
      return true;
    }
  };

const employeeQuestions = [
    {
    type: 'list',
    name: 'role',
    message: "Please select one of the following roles to add to the team:",
    choices: ['Manager', 'Engineer', 'Intern'],
    },
    {
    type: 'input',
    name: 'name',
    message: "What is the employee's name?",
    validate: confirmInput,
    },
    {
    type: 'input',
    name: 'id',
    message: "What is the employee's id?",
    validate: confirmInput,
    },
    {
    type: 'input',
    name: 'email',
    message: "What is the employee's email?",
    validate: confirmInput,
    },
    {
    when: (data) => data.role === "Manager",
    type: 'input',
    name: 'office',
    message: "What is the manager's office number?",
    validate: confirmInput,
    },
    {
    when: (data) => data.role === "Engineer",
    validate: confirmInput,
    type: 'input',
    name: 'github',
    message: "What is the engineer's github username?",
    validate: confirmInput,
    },
    {
    when: (data) => data.role === "Intern",
    type: 'input',
    name: 'school',
    message: "What school does the intern attend?",
    validate: confirmInput,
    },
    {
    type: 'list',
    name: 'anotherOne',
    message: "Would you like to create another employee?",
    choices: ['Yes', 'No'],
    }
];

// function to push all answer into allAnswers array
function pushAnswers(input) {
    switch (input.role) {
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

function init() {
    inquirer.prompt(employeeQuestions)
    .then((input) => {
        if (input.anotherOne === "Yes") {
            pushAnswers(input);
            init();
        }else {
            pushAnswers(input);
            renderCSS();
            getTeam();
        }
    })
};

function getTeam() {
    const html = generateHTML(allEmployees);
    fs.writeFile("./output/generatedHTML.html", html, (err) => {
        if (err) throw err;
        console.log("Success! Your team has been created!");
    })
}

function renderCSS() {
    const css = generateCSS();
    fs.writeFile("./output/generatedCSS.css", css, (err) => {
        if (err) throw err;
        console.log("Success! Your application has been styled!");
    })
}

// Function call to initialize app
init();