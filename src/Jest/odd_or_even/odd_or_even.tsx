import React from "react";
function isEven(number: any) {
  if (number < 0) throw new Error("Number must be positive");
  if (typeof number !== "number") throw new Error("Number must be a number");
  return number % 2 === 0;
}

module.exports = isEven;
