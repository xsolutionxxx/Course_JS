"use stirct";

let number = 5;

function logNumber() {
  /* let number = 10; */
  console.log(number);
}

number = 6;

logNumber();

number = 8;

logNumber();

function createCounter() {
  let counter = 0;

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
