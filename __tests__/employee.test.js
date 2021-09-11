const { expect } = require("@jest/globals");
const Employee = require("../lib/employee");

test("Does Employee instantiate?", () => {
    const e = new Employee();
    expect(typeof(e)).toBe("object");
});

test("getRole() should return \"Employee\"", () => {
    const testValue = "Employee";
    const e = new Employee("Kayla", 1, "test@test.com");
    expect(e.getRole()).toBe(testValue);
});