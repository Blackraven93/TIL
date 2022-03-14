import { reduce } from "../util/array.js";

const add = (a = 0, b = 0) => {
  return a + b;
}
const multiply = (a = 1, b = 1) => {
  return a * b;
}

console.log(multiply(add(4, 3), add(2, 5)))


const addAndSquare = (a = 0, b = 0) => {
  let num = a + b;
  num = num * num;
  return num;
}
console.log(addAndSquare(3, 3))


const square = (num) => num * num;

const addAndSquare2 = (a, b) => square(add(a, b));

console.log(addAndSquare2(4, 5))

// const compose = (func1, func2) => val => func2(func1(val));

// const compute = compose(add, multiply);

// console.log(compute(5))

// const compose2 = (...funcs) => (initialVal) => funcs.reduceRight((val, fn) => fn(val), initialVal);

// const pipe = (...funcs) => (initialVal) => funcs.reduce((val, fn) => fn(val), initialVal);

const compose = (a, b) => (c) => a(b(c))
// 두 함수 a, b를 받아 하나의 인자c를 갖는 함수를 반환

const double = (num) => num ** 2;
console.log('compose', compose(square, double)(5))

// let data = parseFloat('3.56')
// let number = Math.round(data)
// console.log(number)

let number = compose(Math.round, parseFloat)
// 넘버가 호출 되기 전에는 실행 되지 않는다.
console.log(number('3.56'))

const splitInfoSpaces = (str) => str.split(' ');
const count = array => array.length;

const countWords = compose(count, splitInfoSpaces)
const str = '공백별 단어 갯수는??'
console.log(countWords(str))


const multipleCompose = (...fns) => (value) => reduce(fns.reverse(), (acc, fn) => fn(acc), value);
console.log(reduce([1,2,3], (acc, it) => it + acc, 0))

const oddOrEven = (ip) => ip % 2 ? 'odd' : 'even';

const oddOrEvenWords = multipleCompose(oddOrEven, count, splitInfoSpaces);
console.log(oddOrEvenWords('안녕하세요 만나서 반갑습니다 글자 갯수가 어떻게 될까요?'))