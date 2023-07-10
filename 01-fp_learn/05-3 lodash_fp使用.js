// lodash 的 fp模块提供了 对函数式编程友好的函数方法
// 这些函数的特点是 不可变、auto-curried、fn-first & data-last

const _ = require("lodash");
const fp = require("lodash/fp");

console.log(fp.split(" ", "Hello World"));
console.log(fp.split(" ")("Hello World"));

const f2 = fp.flowRight(fp.join("-"), fp.map(_.toLower), fp.split(" "));

console.log("res是:", f2("NEVER SAY DIE"));
