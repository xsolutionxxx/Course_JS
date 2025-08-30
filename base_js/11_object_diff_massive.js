const arr = ["a", "b", "c"];

arr[10] = "23455";

console.log(arr[10]);

console.log(arr);

const arrObj = {
  a: "a",
  1: "b",
  2: "c",
  abc: {
    df: [{}, {}],
    def: {},
  },
};

const b = "b";

arrObj[b] = "1234";
arrObj.b = {};
console.log(arrObj["b"]);
console.log(arrObj.b);

const obj = {
  Anna: 500,
  Alice: 800,
};
