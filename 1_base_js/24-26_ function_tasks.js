"use strict";

// 1

/* function sayHell(name) {
  return `Hell, ${name}!`;
}

console.log(sayHell("Nazar")); */

// 2

/* const moreLess = function (number) {
  let massive = [];
  massive[0] = number - 1;
  massive[1] = number;
  massive[2] = ++number;
  return massive;
};

console.log(moreLess(1)); */

// 3

/* const getMathProgressive = (number, amount) => {
  if (typeof amount !== "number" || amount <= 0) return number;

  let temporaryNum = number;
  let result = "";

  for (let i = 0; i < amount; i++) {
    if (temporaryNum == number) {
      result += number;
      temporaryNum = temporaryNum + number;
      continue;
    }

    result += `---${temporaryNum}`;
    temporaryNum = temporaryNum + number;
  }

  return result;
};

console.log(getMathProgressive(3, 10)); */

function getMathResult(num, amo) {
  let res = "";

  for (let i = 1; i <= amo; i++) {
    if (i === 1) {
      res += `${num}`;
      continue;
    }

    res += `---${num * i}`;
  }

  return res;
}

console.log(getMathResult(3, 10));
