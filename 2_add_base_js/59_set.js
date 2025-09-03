"use strict";

const arr = ["Alex", "Ann", "Oleg", "Alex"];

const set = new Set(arr);

function unique(arr) {
  return Array.from(new Set(arr));
}

console.log(unique(arr));

set.add("Ivan");

console.log(set);

set.add("Oleg"); // - додати до сету, якщо такого ще не міститься
set.delete(value); // - видвалити з сету
set.has(value); // - перевірити наявінсть значення в сеті
set.clear(); // - очистити сет
set.size; // - довжина сету, його розмір

for (let value of set) console.log(value);

set.forEach((value, valueAgaing, set) => {
  console.log(value, valueAgaing);
}); // другий аргумент містить таке ж значення я і перший, спеціально створений для сумісності.

console.log(set.values()); // - виводить значення, що містяться в set
console.log(set.keys()); // - оскільки set ключив не містить, то виведуться значення як і в set.values(), зроблений цей метод лише для сумісності з Map
console.log(set.entries()); // - зроблений також для сумісності з Map
