const { describe, expect } = require("@jest/globals");
const { getSalary, employees } = require("../app/P&C_N2_E2");

describe("Test Promises & Callbacks N2 E2", () => {
  test("Employee introduced has Id number 1", () => {
    return getSalary(employees[0]).then((data) => {
      expect(data).toBe(4000);
    });
  });

  test("Employee introduced has Id number 2", () => {
    return getSalary(employees[1]).then((data) => {
      expect(data).toBe(1000);
    });
  });

  test("Employee introduced has Id number 3", () => {
    return getSalary(employees[2]).then((data) => {
      expect(data).toBe(2000);
    });
  });

  test("Data introduced is not an Object", () => {
    return getSalary("Bill gates").catch((data) => {
      expect(data).toBe("This Id does not exist.");
    });
  });
});
