// const { it } = require("@jest/globals");
// const { describe } = require("yargs");
const Employee = require("../lib/employee");

describe("Employee class", () => {
  describe("gets name", () => {
    it("should return name", () => {
      const obj = new Employee("Sue", 1, "sue@me.com");
      expect(obj.getName() === "Sue");
    });
  });
  describe("get id", () => {
      it("should return id", () => {
        const obj = new Employee("Sue", 1, "sue@me.com");
        expect(obj.getId() === 1);
      });
  });
  describe("get role", () => {
    it("should return role", () => {
      const obj = new Employee("Sue", 1, "sue@me.com");
      expect(obj.getRole() === "Employee");
    });
    });

});
