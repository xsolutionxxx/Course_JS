"use strict";

const boxesQuery = document.querySelectorAll(".box"),
  boxesGet = document.getElementsByClassName("box");

/* boxesQuery[0].remove();
boxesGet[0].remove();

for (let i = 0; i < 5; i++) {
  const div = document.createElement("div");
  div.classList.add("box");
  // document.body.append(div);
  boxesGet[boxesGet.length] = div; // видасть помилку живі колекції не можна змінювати / добавляти щось не можна
} */

boxesQuery.forEach((box) => {
  if (box.matches(".this")) console.log(box);
});

console.log(boxesQuery[0].closest(".wrapper"));

// boxesQuery[0].remove();
// console.log(boxesQuery); // NodeList(3) [div.box, div.box, div.box]
// console.log(boxesGet); // HTMLCollection [div.box, div.box]

// console.log(document.body.children);

/* console.log(Array.from(boxesGet)); */
