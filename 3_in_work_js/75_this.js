"use strict";

/* function showThis() {
  console.log(this);
}

showThis(); */

// 1) Звичайна функція: this = window, але якщо use strict - undefined.

/* function showThis(a, b) {
  console.log(this);
  function sum() {
    console.log(this);
    return a + b;
  }

  console.log(sum());
}

showThis(4, 5); */

/* const obj = {
  a: 20,
  b: 14,
  sum: function () {
    console.log(this);
    function shout() {
      console.log(this);
    }
    shout();
  },
};

obj.sum(); */

// 2) Контекст у методів об'єкт - є сам об'єкт.

/* function User(name, id) {
  this.name = name;
  this.id = id;
  this.human = true;
  this.hello = function () {
    console.log(`Hello ${this.name}`);
  };
}

let nazar = new User("Nazr", 32142); */

// 3) This в конструкторах і класах - це новий екземпляр об'єкта.

function sayName(surname) {
  console.log(this);
  console.log(this.name + " " + surname);
}

const user = {
  name: "John",
};

sayName.call(user, "Smith");
sayName.apply(user, ["Smith"]);

function count(num) {
  return this * num;
}

const double = count.bind(2);

console.log(double(3));
console.log(double(17));

// 4) Ручна прив`язка this: call, apply, bind.

const btn = document.querySelector("button");

btn.addEventListener("click", function () {
  this.style.backgroundColor = "red";
});

const obj1 = {
  num: 5,
  sayNumber: function () {
    const say = () => {
      console.log(this);
    };

    say();
  },
};

obj1.sayNumber();

const dbl = (a) => a * 2;

console.log(dbl(3));
