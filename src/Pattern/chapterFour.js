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
