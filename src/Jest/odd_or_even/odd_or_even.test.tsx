import React from "react";

const isEven = require("./odd_or_even");
describe("check wether the number is odd or even", () => {
  test("returns true for even numbers", () => {
    expect(isEven(2)).toBe(true);
  });

  test("returns false for odd number", () => {
    expect(isEven(3)).toBe(false);
  });

  test("throws an error if number is not a number", () => {
    expect(() => isEven("1")).toThrow();
  });
});
