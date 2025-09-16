"use strict";

/* new RegExp('pattern', 'flags');
/pattern/f */

/* const ans = prompt("Your name", "");

const reg = /n/gi; // flags: i - незалежно від регістру, g(global) - намагаємося знайти зразу декілька входжень, m - вмикає мегастрочний режим

console.log(ans.search(reg)); // 1 - отримуємо індекс ща якийм було знайдено букву в слові
console.log(ans.match(reg)); // отримуємо масив (різний в залежності від прапору)

const pass = prompt("Password", "");

console.log(pass.replace(/./g, "*")); // якщо ставимо точку в середині паттерна - беремо абмолютно всі елементи, що плпадуть в строчку. І в консоль отримуємо *********

console.log("12-34-56".replace(/-/g, ":"));

console.log(reg.test(ans)); // вертає true, якщо в рядку є збіг з патерном, інакше false. */

/* const ans = prompt("Your number", "");

const regNum = /\d/;
console.log(ans.match(regNum)); */

const str = "My name is R2D2";

console.log(str.match(/\w\d\w\d/i));
console.log(str.match(/\S/gi));
