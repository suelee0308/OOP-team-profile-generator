const Engineer = require("../lib/engineer");

describe("Engineer class", () => {
  describe("gets github", () => {
    it("should return github username", () => {
      const obj = new Engineer("Sue", 1, "sue@me.com", "suelee0308");
      expect(obj.getGitHub() === "suelee0308");
    });
  });

  describe("get role", () => {
    it("should return role", () => {
      const obj = new Engineer("Sue", 1, "sue@me.com", "suelee0308");
      expect(obj.getRole() === "Engineer");
    });
    });

});
