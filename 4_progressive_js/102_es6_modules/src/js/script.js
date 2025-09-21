import { one, two } from "./main.js";
import { one as first } from "./main.js";
import * as data from "./main.js";

import sayHi from "./main.js";

// import { default as sayHi } from "./main"; - так виглядає дефолтний експорт під капотом, по суті іменований експорт

console.log(`${one} and ${two}`);
console.log(`${first}`);
console.log(`${data.two}`);
data.sayHi();
sayHi();
