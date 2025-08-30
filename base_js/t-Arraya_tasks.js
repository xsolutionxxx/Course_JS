"use strict";

const familyArr = ["peTer", "Ann", "alEx", "Linda"];

function showFamily(array) {
  if (array.length == 0) {
    return "Family empty";
  } else {
    let capitalize = "";
    array.forEach((item, i) => {
      if (typeof item === "string" && item.length !== 0) {
        capitalize += `${
          item.charAt(0).toUpperCase() + item.slice(1).toLowerCase()
        }${i === array.length - 1 ? "" : " "}`;
      }
    });
    return `Family have: ${capitalize}`;

    // 2 simpel solution
    /* return `Family have: ${array.join(" ")}`; */
  }
}

console.log(showFamily(familyArr));

// 2

const favoriteCities = ["hOnkoNg", "kIev", "ROme", "milANE", "DUbAI"];

const standardizeStrings = (arr) => {
  let result = "";

  arr.forEach((item, i) => {
    result += `${item.toLowerCase()}${i === arr.length - 1 ? "" : "\n"}`;
  });

  return result;
  /* return arr.join("\n").toLowerCase(); */
};

console.log(standardizeStrings(favoriteCities));

// 3

const someString = "This is some strange string";

function reverse(str) {
  if (typeof str !== "string" || str.length === 0) {
    return "Error";
  }

  let reverseArr = [];

  for (let i = 0; i < str.length; i++) {
    reverseArr[i] = str.slice(str.length - 1 - i, str.length - 1 - i + 1);
    /* reverseArr[str.length - 1 - i] = str.charAt(i); */
  }

  return reverseArr.join("");
}

console.log(reverse(someString));

// 4

const baseCurrencies = ["UAH", "USD"];
const additionalCurrencies = ["CNY"];

const allCurrencies = [...baseCurrencies, ...additionalCurrencies];

const availableCurr = function (validCurr, noMoreCurr) {
  if (validCurr.length === 0) {
    return "No available currencies";
  }

  let result = "";

  validCurr.forEach(function (item, i) {
    if (item === noMoreCurr) {
      validCurr.splice(i, i);
    } else {
      result += `${item}\n`;
    }
  });

  return result.length === 0
    ? "No available currencies"
    : `Available currencies:\n${result}`;

  /*   let str = "";
  validCurr.length === 0
    ? (str = "Нет доступных валют")
    : (str = "Доступные валюты:\n");

  validCurr.forEach(function (curr, i) {
    if (curr !== noMoreCurr) {
      str += `${curr}\n`;
    }
  });

  return str.length === 0
    ? "No available currencies"
    : `Available currencies:\n${str}`; */
};

console.log(availableCurr(allCurrencies, "CNY"));

const students = [
  "Peter",
  "Andrew",
  "ANn",
  "mark",
  "josh",
  "SaNDra",
  "Cris      ",
  "Bernard",
  "TakEsi",
  " sam",
  "Alex",
  "Nazar",
  "Nikata",
  "Zendaya",
];

const sortStudentsByGroups = (arr) => {
  let copyStudents = [...arr];
  let studentsGroups = [];
  let studentsWithGroup = copyStudents.length - (copyStudents.length % 3);
  let index = 0;

  copyStudents.forEach((item, i) => {
    let temporaryItem = item.trim();
    copyStudents[i] =
      temporaryItem.charAt(0).toUpperCase() +
      temporaryItem.slice(1).toLowerCase();
  });

  copyStudents.sort();

  for (let i = 1; i <= copyStudents.length; i++) {
    if (i % 3 === 0) {
      studentsGroups[index] = copyStudents.slice(i - 3, i);
      index++;
      if (i === copyStudents.length) {
        studentsGroups[index] = `Оставшиеся студенты: -`;
      }
    } else if (i - studentsWithGroup === 1) {
      let res = "";
      for (let j = studentsWithGroup; j < copyStudents.length; j++) {
        res += `${copyStudents[j]}${j + 1 == copyStudents.length ? "" : ", "}`;
      }
      studentsGroups[index] = `Оставшиеся студенты: ${res}`;
      break;
    }
  }

  return studentsGroups;
};

console.log(sortStudentsByGroups(students));
