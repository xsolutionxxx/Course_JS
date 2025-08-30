"use strict";

let a = 5,
  b = a; // Передача по значенню

b = b + 5;

console.log(b);
console.log(a);

/* const obj = {
  a: 5,
  b: 1,
};

const copy = obj; // Link

copy.a = 10;

console.log(copy);
console.log(obj); */

function copy(mainObj) {
  let objCopy = {};

  for (let key in mainObj) {
    objCopy[key] = mainObj[key];
  }

  return objCopy;
}

const numbers = {
  a: 2,
  b: 6,
  c: {
    x: 5,
    y: {
      rotate: "23deg",
    },
  },
};

/* const newNumbers = copy(numbers);

newNumbers["a"] = 10;
newNumbers["c"]["y"]["rotate"] = "360deg";
newNumbers.c.x = 3804;

console.log(newNumbers);
console.log(numbers); */

const add = {
  d: 17,
  e: 20,
};

console.log(Object.assign(numbers, add));

const clone = Object.assign({}, add);

clone.d = 20;

console.log(add);
console.log(clone);

const oldArray = ["a", "b", "c"];
const newArray = oldArray.slice(1, 2);

newArray[1] = "addasdasd";
console.log(newArray);
console.log(oldArray);

const video = ["youtube", "vimeo", "rutube"],
  blogs = ["wordpress", "livejournal", "blogger"],
  internet = [...video, ...blogs, "insta", "facebook"];

console.log(internet);

function log(a, b, c) {
  console.log(a);
  console.log(b);
  console.log(c);
}

const num = [2, 5, 3];

log(...num);

const arr = ["a", "b"];

const newArr = [...arr];
console.log(newArr);

const q = {
  one: 1,
  two: 2,
};

const newObj = { ...q };
console.log(newObj);
