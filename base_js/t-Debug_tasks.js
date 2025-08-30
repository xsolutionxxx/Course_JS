"use strict";

const restorantData = {
  menu: [
    {
      name: "Salad Caesar",
      price: "14$",
    },
    {
      name: "Pizza Diavola",
      price: "9$",
    },
    {
      name: "Beefsteak",
      price: "17$",
    },
    {
      name: "Napoleon",
      price: "7$",
    },
  ],
  waitors: [
    { name: "Alice", age: 22 },
    { name: "John", age: 24 },
  ],
  averageLunchPrice: "20$",
  openNow: true,
};

function isOpen(prop) {
  return !prop ? "Закрыто" : "Открыто";
}

console.log(isOpen(restorantData.openNow));

function isAverageLunchPriceTrue(fDish, sDish, average) {
  if (parseInt(fDish.price) + parseInt(sDish.price) < parseInt(average)) {
    console.log(parseInt(fDish.price));
    console.log(parseInt(sDish.price));
    console.log(parseInt(average));
    return "Цена ниже средней";
  } else {
    return "Цена выше средней";
  }
}

console.log(
  isAverageLunchPriceTrue(
    restorantData.menu[3],
    restorantData.menu[1],
    restorantData.averageLunchPrice
  )
);

function transferWaitors(data) {
  const copy = Object.assign({}, data);

  /* copy.waitors = [{ name: "Mike", age: 32 }]; */
  copy.waitors = [...copy.waitors];
  /* copy.waitors = copy.waitors.slice(); */
  copy.waitors[0] = { name: "Mike", age: 32 };
  return copy;
}

console.log(transferWaitors(restorantData));
console.log(restorantData);
