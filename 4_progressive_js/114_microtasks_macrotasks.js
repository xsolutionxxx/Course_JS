"use strict";

setTimeout(() => {
  console.log("timeout");
});

Promise.resolve().then(() => console.log("pomise"));

queueMicrotask(() => console.log("wow"));

Promise.resolve().then(() => console.log("pomise_2"));

console.log("code");

/* () => {} - macrotask
microtasks: then/catch/finally/await - виконуються всі заплановані мікрозадачі, це нам гарантує, те що загальне середовище сторінки в нас залишається одним і тим же між мікрозадачами (не буде змінені координати миші чи отримані нові дані по мережі і т. д.)
render - перересорвка на сторінці
() => {} - macrotask, якщо під час цієї макротаски накопилося ще мікротаск виконуємо їх після
microtasks: then/catch/finally/await
render - перересорвка на сторінці
() => {} - macrotask */
