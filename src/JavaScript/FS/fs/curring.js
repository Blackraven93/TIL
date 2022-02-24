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

const gugudan = (x) => {
  return (y) => {
    return `${x} * ${y} = ${x * y}`
  }
}

const TwoStepGuGuDan = gugudan(2)

for (let i = 1; i < 10; i++) {
  console.log(TwoStepGuGuDan(i))
}

const loggerHelper = (mode, initialMessage, errorMessage, lineNo) => {
  if (mode === "DEBUG") {
    console.debug(initialMessage, errorMessage + "at line: " + lineNo)
  } else if (mode === "ERROR") {
    console.error(initialMessage, errorMessage + "at line: " + lineNo)
  } else if (mode === "WARN") {
    console.warn(initialMessage, errorMessage + "at line: " + lineNo)
  } else {
    throw "Wrong mode"
  }
}

let curry2 = (fn) => {
  if (typeof fn !== 'function') {
    throw Error('No function provided');
  }

  return function curriedFn(...args) {
    if (args.length < fn.length) {
      return function () {
        return curriedFn.apply(null, args.concat([].slice.call(arguments)))
      }
    }
    return fn.apply(null, args)
  }
}

const multiply = (x, y, z) => x * y * z

console.log(curry2(multiply)(1, 2, 3))
console.log(curry2(multiply)(10)(5)(2))

let errorLogger = curry2(loggerHelper)("ERROR")("Error At State.js");
let debugLogger = curry2(loggerHelper)("DEBUG")("Debug At State.js");
let warnLogger = curry2(loggerHelper)("WARN")("Warn At State.js");

errorLogger("Error message", 31)

// 일부 파라미터의 중복일 때 커리사용

let match = curry2((expr, str) => str.match(expr))

let hasNumber = match(/[0-9]+/)
let filter = curry2((f, arr) => arr.filter(f))
let findNumbersInArray = filter(hasNumber)

console.log(findNumbersInArray(["js", "number1"]))

let map = curry((f, arr) => arr.map(f));
let squareAll = map((x) => x * x)
console.log(squareAll([2, 5, 4]))

const partial = function (fn, ...partialArgs) {
  let args = partialArgs;
  return function (...fullArguments) {
    let arg = 0;
    for (let i = 0; i < args.length && arg < fullArguments.length; i++) {
      if (args[i] === undefined) {
        args[i] = fullArguments[arg++]
      }
    }
    return fn.apply(null, args);
  };
};

let delayTenMs = partial(setTimeout, undefined, 10);

delayTenMs(() => console.log("Do it !"))

let prettyPrintJson = partial(JSON.stringify, undefined, null, 2)
console.log(prettyPrintJson({ name: "raven", color: "black" }))
console.log(prettyPrintJson({ name: "raven", color: "black" }))