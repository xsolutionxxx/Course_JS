"use strict";

const box = document.getElementById("box");
const btns = document.getElementsByTagName("button");
const circels = document.getElementsByClassName("circle");
const hearts = document.querySelectorAll(".heart");
const oneHeart = document.querySelector(".heart");
const wrapper = document.querySelector(".wrapper");

/* console.dir(box); */

box.style.backgroundColor = "blue";
box.style.width = "600px";

box.style.cssText = "background-color: yellow; width: 20px;";

btns[1].style.borderRadius = "100%";

for (let i = 0; i < hearts.length; i++) {
  hearts[i].style.backgroundColor = "blue";
}

hearts.forEach((item) => {
  item.style.backgroundColor = "green";
});

const div = document.createElement("div");
const text = document.createTextNode("It's all");

div.classList.add("black");

wrapper.append(div);
/* wrapper.prepend(div);

hearts[1].after(div);
hearts[1].before(div);

circels[1].remove();

hearts[1].replaceWith(div); */

//Застарілі команди

/* document.body.appendChild(div);
wrapper.insertBefore(div, hearts[1]);
wrapper.removeChild(hearts[1]);
wrapper.replaceChild(circels[0], hearts[2]); */

div.innerHTML = "<h1>HEll</h1>";

/* div.textContent = "HElllo"; // працює тільки з текстом в ціляї безпеки */

div.insertAdjacentHTML("beforeend", "<h2>Helllllll</h2>");
