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

const compose = (func1, func2) => val => func2(func1(val));

const compute = compose(add, multiply);

console.log(compute(5))

const compose2 = (...funcs) => (initialVal) => funcs.reduceRight((val, fn) => fn(val), initialVal);

const pipe = (...funcs) => (initialVal) => funcs.reduce((val, fn) => fn(val), initialVal);
