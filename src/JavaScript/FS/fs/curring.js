function variadic(a, ...variadic) {
  console.log(a);
  console.log(variadic)
}

variadic(1, 2, 3, 4)

const addCurried = x => y => x + y;

console.log(addCurried(5)(4))

const curry = (binaryFn) => {
  return function (firstArg) {
    return function (secondArg) {
      return binaryFn(firstArg, secondArg);
    }
  }
}

const add = (x, y) => x + y

let autoCurriedAdd = curry(add)
console.log(autoCurriedAdd(4)(2))