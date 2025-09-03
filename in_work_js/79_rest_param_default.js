"use strict";

const log = function (a, b, ...rest) {
  console.log(a, b, rest);
};

log("basic", "rest", "operator", "usage");

function calcOrDouble(number, basis = 2) {
  // basis = basis || 2; // до ES6 не задокументоване рішення
  console.log(number * basis);
}

calcOrDouble(3, 5);
calcOrDouble(3);
