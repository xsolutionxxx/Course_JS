"use strict";

class Rectangle {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }

  calcArea() {
    return this.height * this.width;
  }
}

const square = new Rectangle(10, 10);
const long = new Rectangle(20, 100);

console.log(square.calcArea());
console.log(long.calcArea());

class ColoredRectangleWithText extends Rectangle {
  constructor(height, width, text, bgColor) {
    super(height, width);
    this.text = text;
    this.bgColor = bgColor;
  }

  showMyProps() {
    console.log(`Text: ${this.text}, color: ${this.bgColor}`);
  }
}

const div = new ColoredRectangleWithText(25, 10, "Hello", "red");

div.showMyProps();
console.log(div.calcArea());
