"use strict";

const data = [
  {
    id: "box",
    tag: "div",
  },
  {
    id: "ss",
    tag: "nav",
  },
  {
    id: "circle",
    tag: "",
  },
];

try {
  data.forEach((blockObj, i) => {
    const block = document.createElement(blockObj.tag);

    // if (blockObj.id) throw "error";

    if (!blockObj.id) throw new SyntaxError(`id undefiend: ${i + 1}`);

    block.setAttribute("id", blockObj.id);
    document.body.append(block);
  });
} catch (e) {
  if (e.name === "SyntaxErrot") {
    // console.log(e.name);
    console.log(e.message);
    // console.log(e.stack);
  } else throw e;
}

/* const err = new SyntaxError("aksdkdfjcv");
console.log(err.name, err.message, err.stack); */
