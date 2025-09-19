"use strict";

// 1
const films = [
  {
    name: "Titanic",
    rating: 9,
  },
  {
    name: "Die hard 5",
    rating: 5,
  },
  {
    name: "Matrix",
    rating: 8,
  },
  {
    name: "Some bad film",
    rating: 4,
  },
];

function showGoodFilms(list) {
  return list.filter((film) => film.rating >= 8);
}

function showListOfFilms(list) {
  return list.map((film) => film.name).join(", ");
}

function setFilmsIds(list) {
  return list.map((film, i) => {
    film.id = ++i;
    return film;
  });
}

console.log(showGoodFilms(films));
console.log(showListOfFilms(films));
console.log(setFilmsIds(films));

const tranformedArray = setFilmsIds(films);

function checkFilms(list) {
  return list.every((film) => film.id);
}

console.log(checkFilms(tranformedArray));

// 2
const funds = [
  { amount: -1400 },
  { amount: 2400 },
  { amount: -1000 },
  { amount: 500 },
  { amount: 10400 },
  { amount: -11400 },
];

const getPositiveIncomeAmount = (list) => {
  return list
    .filter((num) => num.amount > 0)
    .reduce((sum, current) => sum + current.amount, 0);
};

const getTotalIncomeAmount = (list) => {
  return list.some((num) => num.amount < 0)
    ? list.reduce((sum, current) => sum + current.amount, 0)
    : getPositiveIncomeAmount(list);
};

console.log(getPositiveIncomeAmount(funds));
console.log(getTotalIncomeAmount(funds));

const arr = [
  {
    name: "Alex",
    salary: 500,
  },
  {
    name: "Ann",
    salary: 1500,
  },
  {
    name: "John",
    salary: 2500,
  },
];

const result = arr
  .map((item) => Object.entries(item)[1][1])
  .reduce((sum, curr) => sum + curr);
console.log(result);
