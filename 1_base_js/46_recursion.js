"use strict";

/* function pow(a, b) {
  let result = 1;

  for (let i = 0; i < n; i++) {
    result *= a;
  }

  return result;
} */

function pow(a, b) {
  // b - глибина рекрсії
  if (b === 1) {
    // база
    return a; // база
  } else {
    return a * pow(a, b - 1); // (b - 1) - крок рекрсії
  }
}

pow(2, 1); //2
pow(2, 2); //4
pow(2, 3); //8
pow(2, 4); //16
console.log(pow(2, 10)); //1024

let students = {
  js: [
    {
      name: "John",
      progress: 100,
    },
    {
      name: "Ivan",
      progress: 60,
    },
  ],

  html: {
    basic: [
      {
        name: "Peter",
        progress: 20,
      },
      {
        name: "Ann",
        progress: 18,
      },
    ],

    pro: [
      {
        name: "Sam",
        progress: 10,
      },
    ],

    semi: {
      students: [
        {
          name: "Grisha",
          progress: 100,
        },
      ],
    },
  },
};

function getTotalProgressBtIteration(data) {
  let total = 0;
  let students = 0;

  for (let course of Object.values(data)) {
    if (Array.isArray(course)) {
      students += course.length;

      for (let i = 0; i < course.length; i++) {
        total += course[i].progress;
      }
    } else {
      for (let subCourse of Object.values(course)) {
        students += subCourse.length;

        for (let i = 0; i < subCourse.length; i++) {
          total += subCourse[i].progress;
        }
      }
    }
  }

  return total / students;
}

console.log(getTotalProgressBtIteration(students));

function getTotalProgressBtRecursion(data) {
  if (Array.isArray(data)) {
    let total = 0;

    for (let i = 0; i < data.length; i++) {
      total += data[i].progress;
    }

    return [total, data.length];
  } else {
    let total = [0, 0];

    for (let subData of Object.values(data)) {
      const subDataArr = getTotalProgressBtRecursion(subData);
      total[0] += subDataArr[0];
      total[1] += subDataArr[1];
    }

    return total;
  }
}

const result = getTotalProgressBtRecursion(students);

console.log(result[0] / result[1]);

const factorial = (number) => {
  if (typeof number !== "number" || !Number.isInteger(number)) {
    return "Error. Argument is not number or <= 0 or number is float!";
  }

  if (number >= 1) {
    return number * factorial(number - 1);
  } else {
    return 1;
  }

  //  return n ? n * factorial(n - 1) : 1;
};

console.log(factorial(5));
console.log(factorial(6));
console.log(factorial(11));

/* const copy = {};

function copyObj(obj, origObj) {
    if
}

copyObj(copy, students);
console.log(copy); */
