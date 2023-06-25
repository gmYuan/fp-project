
// 1 闭包含义：可以在另一个作用域中 调用一个函数的内部 并访问到该函数的作用域中的成员
// 2 本质：
// 函数在执行的时候 会放到一个执行栈上，当函数执行完毕之后会从执行栈上移除
// 但是堆上的作用域成员 因为被外部引用不能释放，因此内部函数 依然可以访问外部函数的成员


// 3 闭包举例
// getSalary(12000, 2000)
// getSalary(15000, 3000)
// getSalary(15000, 4000)

function makeSalary(base) {
  return function (performance) {
    return base + performance;
  };
}
let salaryLevel1 = makeSalary(12000);
let salaryLevel2 = makeSalary(15000);
console.log(salaryLevel1(2000));
console.log(salaryLevel2(3000));
