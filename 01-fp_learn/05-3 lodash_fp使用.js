// lodash 的 fp模块提供了 对函数式编程友好的函数方法
// 这些函数的特点是 不可变、auto-curried、fn-first & data-last

const _ = require("lodash");
const fp = require("lodash/fp");

console.log(fp.split(" ", "Hello World"));
console.log(fp.split(" ")("Hello World"));

const f2 = fp.flowRight(fp.join("-"), fp.map(_.toLower), fp.split(" "));

console.log("res是:", f2("NEVER SAY DIE"));


// 例2: lodash 和 lodash/fp 模块中 map 方法的区别

console.log('普通map值是--', _.map(['23', '8', '10'], parseInt))
// parseInt('23', 0, array)
// parseInt('8', 1, array)
// parseInt('10', 2, array)

console.log('fp map值是--', fp.map(parseInt, ['23', '8', '10']))