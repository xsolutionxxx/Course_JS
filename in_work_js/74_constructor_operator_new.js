"use strict";

/* const num = new Number(3);
const funс = new Function(name);

console.log(num);
console.log(fun); */

function User(name, id) {
  this.name = name;
  this.id = id;
  this.human = true;
  this.hello = function () {
    console.log(`Hello ${this.name}`);
  };
}

User.prototype.exit = function () {
  console.log(`User ${this.name} get out`);
};

const nazar = new User("Nazr", 32142);
const alex = new User("Nazr", 42132);

nazar.hello();
alex.hello();

console.log(nazar);
console.log(alex);
