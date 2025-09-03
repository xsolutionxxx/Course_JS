"use strict";

/* for (let i = 0; i < 3; i++) {
  console.log(i);
  for (let j = 0; j < 3; j++) {
    console.log(j);
  }
}
 */

//  *
//  **
//  ***
//  ****
//  *****
//  ******

/* My solution */

/* const userNum = +prompt("Guess a number", "6");
let result = "";

for (let i = 1; i <= userNum; i++) {
  result += `${"*".repeat(i)} <br> \n`;
}

document.write(result); */

/* Example cycle in cycle */

/* let result = "";
const length = 7;

for (let i = 1; length > i; i++) {
  for (let j = 0; i > j; j++) {
    result += "*";
  }

  result += "\n";
}

console.log(result); */

/* Reverse solution */

/* let result = "";
const length = 7;

for (let i = 1; length > i; i++) {
  result += `${" ".repeat(length - 1 - i)}`;

  for (let j = 0; i > j; j++) {
    result += "*";
  }

  result += "\n";
}

console.log(result); */

//     *
//    ***
//   *****
//  *******

/* let result = "";
const length = 7;
let quantitySpaces = Math.floor(length / 2);

for (let i = 1; length >= i; i++) {
  if (i % 2 === 0) {
    continue;
  }

  for (let k = 0; k < quantitySpaces; k++) {
    result += " ";
  }

  for (let j = 0; i > j; j++) {
    result += "*";
  }

  result += "\n";
  --quantitySpaces;
}

console.log(result); */

/* const lines = 5;
let result = "";

for (let i = 0; i <= lines; i++) {
  for (let j = 0; j < lines - i; j++) {
    result += " ";
  }

  for (let j = 0; j < i * 2 + 1; j++) {
    result += "*";
  }

  result += "\n";
}

console.log(result); */

/* Mark in cycle */

/* first: for (let i = 0; i < 3; i++) {
  console.log(`First level: ${i}`);
  for (let j = 0; j < 3; j++) {
    console.log(`Second level: ${j}`);
    for (let k = 0; k < 3; k++) {
      if (k === 2) continue first;
      console.log(`Third level: ${k}`);
    }
  }
} */

//  1.

/* for (let i = 5; i <= 10; i++) {
  console.log(i);
} */

// 2.

/* for (let i = 20; i >= 10; i--) {
  if (i === 13) break;
  console.log(i);
} */

// 3.

/* for (let i = 2; i <= 10; i++) {
  if (i % 2 != 0) continue;
  console.log(i);
} */

// 4.

/* for (let i = 2; i <= 16; i++) {
  if (i % 2 === 0) {
    continue;
  } else {
    console.log(i);
  }
} */

/* let i = 2;

do {
  if (i % 2 === 0) {
    i++;
    continue;
  }
  console.log(i);
  i++;
} while (i <= 16); */

/*while (i <= 16) {
  if (i % 2 !== 0) {
    console.log(i);
    i++;
  }
  i++;
} */

//  5.

/* let arr = [];

for (let k = 5; k < 11; k++) {
  arr[k - 5] = k;
}

console.log(arr);
 */

// 6.

/* const arr = [3, 5, 8, 16, 20, 23, 50];
const result = [];

for (let i = 0; i < arr.length; i++) {
  result[i] = arr[i];
}

console.log(result); */

// 7.

/* const data = [5, 10, "Shopping", 20, "Homework"];

for (let j = 0; j < data.length; j++) {
  if (typeof data[j] === "number") {
    data[j] = data[j] * 2;
  } else {
    data[j] += ` - done`;
  }
}

console.log(data); */

/* const data = [5, 10, "Shopping", 20, "Homework"];
const result = [];

const arrLen = data.length - 1;
let index = 0;

for (let k = arrLen; k >= 0; k--) {
  result[index] = data[k];
  index++;
}

console.log(result); */

/* const data = [5, 10, "Shopping", 20, "Homework"];
const result = [];

for (let k = 0; k < data.length; k++) {
  result[k] = data[data.length - 1 - k];
}

console.log(result); */
