const { expect } = require("@jest/globals");
const Intern = require("../lib/intern");

test("getRole() should return \"Engineer\"", () => {
    const testValue = "Intern";
    const e = new Intern("Kayla", 1, "test@test.com", "UCF");
    expect(e.getRole()).toBe(testValue);
});