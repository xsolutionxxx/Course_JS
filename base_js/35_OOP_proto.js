"use strict";

/* let str = "some";
let strEdit = str.toLowerCase();
let strObj = new String(str);

console.log(typeof str);
console.log(typeof strEdit);
console.log(typeof strObj);

console.dir([1, 2, 3]);
 */
const soldier = {
  health: 400,
  armor: 100,
  sayHello: () => {
    return "hello";
  },
};

/* const john = {
  health: 200,
}; */

/* john.__proto__ = soldier; */

const john = Object.create(soldier);
/* Object.setPrototypeOf(john, soldier); */

console.log(Object.getPrototypeOf(john));
