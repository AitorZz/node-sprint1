const { describe, expect } = require("@jest/globals");
const { sum, rest, mult, div } = require("../app/operadors");

describe("Test sum operador", () => {
  test("Sum calculator data is correct", () => {
    expect(sum(1, 2)).toBe(3);
    expect(sum(1, 2)).not.toBe(2);
    expect(() => {
      sum(1, "a");
    }).toThrow(new Error("All input data should be a number"));
    expect(() => {
      sum(1);
    }).toThrow(new Error("All input data should be a number"));
    expect(() => {
      sum();
    }).toThrow(new Error("All input data should be a number"));
    expect(() => {
      sum("a", "b");
    }).toThrow(new Error("All input data should be a number"));
  });
});

describe("Test rest operador", () => {
  test("Rest calculator", () => {
    expect(rest(1, 2)).toBe(-1);
    expect(rest(1, 2)).not.toBe(1);
    expect(() => {
      rest(1, "a");
    }).toThrow(new Error("All input data should be a number"));
    expect(() => {
      rest(1);
    }).toThrow(new Error("All input data should be a number"));
    expect(() => {
      rest();
    }).toThrow(new Error("All input data should be a number"));
    expect(() => {
      rest("a", "b");
    }).toThrow(new Error("All input data should be a number"));
  });
});

describe("Test mult operador", () => {
  test("Mult calculator", () => {
    expect(mult(1, 2)).toBe(2);
    expect(mult(1, 2)).not.toBe(1);
    expect(() => {
      mult(1, "a");
    }).toThrow(new Error("All input data should be a number"));
    expect(() => {
      mult(1);
    }).toThrow(new Error("All input data should be a number"));
    expect(() => {
      mult();
    }).toThrow(new Error("All input data should be a number"));
    expect(() => {
      mult("a", "b");
    }).toThrow(new Error("All input data should be a number"));
  });
});

describe("Test div operador", () => {
  test("Div calculator", () => {
    expect(div(1, 2)).toBe(0.5);
    expect(div(1, 2)).not.toBe(1);
    expect(() => {
      div(1, "a");
    }).toThrow(new Error("All input data should be a number"));
    expect(() => {
      div(2, 0);
    }).toThrow("You can not divide between 0");
    expect(() => {
      div(1);
    }).toThrow(new Error("All input data should be a number"));
    expect(() => {
      div();
    }).toThrow(new Error("All input data should be a number"));
    expect(() => {
      div("a", "b");
    }).toThrow(new Error("All input data should be a number"));
  });
});
