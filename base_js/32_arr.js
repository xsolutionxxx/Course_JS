"use strict";

const arr = [42, 2, 32, 7, 4];

arr.sort(compareNum);
console.log(arr);

function compareNum(a, b) {
  return a - b;
}

/* arr.forEach(function (item, i, arr) {
  console.log(`${i}: ${item} inside array^ ${arr}`);
}); */

/* arr[99] = 0;
console.log(arr.length);
console.log(arr); */

/* arr.pop(); */
/* arr.push(10); */

/* for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

for (let value of arr) {
  console.log(value);
}

console.log(arr); */

const str = "Hokd, sada, 41ved, asfmvnj, asd a v va nv bna , asd ";
const products = str.split(", ");
products.sort();
console.log(products.join("; "));
