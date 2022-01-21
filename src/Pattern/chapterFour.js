// 기명 함수 표현식
var add = function add(a, b) {
  return a + b;
};

// 함수 표현식(또는 익명 함수)
var add2 = function (a, b) {
  return a + b;
};

// 함수 선언문
function add3(a, b) {
  return a + b;
}

console.log(add2.__proto__);
console.log(add2.constructor);
console.log(add3.__proto__);
console.log(add3.constructor === add2.constructor);
console.log(add2.constructor === Function);
console.log(add2.prototype.constructor === add2);
console.log(add3.__proto__ === Function.prototype);

// name 프로퍼티
function bird() {}
var bird2 = function bird2() {};
var bird3 = function () {}; // 함수 표현식의 대안 var bird = () => {}

console.log(bird.name);
console.log(bird2.name);
console.log(bird3.name);

// 책이랑 다르게 전부다 나온다.
// add2 bird2 즉 익명함수 표현식을 사용할 것!! (호이스팅, 명확한 의미 전달)
// 함수 선언문 호이스팅 O
// 함수 표현식 호이스팅 X

function bar() {
  return "global bar";
}

function hoistMe() {
  console.log(typeof bar);
  // bar() Error

  var bar = function () {
    return "local bar";
  };
}

console.log(bar());
console.log(hoistMe()); // undefined Error가 나지 않는다 왜? 호이스팅 때문에

// 콜백

// 콜백 없이 시작

// var findNodes = function () {
//   var i = 100000,
//     nodes = [];

//   while (i) {
//     i -= 1;
//     nodes.push(i);
//   }

//   return nodes;
// };

// console.log(findNodes());

// var hide = function (nodes) {
//   var i = 0,
//     max = nodes.length;
//   for (; i < max; i += 1) {
//     nodes[i].style.display = "none";
//   }
// };

// hide(findNodes());

var setup = function (f) {
  return function (a, b) {
    return f(a, b);
  };
};

var add = function (a, b) {
  return a + b;
};

console.log(setup(add)(2, 6));

var counterFn = function () {
  var counter = 0;
  return function () {
    return (counter += 1);
  };
};

var next = counterFn();

// console.log(counterFn()()); 1만 나옴
console.log(next());
console.log(next());
console.log(next()); // 전역이 끝날 때 까지는 클로저가 붙잡고 있다 (클로저)

// 함수가 초기화 작업을 할 때 유용
// 단점은 재정의한 순간 원본 프로퍼티들이 모두 사라짐
var scareMe = function () {
  console.log("Woo");
  scareMe = function () {
    console.log("Hoo!");
  };
};

scareMe(); // Woo가 실행되면서
scareMe(); // scareMe가 재정의 됨

// 재 정의하고 나서 밑 처럼 사용하여 초기화 작업을 진행한다.
// scareMe.prototype = "property";
// var prank = scareMe;
// var spooky = {
//   boo: scareMe,
// };

// prank();
// prank();

// scareMe();
// scareMe();

// prank();

// 즉시 실행 함수 (IIFE)
(function () {
  console.log("This is IIFE");
})();

// 페이지가 로드가 완료된 후
// 이벤트 핸들러를 등록하거나 객체를 생성하는 등의 초기 설정 작업에 사용
// 모든 변수를 지역으로 제한

(function (who, when) {
  console.log(`I met ${who} on ${when}`);
})("Black Raven", new Date().getDate());

(function (global) {
  console.log(global);
})(this);

var result = (function () {
  return 2 + 2;
})();

console.log(result);

var getResult = (function () {
  var res = 2 + 2;
  return function () {
    return res;
  };
})();

console.log(getResult()); // 클로저로 변수 res가 살아 있음 (즉시실행함수 가능)

var o = {
  message: (function () {
    var who = "me",
      what = "call";
    return `${what} ${who}`;
  })(),
  getMsg: function () {
    return this.message;
  },
};

console.log(o.getMsg());
console.log(o.message); // 문자열 프로퍼티지만 값을 정의하려면 함수가 필요
// 따라서 이때 즉시실행 함수를 사용

// 개별 기능을 독자적인 모듈로 감쌀 수도 있다.

// 메모이제이션(Memoization) 패턴
// 함수내에 불필요한 작업을 피하기 위해 이전에 연산된 결과를 저장

// 패턴

function sqrt(arg) {
  return Math.sqrt(arg);
}
console.log(sqrt(4)); // 2
console.log(sqrt(9)); // 3

function sqrt(arg) {
  // sqrt 함수에 cache 라는 프로퍼티가 없다면 빈 객체를 지정해 준다
  if (!sqrt.cache) {
    sqrt.cache = {};
  }
  // sqrt 함수의 cache 라는 프로퍼티의 [arg] 값이 없다면 (메모이제이션된 값이 없다면)
  if (!sqrt.cache[arg]) {
    // 해당 값을 기억시켜준다
    return (sqrt.cache[arg] = Math.sqrt(arg));
  }
  // sqrt 함수의 cache 라는 프로퍼티의 [arg] 값이 있다면 (메모이제이션된 값이 있다면)
  // 연산하지 않고 해당 값을 바로 리턴한다
  return sqrt.cache[arg];
}

console.log(sqrt(5));

// 설정 객체 패턴
// 좀더 깨끗한 API를 제공하는 방법

var conf = {
  username: "batman",
  first: "Black",
  last: "Raven",
};

function addPerson(obj) {
  return obj;
}

console.log(addPerson(conf));
/**
 * 장점은??
 * 1. 매개변수와 순서를 기억할 필요가 없다.
 * 2. 선택적인 매개변수를 안전하게 생략할 수 있다.
 * 3. 읽기 쉽고 유지보수하기 편하다.
 * 4. 매개변수를 추가하거나 제거하기가 편하다.
 */

/**
 * 단점은??
 * 1. 매개변수의 이름을 기억해야 한다.
 * 2. 프로퍼티 이름은 압축되지 않는다.
 */

// 커리와 커링
function curry(x, y) {
  var oldx = x,
    oldy = y;
  if (typeof oldy === "undefined") {
    return function (newy) {
      return oldx + newy;
    };
  }
  return x + y;
}
console.log(curry(2)(6));

function curryFn(fn) {
  var slice = Array.prototype.slice,
    stored_args = slice.call(arguments, 1);

  return function () {
    var new_args = slice.call(arguments),
      args = stored_args.concat(new_args);
    return fn.apply(null, args);
  };
}

var newAdd = curryFn(curry, 2);
console.log(newAdd(55));

// 커링을 언제 사용할까?
// 대부분의 매개변수가 항상 비슷하다면
