const Calculator = require("../src/string_calculator");

describe("Simple calculator that adds", function () {
  it("should add 2 numbers", () => {
    expect(calc.add(3, 5)).toEqual(8); 
    expect(calc.set_slot(1)).toMatch("NaN");
    expect(calc.get_slot(1)).toEqual(3); 
    expect(calc.add(10, 20)).toEqual(30);
    expect(calc.set_slot(2));
    expect(calc.get_slot(2)).toEqual(30);
    expect(calc.add("LAST")).toEqual(3);
  });
  it("should be able to use LAST String as parameter", () => {
    expect(calc.add(1, 2)).toEqual(3); 
    expect(calc.add("LAST", 5)).toEqual(15);
  });
  it("should add multiple numbers", () => {
    expect(calc.add(3, 5, 2)).toEqual(10); 
  });
});
it("should add multiple numbers using also LAST", () => {
  expect(calc.add("LAST", 10, 11, 31)).toEqual();
  expect(calc.add(3, 5, "LAST")).toEqual(68);
});
describe("Simple calculator that multiplies multiple numbers", function () {
  it("should multiply multiple numbers", () => {
    expect(calc.multiply(1, 2, 3, 4, 5)).toEqual(120);
  });
});
