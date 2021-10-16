const Employee = require("./employee");//requiring the employee class

class Engineer extends Employee {
  constructor(name, id, email, GitHub) {
    super(name, id, email);
    this.GitHub = GitHub;
  }
  getGitHub() {
    return this.GitHub;
  }
  getRole() {
    return "Engineer";
  }
}
module.exports = Engineer;