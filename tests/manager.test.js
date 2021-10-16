const Manager = require("../lib/manager");

describe("Manager class", () => {
  describe("gets github", () => {
    it("should return github username", () => {
      const obj = new Manager("Sue", 1, "sue@me.com", 7);
      expect(obj.getOfficeNumber() === 7);
    });
  });

  describe("get role", () => {
    it("should return role", () => {
      const obj = new Manager("Sue", 1, "sue@me.com", 7);
      expect(obj.getRole() === "Manager");
    });
    });

});