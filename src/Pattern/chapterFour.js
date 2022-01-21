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

var findNodes = function () {
  var i = 100000,
    nodes = [];

  while (i) {
    i -= 1;
    nodes.push(i);
  }

  return nodes;
};

console.log(findNodes());

var hide = function (nodes) {
  var i = 0,
    max = nodes.length;
  for (; i < max; i += 1) {
    nodes[i].style.display = "none";
  }
};

hide(findNodes());
