// 函数组合调试

const _ = require('lodash')

// 示例1  NEVER SAY DIE  --> never-say-die

const trace = _.curry((tag, val) =>  {
  console.log(tag, val)
  return val
})

const toSplit = _.curry((sep, str)=> _.split(str, sep))

// const toLower = str => _.toLower(str)
const toMap = _.curry((fn, list) => _.map(list, fn))

const toJoin = _.curry((sep, list) => _.join(list, sep))

// const f1 = _.flowRight(toJoin('-'), toLower, toSplit(' '))
// res是 n-e-v-e-r-,-s-a-y-,-d-i-e

const f1 = _.flowRight(
  toJoin('-'), 
  trace('toMap后值是'), 
  toMap(_.toLower),   //toLower
  trace('toSplit后值是'), 
  toSplit(' ')
)

console.log('res是', f1('NEVER SAY DIE') )
