"use strict";

// 1

/* function calculateVolumeAndArea(edge) {
  if (typeof edge !== "number" || edge < 1) return "Error";

  let volume = edge ** 3;
  let area = 6 * edge ** 2;

  return `Volume: ${volume} cm, area: ${area} cm`;
}

console.log(calculateVolumeAndArea(20)); */

// 2

/* const getCoupeNumber = (coupeNumber) => {
  if (
    typeof coupeNumber !== "number" ||
    coupeNumber < 0 ||
    coupeNumber !== parseInt(coupeNumber)
  ) {
    return "Ошибка. Проверьте правильность введенного номера места";
  } else if (coupeNumber > 36 || coupeNumber === 0) {
    return "Таких мест в вагоне не существует";
  } else {
    return Math.ceil(coupeNumber / 4);
  }
};

console.log(getCoupeNumber(37)); */

// 3

function getTimeFromMinutes(minutes) {
  /*   if (isNaN(minutes) || minutes < 0) {
    return "Ошибка, проверьте данные";
  }

  let hrs = Math.floor(minutes / 60);
  let min = minutes % 60; */
  /* return `Это ${hrs} час${
    hrs === 1 ? "" : hrs > 1 && hrs < 5 ? "а" : "ов"
  } и ${min} минут${min === 1 ? "a" : min > 1 && min < 5 ? "ы" : ""}`; */
  /*   let endHrs = "";
  let endMin = min.toString().slice(-1);

  switch (hrs) {
    case 1:
      break;
    case 2:
    case 3:
    case 4:
      endHrs += "a";
      break;
    default:
      endHrs += "ов";
  }

  return `Это ${hrs} час${endHrs} и ${min} минут${
    endMin == 1 && min != 11
      ? "а"
      : endMin > 1 && endMin < 5 && min != 12 && min != 13 && min != 14
      ? "ы"
      : ""
  }`; */
}

/* console.log(getTimeFromMinutes(642)); */

// 4

const findMaxNumber = (one, two, three, four) => {
  /*   if (
    typeof one !== "number" ||
    typeof two !== "number" ||
    typeof three !== "number" ||
    typeof four !== "number"
  ) {
    return 0;
  } */
  /*   if (one > two && three > four) {
    if (one > three) {
      return one;
    }
    return three;
  } else {
    if (two > three && two > four) {
      return two;
    } else if (three > four) {
      return three;
    }
    return four;
  } */
  /* return Math.max(one, two, three, four); */
};

/* console.log(findMaxNumber(22, 14, 12, 1.3)); */

// 5

const fib = function (times) {
  let result = "",
    firstNum = 0,
    secondNum = 1;

  if (times !== parseInt(times) || times < 1) {
    return result;
  }

  /* else if (times == 1) {
    return (result += firstNum);
  } else if (times == 2) {
    return (result += `${firstNum} ${secondNum}`);
  } else {
    result += `${firstNum} ${secondNum}`; } */

  for (let i = 1; i <= times; i++) {
    if (i === times) {
      result += `${firstNum}`;
    } else {
      result += ` ${firstNum}`;
    }

    let temporaryNum = firstNum + secondNum;

    firstNum = secondNum;
    secondNum = temporaryNum;
  }

  return result;
};

console.log(fib(19));
