"use strict";

// const bigint = 12451251935348956934825798126192364812754892412n;

const sameBigint = BigInt(12451251935348956934825798126192364812754892412);

console.log(typeof bigint);

console.log(Math.round(5n)); // помилка, не можна вимкористовувати методи внутрішнього обєкта Math на BigInt
console.log(5n + 1); // помилка, не можна змішувати звичайнийти тип числа і BigInt

console.log(5n / 2n); // поверне округлене число (2n)

console.log(2n > 1); // без помилки, операції порівняння працюють коректно, навіть, зі звичайними числами

let bigint = 1n;
let number = 2;

console.log(bigint + BigInt(number)); // перетворення в BigInt
console.log(Number(bigint) + number); // перетворення в Number
console.log(+bigint + number); // помилка, унарний + не можна використовувати з BigInt
