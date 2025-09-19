"use strict";

const person = {
  name: "Alex",
  age: 24,

  get userAge() {
    return this.age;
  },

  set userAge(num) {
    this.age = num;
  },
};

Object.defineProperty(person, "full", {
  get() {
    return `${this.name} ${this.age}`;
  },

  set(value) {
    [this.name, this.age] = value.split(" ");
  },
});

console.log((person.userAge = 30));
console.log(person.userAge);
console.log((person.full = "Nazar 20"));
console.log(person.full);
