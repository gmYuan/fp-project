/**
1 纯函数概念：
  - 相同的输入永远会得到相同的输出
  - 而且没有任何 可观察的副作用
  - 纯函数就类似数学中的函数(用来描述输入和输出之间的关系)
*/


// 例1
// 数组的 slice 和 splice 分别是：纯函数和不纯的函数
// slice 返回数组中的指定部分，不会改变原数组
// splice 对数组进行操作返回该数组，会改变原数组

let array = [1, 2, 3, 4, 5]
// 纯函数
// console.log(array.slice(0, 3))
// console.log(array.slice(0, 3))
// console.log(array.slice(0, 3))

// 不纯的函数
// console.log(array.splice(0, 3))
// console.log(array.splice(0, 3))
// console.log(array.splice(0, 3))



/**
 * 2 纯函数的好处:
 *   - 可缓存: 因为纯函数对相同输入始终有相同结果，所以可以把纯函数的结果缓存起来
 *   - 可测试: 纯函数便于进行单元测试
 *   - 并行处理: 纯函数不需要访问共享的内存数据，所以在并行环境下可以任意运行纯函数(Web Worker)
 */

// 例2 记忆函数
// const _ = require('lodash')

function getArea (r) {
  console.log('r1是--', r)
  return Math.PI * r * r
}
// let getAreaWithMemory = _.memoize(getArea)
// console.log(getAreaWithMemory(4))
// console.log(getAreaWithMemory(4))
// console.log(getAreaWithMemory(4))

// 模拟 memoize 方法的实现
function memoize (f) {
  let cache = {}
  return function () {
    let key = JSON.stringify(arguments)
    cache[key] = cache[key] || f.apply(f, arguments)
    return cache[key]
  }
}

let getAreaWithMemory = memoize(getArea)
console.log(getAreaWithMemory(4))
console.log(getAreaWithMemory(4))
console.log(getAreaWithMemory(4))