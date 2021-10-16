const Manager = require("./employee");//requiring the employee class

class Manager extends Employee {
  constructor(name, id, email, officeNumber) {
    super(name, id, email);
    this.officeNumber = officeNumber;
  }
  getSchool() {
    return this.officeNumber;
  }
  getRole() {
    return "Manager";
  }
}
module.exports = Manager;