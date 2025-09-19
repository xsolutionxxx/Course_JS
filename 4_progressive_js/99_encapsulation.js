"use strict";

/* function User(name, age) {
  this.name = name;
  let userAge = age;
  //this.age = age;

  this.say = function () {
    console.log(`User name: ${this.name}, age: ${userAge}`);
  };

  this.getAge = function () {
    return userAge;
  };

  this.setAge = function (age) {
    if (typeof age === "number" && age > 0 && age < 110) {
      userAge = age;
    } else {
      console.log("Undefined property");
    }
  };
}

const nazar = new User("Nazar", 20);
console.log(nazar.name);
console.log(nazar.getAge());
console.log(nazar.userAge);

nazar.name = "Alex";
nazar.setAge(30);
nazar.setAge(300);
console.log(nazar.getAge());

nazar.say(); */

class User {
  constructor(name, age) {
    this.name = name;
    this._age = age;
  }

  #surname = "Talaievych";

  say = () => {
    console.log(
      `Имя пользователя: ${this.name} ${this.#surname}, возраст ${this._age}`
    );
  };

  get age() {
    return this._age;
  }

  set age(age) {
    if (typeof age === "number" && age > 0 && age < 110) {
      this._age = age;
    } else {
      console.log("Недопустимое значение!");
    }
  }
}

const ivan = new User("Nazar", 20);
console.log(ivan.surname);
ivan.say();
