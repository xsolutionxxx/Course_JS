"use strict";

fetch("https://jsonplaceholder.typicode.com/todos/1") // GET
  .then((response) => response.json())
  .then((json) => console.log(json));

fetch("https://jsonplaceholder.typicode.com/posts", {
  // POST
  method: "POST",
  body: JSON.stringify({ name: "Alex" }),
  headers: {
    "Content-type": "application/json",
  },
})
  .then((response) => response.json())
  .then((json) => console.log(json));
