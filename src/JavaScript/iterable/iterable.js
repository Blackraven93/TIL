const array = [1, 2, 3];

const iterator = array[Symbol.iterator]();

console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log("next" in iterator);

/**
 * Array
 * String
 * Map
 * Set
 * arguments
 * NodeList, HTMLCollection
 * 동적, 정적
 */

const iterable = [1, 2, 3, 4, 5];
const iter = iterable[Symbol.iterator]();

for (; ;) {
  const res = iter.next();

  if (res.done) break;

  const item = res.value;
  console.log(item);
}

const fibonacci = {
  [Symbol.iterator]() {
    let [pre, cur] = [0, 1];
    const max = 10;

    return {
      next() {
        [pre, cur] = [cur, pre + cur];

        return {
          value: cur,
          done: cur >= max,
        };
      },
    };
  },
};

for (const num of fibonacci) {
  console.log(`피보나치 수 : ${num}`);
}

console.log([...fibonacci]);
const [first, second, ...rest] = fibonacci;
console.log(first, second, rest);

const fibonacciFunc = function (max) {
  let [pre, cur] = [0, 1];
  return {
    [Symbol.iterator]() {
      return this;
    },

    next() {
      [pre, cur] = [cur, pre + cur];
      return { value: cur, done: cur >= max };
    },
  };
};
// iter는 이터러블이면서 이터레이터다.
let iterFibonacci = fibonacciFunc(10);
// iter는 이터러블이므로 for...of 문으로 순회할 수 있다.
for (const num of iterFibonacci) {
  console.log(`피보나치 함수 : ${num}`);
}
// iter는 이터러블이면서 이터레이터다.
iterFibonacci = fibonacciFunc(10);
// iter는 이터레이터이므로 이터레이션 리절트 객체를 반환하는 next 메서드를 소유한다.
console.log(iterFibonacci.next()); // { value: 1, done: false }
console.log(iterFibonacci.next()); // { value: 2, done: false }
console.log(iterFibonacci.next()); // { value: 3, done: false }
console.log(iterFibonacci.next()); // { value: 5, done: false }
console.log(iterFibonacci.next()); // { value: 8, done: false }
console.log(iterFibonacci.next()); // { value: 13, done: true }
console.log(iterFibonacci.next()); // { value: 13, done: true }

// 값들의 목록!
console.log(...[1, 2, 3, 4]);
console.log(..."raven");
console.log(
  ...new Map([
    ["a", 1],
    ["b", 2],
  ])
);
console.log(...new Set([1, 2, 3, 4]));

var arr2 = [1, 2].concat([3, 4]);
console.log(arr2); // [1, 2, 3, 4]

const arr3 = [...[1, 2], ...[3, 4]];
console.log(arr3); // [1, 2, 3, 4]

var origin = [1, 2];
var copy = origin.slice();
console.log(copy); // [1, 2]
console.log(copy === origin); // false

const origin2 = [1, 2];
const copy2 = [...origin];
console.log(copy2); // [1, 2]
console.log(copy2 === origin2); // false

// Array.from()

const arr4 = [1, 2, 3, 4];

const [one, two, three, four] = arr4;

console.log(one);
console.log(two);
console.log(three);
console.log(four);

const [a, b, c = 3] = [1, 2];
console.log(a, b, c); // 1 2 3
// 기본값보다 할당된 값이 우선한다.
const [e, f = 10, g = 3] = [1, 2];
console.log(e, f, g); // 1 2 3

const user = { firstName: "Ungmo", lastName: "Lee" };
const { lastName: ln, firstName: fn } = user;
console.log(fn, ln); // Ungmo Lee

function printTodo(todo) {
  console.log(
    `할일 ${todo.content}은 ${todo.completed ? "완료" : "비완료"} 상태입니다.`
  );
}
printTodo({ id: 1, content: "HTML", completed: true }); // 할일 HTML은 완료 상태입니다.

function printTodo2({ content, completed }) {
  console.log(`할일 ${content}은 ${completed ? "완료" : "비완료"} 상태입니다.`);
}

printTodo2({ id: 1, content: "HTML", completed: true });
