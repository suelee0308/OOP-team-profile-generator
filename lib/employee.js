// creating class of Employee
class Employee {
    constructor(name, id, email) {
    // variable for employee's answers from inquirer
        this.name = name;
        this.id = id;
        this.email = email;
    }   

    // take user's name from inquirer's input and return name
    getName(){
        return this.name;
    };

    getId(){
        return this.id;
    }

    getEmail(){
        return this.email;
    }

    getRole(){
        return "Employee";
    }
}
  
  module.exports = Employee;