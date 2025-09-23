"use strict";

const btnPhone = document.querySelector("#iphone"),
  btnMacbook = document.querySelector("#macbook"),
  images = document.querySelectorAll("img");

let phoneAnimation;
let macAnimation;

btnPhone.addEventListener("click", () => {
  if (!phoneAnimation) {
    phoneAnimation = images[0].animate(
      [
        {
          transform: "translateY(0) rotate(0) scale(1)",
          filter: "opacity(100%)",
        },
        {
          transform: "translateY(100px) rotate(180deg) scale(1.5)",
          filter: "opacity(50%)",
        },
        {
          transform: "translateY(-100px) rotate(270deg) scale(1.25)",
          filter: "opacity(75%)",
        },
        {
          transform: "translateY(0) rotate(360deg) scale(1)",
          filter: "opacity(100%)",
        },
      ],
      { duration: 700, iterations: Infinity }
    );
  } else if (phoneAnimation.playState === "pause") {
    phoneAnimation.play();
  } else {
    phoneAnimation.pause();
  }
});

btnMacbook.addEventListener("focus", () => {
  if (!macAnimation) {
    macAnimation = images[1].animate(
      [
        {
          transform: "translateX(0) rotate(0) scale(1)",
        },
        {
          transform: "translateX(100px) rotate(180deg) scale(1.25)",
        },
        {
          transform: "translateX(-100px) rotate(-180deg) scale(1.25)",
        },
        {
          transform: "translateX(0) rotate(0deg) scale(1)",
        },
      ],
      { duration: 1000, iterations: Infinity }
    );
  } else if (macAnimation.playState === "pause") {
    macAnimation.play();
  } else {
    macAnimation.pause();
  }
});
