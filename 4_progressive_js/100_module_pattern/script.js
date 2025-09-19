"use strict";

const app = "124";

const number = 1;

(function () {
  let number = 2;
  console.log(number); // 2
  console.log(number + 3); // 3
})(); //IIFE (Imediatly-Invoked Function Expression)

console.log(number); // 1

const user = (function () {
  const privat = function () {
    console.log(`I'm privat`);
  };

  return {
    sayHello: privat,
  };
})();

user.sayHello(); // I'm privat
