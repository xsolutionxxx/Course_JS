"use strict";

/* const obj = newObject(); */

const options = {
  name: "test",
  wigth: 1024,
  height: 1024,
  colors: {
    border: "balck",
    bg: "red",
  },
  makeTest: function () {
    console.log("Test");
  },
};

options.makeTest();

/* const {
  colors: { border, bg },
} = options; */
const { border, bg } = options.colors;

console.log(border);

console.log(Object.keys(options).length);

console.log(options["colors"]["bg"]);

delete options.name;

console.log(options);

let counter = 0;

/* for (let k in options) {
  if (k) {
    counter++;
  }
}

console.log(counter); */

for (let key in options) {
  if (typeof options[key] == "object") {
    for (let i in options[key]) {
      console.log(`Свойство ${i}, имеет значение ${options[key][i]}`);
    }
  } else {
    console.log(`Свойство ${key}, имеет значение ${options[key]}`);
  }
}

console.log(counter);
