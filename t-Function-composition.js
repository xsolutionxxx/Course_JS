"use strict";

// 1
const multiply20 = (price) => price * 20;
const divide100 = (price) => price / 100;
const normalizePrice = (price) => price.toFixed(2);

const compose =
  (...funcs) =>
  (price) => {
    let arrWithFunc = funcs;
    let result = price;

    for (let i = arrWithFunc.length; i > 0; i--) {
      result = arrWithFunc[i - 1](result);
    }

    return result;
  };

console.log(normalizePrice(divide100(multiply20(220.731416))));

const discount = compose(normalizePrice, divide100, multiply20);
console.log(discount(220.731416));

// 2
const add1 = function (a) {
  return a + 1;
};
const addAll3 = function (a, b, c, d, f, g) {
  return a + b + c + d + f + g;
};

const composeWithArgs =
  (...funcs) =>
  (...args) => {
    let arrWithFuncs = funcs;
    let arrWithArgs = args;
    let result;

    for (let i = arrWithFuncs.length; i > 0; i--) {
      if (i === arrWithFuncs.length) {
        result = arrWithFuncs[i - 1](...arrWithArgs);
        continue;
      }

      result = arrWithFuncs[i - 1](result);

      return result;
    }
  };
console.log(composeWithArgs(add1, addAll3)(1, 2, 3, 4, 5, 6));

// Short decision

/* const compose =
  (...fns) =>
  (x) =>
    fns.reduceRight((res, fn) => fn(res), x);

const composeWithArgs = (...fns) =>
  fns.reduceRight(
    (f, g) =>
      (...args) =>
        g(f(...args))
  ); */
