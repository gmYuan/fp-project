/**
 * IO 函子
 *   - IO 函子中的 _value是一个函数，这里是把函数 作为值来处理
 *   - IO 函子可以把不纯的动作存储到_value 中，延迟执行这个不纯的操作(惰性执行)，
 *    包装当前的操作
 *   - 把不纯的操作交给调用者来处理
 */

const fp = require("lodash/fp");

class IO {
  static of(value) {
    return new IO(function () {
      return value;
    });
  }

  constructor(fn) {
    this._value = fn;
  }

  map(fn) {
    return new IO(fp.flowRight(fn, this._value));
  }
}

// 调用
let r1 = IO.of(process).map(p => p.execPath);
console.log('r1是', r1)
console.log('r1的value()执行结果是', r1._value());
