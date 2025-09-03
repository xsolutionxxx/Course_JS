"use strict";

const str = "teSt",
  arr = [1, 2, 3];

console.log(str.length);
console.log(arr.length);

// console.log((str[2] = "d"));

console.log(str.toUpperCase());
console.log(str.toLowerCase());
console.log(str);

let fruit = "Some fruit";

console.log(fruit.indexOf("fruit"));
console.log(fruit.indexOf("q"));

let logg = "hello, world";

console.log(logg.slice(-1));
console.log(logg.substring(7, 12));
console.log(logg.substr(7, 5));

const num = 12.2;
console.log(Math.round(num));

const test = "12.2px";
console.log(parseInt(test));

let strWithSpaces = "      God day sir   !   ";

console.log(strWithSpaces.trim());
