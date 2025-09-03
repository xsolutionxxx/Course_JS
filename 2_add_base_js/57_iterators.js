"use strict";

const user = {
  name: "Alex",
  surname: "Smith",
  birthday: "11/12/2003",
  showMtPublicData: function () {
    console.log(`${this.name} ${this.surname}`);
  },
};

/* for (const key of user) {
  console.log(key);
} */

const arr = ["b", "a", "c"];
Array.prototype.soemMethod = function () {};

for (const key of arr) {
  console.log(key);
}

/* const str = "string";

for (const key in str) {
  console.log(str[key]);
} */

const salaries = {
  john: 500,
  ivan: 1000,
  ann: 5000,
  sayHello: function () {
    console.log("Hello");
  },
};

salaries[Symbol.iterator] = function () {
  return {
    current: this.john,
    last: this.ann,

    next() {
      if (this.current < this.last) {
        this.current = this.current + 500;
        return { done: false, value: this.current };
      } else {
        return { done: true };
      }
    },
  };
};

const iterator = salaries[Symbol.iterator]();
console.log(iterator.next());

for (let res of salaries) {
  console.log(res);
}
