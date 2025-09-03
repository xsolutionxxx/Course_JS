"use strict";

const birthday = Symbol("birthday");

const user = {
  name: "Alex",
  surname: "Smith",
  [birthday]: "11/12/2003",
  showMtPublicData: function () {
    console.log(`${this.name} ${this.surname}`);
  },
};

/* Object.defineProperty(user, "birthday", { writable: false }); */

/* Object.defineProperty(user, "birthday", { value = prompt("Date?", ''), enumerable: true, configurable: true});

console.log(Object.getOwnPropertyDescriptor(user, "birthday"));
user.birthday = 'asdasfasf' */

/* Object.defineProperty(user, "showMtPublicData", { enumerable: false });

for (let key in user) console.log(key); */

for (let key in user) console.log(key);
Object.defineProperty(user, "birthday", { enumerable: false });

// console.log(Object.getOwnPropertyDescriptor(Math, "PI")); // значення яке не можна не видалити не змінити configurable: false

/* Object.defineProperties(user, {
  name: { writable: false },
  surname: { writable: false },
}); */

/* console.log(Object.getOwnPropertyDescriptor(user, "name"));

Object.defineProperty(user, "name", { writable: false });

Object.defineProperty(user, "gender", { value: "male" });
console.log(Object.getOwnPropertyDescriptor(user, "gender")); */

// Флаги

/* writable - якщо true, то властивість можна змінити, якщо ж false, то тільки для читання.
enumerable - якщо true, то може перечислятися в циклах, якщо false, то ні.
configurable - якщо true, то його властивість можна буде видалити, а атрибути змінити, інакше робити цього не можна.
 */
