// 안티패턴 생성자를 사용하면 안되는 이유는?
var o = new Object();
var o2 = {};
console.log(o.constructor === Object); // true
console.log(o.constructor === Object.prototype.constructor); // true

var numObj = new Object(1);
console.log(numObj); // [Number: 1]
var numObj2 = 1;
console.log(numObj2); // 1

// Object 생성자로 호출했지만 constructor는 Number임;;
console.log(numObj.constructor === Number); // true
console.log(numObj2.constructor === Number); // true

function Bird(name) {
  this.name = name;
  this.fly = function () {
    return `I'am ${this.name} I can Fly!!`;
  };
  return this;
}

var raven = new Bird("Raven");
console.log(raven.fly());

/** 정리하면
 * var Bird = function (name) {
 *  var this = {};
 *  this.name = name;
 *  this.fly = function () {
 *          return `I'am ${this.name} I can Fly!!`
 *      }
 *
 *  암묵적으로 return 값은 this가 된다.
 *  return this;
 * }
 */

// 호출할 때마다 메모리에 새로운 함수가 생성 => 비효율 proto에 추가하는게 더 좋음
Bird.prototype.fly = function () {
  return `I'am ${this.name} I can Fly!!`;
};

var _this = {};
var $this = Object.create(Bird.prototype);

console.log(_this.constructor());
console.log($this.constructor());
console.log(Bird.prototype.constructor());

// 생성자의 반환 값
var Objectmaker = function () {
  // 생성자가 다른 객체를 대신 반환하기로 결정했기 때문에
  // 다음의 name 프로퍼티는 무시된다.
  this.name = "This is it";
  var that = {};
  that.name = "And that's that";
  return that;
};

var objectMaker = new Objectmaker();
console.log(objectMaker.name); // This is it이 출력되는게 아니라 And that's that이 출력된다.

// new 연산자를 빼먹는다면?? => 함수

function Waffle() {
  this.tastes = "yummy";
}

// 새로운 객체
var waffle = new Waffle();
console.log(typeof waffle);
console.log(waffle.tastes);

var waffle2 = Waffle();
console.log(typeof waffle2);
// console.log(waffle2.tastes); Error
console.log(global.tastes);

// 좋은 표현

function Coffee() {
  var that = {};
  that.tastes = "yummy";
  return that;
}

function Coffee2() {
  return {
    tastes: "yummy",
  };
}

function Coffee3() {
  this.tastes = "yummy";
}

Coffee.prototype.greenBean = "Brazil Santos";
Coffee2.prototype.greenBean = "Brazil Santos";
Coffee3.prototype.greenBean = "Brazil Santos";

// 문제는 프로토타입과 연결고리!
var first = new Coffee(),
  second = Coffee2(),
  third = new Coffee3();

console.log(first.tastes);
console.log(second.tastes);
console.log(third.tastes);

console.log(first.greenBean); // undefined
console.log(second.greenBean); // undefined
console.log(third.greenBean); // Brazil Santos

// 이런 문제를 해결하기 위해 생성자 내부에서 this가 해당 생성자의 인스턴스인지를 확인하고
// 그렇지 않은 경우 new와 함께ㅐ 스스로 재호출

function Tea() {
  if (!(this instanceof Tea)) {
    return new Tea();
  }
  this.tastes = "sweet";
}

Tea.prototype.category = "jasmine";

var firstTea = new Tea(),
  secondTea = Tea();

console.log(`new Tea() 호출`);
console.log(firstTea); // return 없어도 생성자 만들어짐 즉 return this
console.log(secondTea);

console.log(firstTea.tastes);
console.log(secondTea.tastes);

console.log(firstTea.category);
console.log(secondTea.category);

const arr = ["1", "2", "3"];

const arr2 = new Array("hello");

console.log(typeof arr);

console.log(firstTea.constructor === Tea);
console.log(arr2.prototype);
console.log(arr.constructor === Array);

console.log(new Array(3)); // [ empty items 3 ]
// console.log(new Array(3.14)); // Error

// Array 판별법
console.log(Array.isArray([]));

// pollyfill

if (typeof Array.isArray === "undefined") {
  Array.isArray = function (arg) {
    return Object.prototype.toString.call(arg) === "[object Array]";
  };
}

// JSON 핸들링
var json = {};
// var data = JSON.parse(json);
// 반대는 JSON.stringify() 객체 또는 배열을 인자로 받아 JSON 문자열로 직렬화

var bird = {
  name: "raven",
  date: new Date().getSeconds(),
  isBird: true,
  canFly: true,
  color: ["black", "pink", "blue", "grey"],
  wings: 2,
};

// 메소드는 생략
console.log(JSON.stringify(bird));

// 정규식
var re = /\\/gm;

// 생성자 (안티 패턴)
var re2 = new RegExp("\\\\", "gm");

// 매칭시킬 패턴을 미리 알 수 없고 런타임에 문자열로 만들어지는 경우
// 부득이하게 생성자 패턴을 사용한다.

function getRE() {
  var re = /[a-z]/;
  re.foo = "bar";
  return re;
}

var reg = getRE();
var re2 = getRE();

console.log(reg === re2);
reg.foo = "baz";
console.log(re2.foo);

// 원시 데이터 타입
var nobj = new Number(100);

console.log(typeof nobj); // object..

// var numObj2 = new Object(1);

console.log(typeof numObj2); // number

// 런타임 시 객체로 임시 변환
// 때문에 원시 데이터는 프로퍼티와 메서드를 추가할 수 없다.

const error = new Error("에러");
console.log(typeof error); // Error는 object

const error2 = new Error().name;
console.log(error2);

const error3 = new Error("message 프로퍼티").message;
console.log(error3);

// 따라서 error 메세지를 직접 정의할 수 있다.
try {
  throw {
    name: "MyErrorType",
    message: "My First Message",
    extra: "이건 뭐지",
    remedy: function genericErrorHandler() {
      // 에러 처리 함수
      return "에러 처리";
    },
  };
  // 또는 throw Error("MyErrorType")
} catch (error) {
  console.log(error.message);
  console.log(error.remedy());
  console.log(error.extra);
}

// throw new Error() 패턴을 자제할 것
