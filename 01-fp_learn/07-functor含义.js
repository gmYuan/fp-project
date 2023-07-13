// Functor (函子)

/***
 * 1 为什么要学函子:
 *   学习在函数式编程中
 *     - 如何把副作用控制在可控的范围内
 *     - 异常处理
 *     - 异步操作等
 *
 * 2 什么是 Functor
 *   - 容器：包含值和 值的变形关系(这个变形关系就是函数)
 *   - 函子：是一个特殊的容器，通过一个普通的对象来实现，
 *          该对象具有 map方法，map方法可以 运行一个函数对值进行处理(变形关系)
 * 
 * 3 小结
 *   - 函数式编程的运算 不直接操作值，而是由函子完成
 *   - 函子就是一个实现了 map方法的对象
 *   - 我们可以把函子想象成一个盒子，这个盒子里封装了一个值
 *   - 想要处理盒子中的值，我们需要给盒子的 map方法传递一个处理值的函数（纯函数），
 *     由这个函数来对值进行处理
 * 
 *   - 最终 map方法返回一个包含新值的盒子（函子）
 *  
 */

// 例1

// 实现方法1
// class Container {
//   constructor(value) {
//     this._value = value;
//   }

//   map(fn) {
//     return new Container(fn(this._value));
//   }
// }

// let res = new Container(5).map((x) => x + 1).map((x) => x * x);
// console.log('1新结果是', res);

// 实现方法2

// 一个容器，包裹一个值
class Container {
  // of 静态方法，可以省略new关键字 创建对象
  static of(value) {
    return new Container(value);
  }
  // 构造函数
  constructor(value) {
    this._value = value;
  }
  // map方法：传入变形关系，将容器里的每一个值 映射到另一个容器
  map(fn) {
    return Container.of(fn(this._value));
  }
}

let res = Container.of(5)
  .map((x) => x + 2)
  .map((x) => x * x);

console.log('2新结果是', res);


// 例3 null undefined 的问题
// 如果传入了空值(副作用)

Container.of(null).map((x) => x.toUpperCase()); 
// TypeError: Cannot read property 'toUpperCase' of null
