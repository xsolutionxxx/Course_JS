"use strict";

/* let id = Symbol("id"); */

/* const obj = {
  name: "Test",
  // [id]: 1,
  [Symbol("id")]: 1,
  getId: function () {
    return this[id];
  },
};

console.log(obj.getId());
console.log(obj[Object.getOwnPropertySymbols(obj)][0]);

let id = Symbol("id");
obj[id] = 1;

console.log(obj[id]); // вірно
console.log(obj["id"]); // НЕ вірно */

/* for (let value in obj) console.log(value); */

const myAwesomeDB = {
  movies: [],
  actors: [],
  [Symbol.for("id")]: 123,
};

// Another code

myAwesomeDB.id = "3314";

console.log(myAwesomeDB[Symbol.for("id")]);
console.log(myAwesomeDB);
