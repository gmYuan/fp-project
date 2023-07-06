// 函数组合演示
/**
 * 组合式函数含义：
    - 函数组合 可以把【细粒度的函数重新组合】==> 生成一个新的函数
    - 如果一个函数要经过多个函数处理 才能得到最终值，这个时候可以把中间过程的函数合并成一个函数
    - 函数就像是数据的管道，函数组合就是把这些管道连接起来，让数据穿过多个管道形成最终结果
    - 函数组合默认是从右到左执行
 * 
 */


// 1 函数组合示例1
function compose (f, g) {
  return function (value) {
    return f(g(value))         
  }
}
// 对应g
function reverse (array) {
  return array.reverse()
}
// 对应f
function first (array) {
  return array[0]
}
// 组合函数
const last = compose(first, reverse)
console.log('last--', last([1, 2, 3, 4]))


// 2 lodash中的函数组合的方法==>  _.flowRight()
const _ = require('lodash')
const reverse2 = arr => arr.reverse()
const first2 = arr => arr[0]
const toUpper = s => s.toUpperCase()

const f = _.flowRight(toUpper, first2, reverse2)
console.log('flowRight--', f(['one', 'two', 'three']))