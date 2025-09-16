"use strict";

// window.localStorage;

/* localStorage.setItem("number", 5); // щоб записати новий ключ
console.log(localStorage.getItem("number")); // щоб отримати дані
localStorage.removeItem("number"); // щоб видалити дані
localStorage.clear(); // щоб очистити локальний сховок */

const checkbox = document.querySelector("#checkbox"),
  form = document.querySelector("form"),
  change = document.querySelector("#color");

if (localStorage.getItem("isChecked")) {
  checkbox.checked = true;
}

if (localStorage.getItem("bg") == "changed") {
  form.style.backgroundColor = "red";
}

checkbox.addEventListener("change", () => {
  localStorage.setItem("isChecked", true);
});

change.addEventListener("click", () => {
  if (localStorage.getItem("bg") == "changed") {
    localStorage.removeItem("bg");
    form.style.backgroundColor = "#fff";
  } else {
    localStorage.setItem("bg", "changed");
    form.style.backgroundColor = "red";
  }
});

const person = {
  name: "Alex",
  age: 25,
};

const serializedPersone = JSON.stringify(person);
localStorage.setItem("alex", serializedPersone);

console.log(JSON.parse(localStorage.getItem("alex")));
