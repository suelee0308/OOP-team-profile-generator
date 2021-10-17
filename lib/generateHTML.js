// const { default: generate } = require("@babel/generator");

function generateHTML(employeeCards) {
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css" integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l" crossorigin="anonymous">
        <title>Employees</title>
    </head>
    <body>
     
        <div class="jumbotron jumbotron-fluid">
            <div class="container">
              <h1 class="display-4">Our Team</h1>
              <p class="lead">Our team at a quick glance</p>
            </div>
            </div>
    
          <div class="card-deck">
            
          ${employeeCards}
    
          </div>
        
        <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-Piv4xVNRyMGpqkS2by6br4gNJ7DXjqk09RmUpJ8jgGtD7zP9yug3goQfGII0yAns" crossorigin="anonymous"></script>
        <script src="../generateHTML.js"></script>
    </body>
    </html>
  `;
  }
  
function render(allEmployees) {
    const employeeArr = [];

    employeeArr.push(...allEmployees.filter((employee) => {
        return employee.getRole() === "Manager";
    }).map((manager) => {
        return addManager(manager);
    }));

    employeeArr.push(...allEmployees.filter((employee) => {
        return employee.getRole() === "Engineer";
    }).map((engineer) => {
        return addEngineer(engineer);
    }));

    employeeArr.push(...allEmployees.filter((employee) => {
        return employee.getRole() === "Intern";
    }).map((intern) => {
        return addIntern(intern);
    }));

    return generateHTML(employeeArr.join(""));
}


function addManager(manager) {
    return `
        <div class="card border-primary mb-3" style="max-width: 18rem;">
            <div class="card-header">${manager.getName()}</div>
            <div class="card-header">${manager.getRole()}</div>
            <div class="card-body text-primary">
                <div class="card">
                    <ul class="list-group list-group-flush">
                    <li class="list-group-item">ID: ${manager.getId()}</li>
                    <li class="list-group-item">Email: ${manager.getEmail()}</li>
                    <li class="list-group-item">Office Number: ${manager.getOfficeNumber()}</li>
                    </ul>
                </div>
            </div>
        </div>
    `
}

function addEngineer(engineer) {
    return `
        <div class="card border-primary mb-3" style="max-width: 18rem;">
        <div class="card-header">${engineer.getName()}</div>
        <div class="card-header">${engineer.getRole()}</div>
            <div class="card-body text-primary">
                <div class="card">
                    <ul class="list-group list-group-flush">
                    <li class="list-group-item">ID: ${engineer.getId()}</li>
                    <li class="list-group-item">Email: ${engineer.getEmail()}</li>
                    <li class="list-group-item">GitHub: <a>github.com/${engineer.getGitHub()}</a></li>
                    </ul>
                </div>
            </div>
        </div>
    `
}

function addIntern(intern) {
    return `
        <div class="card border-primary mb-3" style="max-width: 18rem;">
        <div class="card-header">${intern.getName()}</div>
        <div class="card-header">${intern.getRole()}</div>
            <div class="card-body text-primary">
                <div class="card">
                    <ul class="list-group list-group-flush">
                    <li class="list-group-item">ID: ${intern.getId()}</li>
                    <li class="list-group-item">Email: ${intern.getEmail()}</li>
                    <li class="list-group-item">School: ${intern.getSchool()}</li>
                    </ul>
                </div>
            </div>
        </div>
    `
}

module.exports = render;
