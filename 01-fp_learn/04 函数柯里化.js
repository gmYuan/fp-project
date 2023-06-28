/**
1 柯里化 (Currying)：
  - 当一个函数有多个参数的时候，先传递一部分参数调用它（这部分参数以后永远不变）
  - 然后返回一个新的函数接收剩余的参数，返回结果
*/


// 例1
// S1 带有硬编码的纯函数
// function checkAge (age) {
//   let min = 18
//   return age >= min
// }

// S2 普通的纯函数
// function checkAge (min, age) {
//   return age >= min
// }

// console.log(checkAge(18, 20))
// console.log(checkAge(18, 24))
// console.log(checkAge(22, 24))

// S3.1 函数的柯里化
// function checkAge (min) {
//   return function (age) {
//     return age >= min
//   }
// }

// S3.2 ES6 函数柯里化
let checkAge = min => (age => age >= min)

let checkAge18 = checkAge(18)
let checkAge20 = checkAge(20)
// console.log(checkAge18(20))
// console.log(checkAge18(24))


// 例2  lodash 中的 curry 基本使用 
const _ = require('lodash')

function getSum (a, b, c) {
  return a + b + c
}

const curried = _.curry(getSum)
console.log(curried(1, 2, 3))
console.log(curried(1)(2, 3))
console.log(curried(1, 2)(3))