"use strict";

const user = {
  name: "Alex",
  surname: "Smith",
  birthday: "11/12/2003",
  showMtPublicData: function () {
    console.log(`${this.name} ${this.surname}`);
  },
};

const userMap = new Map(Object.entries(user));
console.log(userMap);

const newUserObj = Object.fromEntries(userMap);
console.log(newUserObj);

console.log(typeof Object.keys(user)[0]);

const shops = [{ rice: 500 }, { oil: 200 }, { bread: 50 }];

const budget = [12424, 124515, 15125];

const map = new Map([[{ paper: 400 }, 6000]]);

shops.forEach((shop, i) => {
  map.set(shop, budget[i]); // - записати знаяення
});

/* map.set(shops[0], 5000).set(shops[1], 15000).set(shops[2], 52000); */

// console.log(map);
// console.log(map.get(shops[0])); // - отримати значення
// console.log(map.has(shops[1])); // - перевірити чи існує
// map.delete(key); // - видаляє з карти
// map.clear(); // - очищає повністю
// map.size; // - властивість size

map.keys(); // - вертає ітеруємий обєкт(масив) по ключам

console.log(map.keys());

const goods = [];

for (let shop of map.keys()) {
  goods.push(Object.keys(shop)[0]);
}

console.log(goods);

for (let price of map.values()) {
  console.log(price);
}

map.entries(); // - отримуємо масив з масивами за двума аргументами властивостю і значення

for (let [shop, price] of map.entries()) {
  console.log(price, shop);
}

map.forEach((value, key, map) => {
  console.log(key, value);
});
