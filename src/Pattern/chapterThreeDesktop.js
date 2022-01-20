// 생성자 함수 정의
var Person = function (name) {
    this.name = name;
    this.say = function() {
        return `I'm ${this.name}`;
    }
}

var raven = new Person('raven')
console.log(raven.say())


/**
 * var Person = function ( name ) {
 *  var this = {}
 *  this.name = name;
 *  this.say = function() {
 *     return `I'm ${this.name}`;
 *  }
    return this
 * }

    위의 this는 빈 객체가 아니라 정확하게는
    var this = Object.create(Person.prototype); 과 같다.

    this.say를 인스턴스별로 달라지는 게 아니므로 비효율적임 prototype에 담을 것
    Person.prototype.say = function () {
        return `I'm ${this.name}`;
    }
 */

// 생성자 함수는 암묵적으로 this를 반환한다 
// 하지만 따로 정할 수도 있다.
var Objectmaker = function() {
    this.name = "This is it";

    var that = {}
    that.name = "And that's that"
    return that
}

var o = new Objectmaker();
console.log(o.name)

// 여기서 new를 붙이지 않으면 this는 전역으로 할당

// 안전한 사용
function Waffle() {
    var that = {}; // or self
    that.tastes = "yummy";
    return that;
}

function Waffle2() {
    var that;
    return that = {
        tastes : "yummy"
    }
}

function Waffle3() {
    return {
        tastes : "yummy"
    }
}

var waffle = new Waffle()
var waffle2 = new Waffle2()
var waffle3 = new Waffle3();
console.log(waffle)
console.log(waffle2)
console.log(waffle3)

// 문제점은 객체 리터럴 방식은 constructor가 없기 때문에 prototype과 연결고리가 없음!