// 안티패턴
var o = new Object();
var o2 = {}
console.log(o.constructor === Object) // true
console.log(o.constructor === Object.prototype.constructor)


var numObj = new Object(1);
console.log(numObj)
var numObj2 = 1
console.log(numObj2)
console.log(numObj.constructor === Number)
console.log(numObj2.constructor === Number)



function Bird(name) {
    this.name = name
    this.fly = function () {
        return `I'am ${this.name} I can Fly!!`
    }
    return this
}

var raven = new Bird("Raven");
console.log(raven.fly())

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
    return `I'am ${this.name} I can Fly!!`
}

var _this = {}
var $this = Object.create(Bird.prototype);

console.log(_this.constructor())
console.log($this.constructor())
console.log(Bird.prototype.constructor())

// 생성자의 반환 값
var Objectmaker = function () {
    // 생성자가 다른 객체를 대신 반환하기로 결정했기 때문에
    // 다음의 name 프로퍼티는 무시된다.
    this.name = "This is it";
    var that = {};
    that.name = "And that's that"
    return that;
}

var objectMaker = new Objectmaker();
console.log(objectMaker.name) // This is it이 출력되는게 아니라 And that's that이 출력된다.

// new 연산자를 빼먹는다면?? => 함수

function Waffle() {
    this.tastes = "yummy"
}

// 새로운 객체
var waffle = new Waffle();
console.log(typeof waffle);
console.log(waffle.tastes);

var waffle2 = Waffle();
console.log(typeof waffle2)
// console.log(waffle2.tastes); Error
console.log(global.tastes)

// 좋은 표현

function Coffee() {
    var that = {};
    that.tastes = "yummy";
    return that
}

function Coffee2() {
    return {
        tastes: "yummy"
    }
}

function Coffee3() {
    this.tastes = "yummy"
}

Coffee.prototype.greenBean = "Brazil Santos"
Coffee2.prototype.greenBean = "Brazil Santos"
Coffee3.prototype.greenBean = "Brazil Santos"

// 문제는 프로토타입과 연결고리!
var first = new Coffee(),
    second = Coffee2(),
    third = new Coffee3();

console.log(first.tastes)
console.log(second.tastes)
console.log(third.tastes)

console.log(first.greenBean); // undefined
console.log(second.greenBean); // undefined
console.log(third.greenBean); // Brazil Santos


// 이런 문제를 해결하기 위해 생성자 내부에서 this가 해당 생성자의 인스턴스인지를 확인하고
// 그렇지 않은 경우 new와 함께ㅐ 스스로 재호출

function Tea() {
    if (!(this instanceof Tea)) {
        return new Tea()
    }
    this.tastes = "sweet"
}

Tea.prototype.category = "jasmine"

var firstTea = new Tea(),
    secondTea = Tea();

console.log(firstTea.tastes);
console.log(secondTea.tastes);

console.log(firstTea.category)
console.log(secondTea.category)
