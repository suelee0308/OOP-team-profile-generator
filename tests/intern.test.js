const Intern = require("../lib/intern");

describe("Intern class", () => {
  describe("gets school", () => {
    it("should return school", () => {
      const obj = new Intern("Sue", 1, "sue@me.com", "UT");
      expect(obj.getSchool() === "UT");
    });
  });

  describe("get role", () => {
    it("should return role", () => {
      const obj = new Intern("Sue", 1, "sue@me.com", "UT");
      expect(obj.getRole() === "Intern");
    });
    });

});