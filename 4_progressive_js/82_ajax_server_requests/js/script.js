"use strict";

const inputUah = document.querySelector("#uah"),
  inputUsd = document.querySelector("#usd");

inputUah.addEventListener("input", () => {
  const requset = new XMLHttpRequest();

  requset.open("GET", "js/current.json");
  requset.setRequestHeader("Content-type", "application/json; charset=utf-8");
  requset.send();

  requset.addEventListener("load", () => {
    // "readystatechange"
    // if (requset.readyState === 4 && requset.status === 200) {
    if (requset.status === 200) {
      const data = JSON.parse(requset.response);
      inputUsd.value = (+inputUah.value / data.current.usd).toFixed(2);
    } else {
      inputUsd.value = "Somthing wrong";
    }
  });
});
