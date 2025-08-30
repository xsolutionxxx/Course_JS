"use strict";

const li = document.querySelectorAll("li");

console.log(li);

function loadScript(src) {
  const script = document.createElement("script");
  script.src = src;
  script.async = false;
  document.body.append(script);
}

loadScript("test.js");
loadScript("some.js");
