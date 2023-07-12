/**
 * point free含义
 * 我们可以把 数据处理的过程 定义成与数据无关的合成运算，不需要用到代表数据的那个参数，
 *   只要把简单的运算步骤合成到一起，在使用这种模式之前，需要定义一些辅助的基本运算函数
 * 即：
 *   不需要 指明处理的数据
 *   只需要 合成运算过程
 *   需要定义一些辅助的基本运算函数
 * 
 *  */ 


// 例1
// Hello     World ==> hello_world
const fp = require("lodash/fp");

const f = fp.flowRight(fp.replace(/\s+/g, "_"), fp.toLower);

console.log(f("Hello     World"));

// 例2
// 把一个字符串中的首字母提取并转换成大写, 使用. 作为分隔符
// world wild web ==> W. W. W
const fp = require("lodash/fp");

// const firstLetterToUpper = fp.flowRight(fp.join('. '), fp.map(fp.first), fp.map(fp.toUpper), fp.split(' '))
const firstLetterToUpper = fp.flowRight(
  fp.join(". "),
  fp.map(fp.flowRight(fp.first, fp.toUpper)),
  fp.split(" ")
);

console.log(firstLetterToUpper("world wild web"));
