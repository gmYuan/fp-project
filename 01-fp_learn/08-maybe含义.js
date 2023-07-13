/**
 * MayBe 函子
 * 在编程过程中可能会遇到很多错误，需要对这些错误做相应的处理
 * MayBe函子的作用就是 可以对外部的空值情况做处理（控制副作用 在允许的范围）
 *  */

class MayBe {
  static of(value) {
    return new MayBe(value);
  }

  constructor(value) {
    this._value = value;
  }

  // 如果对空值变形的话, 直接返回 值为null的函子
  map(fn) {
    return this.isNothing() ? MayBe.of(null) : MayBe.of(fn(this._value));
  }

  isNothing() {
    return this._value === null || this._value === undefined;
  }
}

let r1 = MayBe.of("Hello World").map((x) => x.toUpperCase());
console.log("r1是", r1);

let r2 = MayBe.of(null).map((x) => x.toUpperCase());
console.log("r2是", r2);


// 在 MayBe函子中，我们很难确认是哪一步产生的 空值问题
let r3 = MayBe.of("hello world")
  .map((x) => x.toUpperCase())
  .map((x) => null)
  .map((x) => x.split(" "));
console.log("r3是", r3);
