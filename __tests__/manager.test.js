const { expect } = require("@jest/globals");
const Manager = require("../lib/manager");

test("getRole() should return \"Engineer\"", () => {
    const testValue = "Manager";
    const e = new Manager("Kayla", 1, "test@test.com", 55);
    expect(e.getRole()).toBe(testValue);
});