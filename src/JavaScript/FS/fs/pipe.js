import { reduce } from "../util/array.js";
import { splitInfoSpaces, count, oddOrEven } from "./composition.js";

export const pipe = (...fns) => value => reduce(fns, (acc, fn) => fn(acc), value)

const oddOrEvenWords = pipe( splitInfoSpaces, count, oddOrEven );

console.log(oddOrEvenWords('이번 단어는 짝수일까요? 홀수일까요?'))

const double = (n) => n * 2;
const increment = (n) => n + 1;
const ntimes = (n) => n * n;

const pipe2 = (arg, ...fns)  => fns.reduce((v, fn) => fn(v), arg);

const result = pipe2(
  5,
  double,
  increment,
  ntimes
);
console.log(result)

/**
 * function* filter(src, op) {
  for (const value of src) {
    if (op(value)) {
      yield value;
    }
  }
} <== 여기서

function filter(op) {
  return function* (src) {
    for (const value of src) {
      if (op(value)) {
        yield value;
      }
    }
  };
}
  이렇게 수정
 */
