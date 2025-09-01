"use strict";

const now = new Date();
// const now = new Date("2025-09-01"); // год має передаватися завжди 4-х значними числами
// new Date.parse("2025-09-01") // те саме що і вище, але задопомогою метода
// const now = new Date(2025, 0, 1, 20); // timestamp - вимір в мілісекундах
// const now = new Date(0); // з 1970 дата відраховується
// const now = new Date(-9939393); // відємне значення отримати дату раніше 1970

// console.log(now);
/* console.log(now.getFullYear());
console.log(now.getMonth()); // від 0 до 11
console.log(now.getDate()); // від 1 до 31
console.log(now.getDay()); // від неділі(0) починається нумерація - субота(6)
console.log(now.getHours());
console.log(now.getUTCHours()); */

// console.log(now.getTimezoneOffset()); // різниця між моїм і часовим поясом UTC
// console.log(now.getTime()); //  мілісекунди з 1970-го по сьогодні / помістивши мілісекунди в Date(отрмаємо дату, що зараз)

// console.log(now.setHours(18)); // перевести годинник на ту годину / встановити
// console.log(now);

let start = new Date();
for (let i = 0; i < 1000000; i++) {
  let some = i ** 3;
}

let end = new Date();

console.log(end - start);
