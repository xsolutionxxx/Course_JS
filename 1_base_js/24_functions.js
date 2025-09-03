"use strict";

/* function showFirstMessage() {
  console.log("Hell - World!");
}

showFirstMessage(); */

let num = 20;

function showFirstMessage(text) {
  console.log(text);
  // let num = 10;
  console.log(num);
}

showFirstMessage("Hell - World!");
console.log(num);

function calc(a, b) {
  return a + b;
}

console.log(calc(3, 5));
console.log(calc(42, 9));
console.log(calc(132, 65));

function ret() {
  let num = 50;
  return num;
}

const anotherNum = ret();
console.log(anotherNum);

const logger = function () {
  console.log("Hell");
};

logger();

const calculator = (a) => a + a;

console.log(calculator(1, 2));

let val = 7;
function createAdder() {
  function addNumbers(a, b) {
    let ret = a + b;
    return ret;
  }
  return addNumbers;
}
let adder = createAdder();
let sum = adder(val, 8);
console.log("example of function returning a function: ", sum);

let counter = 0;

function createCounter() {
  let counter = 1000;
  const myFunction = function () {
    counter = counter + 1;
    return counter;
  };
  return myFunction;
}
const increment = createCounter();
const c1 = increment();
const c2 = increment();
const c3 = increment();
console.log("example increment", c1, c2, c3);

let c = 4;
const addX = (x) => (n) => n + x;
const addThree = addX(3);
let d = addThree(c);
console.log("example partial application", d);

/* let c = 4;
function addX(x) {
  return function (n) {
    return n + x;
  };
}
const addThree = addX(3);
let d = addThree(c);
console.log("example partial application", d); */
