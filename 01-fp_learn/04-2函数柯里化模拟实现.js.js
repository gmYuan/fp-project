// 模拟实现 lodash 中的 curry 方法
function getSum (a, b, c) {
  return a + b + c
}

const curried = curry(getSum)
// console.log(curried(1, 2, 3))
// console.log(curried(1)(2, 3))
// console.log(curried(1, 2)(3))
console.log(curried(1)(3)(2))


function curry (func) {
  // S1 返回一个curried函数，用于支持后续参数分批传入
  return function curriedFn(...args) {
    // 判断实参和形参的个数
    if (args.length < func.length) {
      // S2 返回一个匿名函数A，这个函数用于给剩余参数传入调用
      return function () {
        // S3 当A真正被调用后，会拼接每次调用curriedFn的实参 + 判断参数长度
        // 如果实参数量 > 形参，就会真正调用func()
        return curriedFn(...args.concat(Array.from(arguments)))
      }
    }
    return func(...args)
  }
}