"use strict";

// filter

const names = ["Ivan", "Ann", "Ksenia", "Voldemart"];
const shortNames = names.filter(function (name) {
  return name.length < 5;
}); // [ 'Ivan', 'Ann' ]

console.log(shortNames);

// map

const answers = ["IvAN", "AnnA", "HELLo"];
const result = answers.map((item) => item.toLowerCase()); // [ 'ivan', 'anna', 'hello' ]

console.log(result);

// every/some

const something1 = [4, "123", "asasd"];
const something2 = [4, 12, 132];
console.log(something1.some((item) => typeof item === "number")); // true
console.log(something2.every((item) => typeof item === "number")); // true

// reduce

const numbers = [4, 5, 6, 7, 1, 2, 4];
const res = numbers.reduce((sum, current) => sum + current, 3); // 29

console.log(res);

const fruits = ["apple", "orange", "banana", "watermello"];
const bag = fruits.reduce((sum, current) => `${sum}, ${current}`); // apple, orange, banana, watermello

console.log(bag);

const obj = {
  ivan: "persone",
  ann: "persone",
  dog: "animal",
  cat: "animal",
};

const newArr = Object.entries(obj)
  .filter((item) => item[1] === "persone")
  .map((name) => name[0]);

console.log(newArr); // [ 'ivan', 'ann' ]
