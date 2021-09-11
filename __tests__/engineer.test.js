const { expect } = require("@jest/globals");
const Engineer = require("../lib/engineer");

test("getRole() should return \"Engineer\"", () => {
    const testValue = "Engineer";
    const e = new Engineer("Kayla", 1, "test@test.com", "GitHubUser");
    expect(e.getRole()).toBe(testValue);
});