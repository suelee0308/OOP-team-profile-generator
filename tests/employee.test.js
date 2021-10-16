const Employee = require("../lib/employee");

describe("Employee class", () => {
  describe("gets name", () => {
    it("should return name", () => {
      const obj = new Employee("Sue", 1, "sue@me.com");
      expect(obj.getName() === "Sue");
    });
  });

  
});
