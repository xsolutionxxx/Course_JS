/* "use strict"; */

// Global variables
/* function func() {
  smth = "string";
}

// те саме що:
function func() {
  window.smth = "string";
} */

// Timers
/* const someRes = getData();
const node = document.querySelector(".class");

setInterval(function () {
  if (node) {
    node.innerHTML = someRes;
  }
}, 1000); */

// Event listeners

// Closure
/* function outer() {
  const potentiallyHugeArray = [];
  return function inner() {
    potentiallyHugeArray.push("Hello");
    console.log("Hello!!");
  };
}

const sayHello = outer(); */

// detached DOM elements

function createElement() {
  const div = document.createElement("div");
  div.id = "test";
  return div; // decision (rewrite this line) -> const testDiv = createElement();
}

const testDiv = createElement(); // memory leak

document.body.append(testDiv);

function deleteElement() {
  document.body.remove(document.getElementById("test"));
}

deleteElement();
