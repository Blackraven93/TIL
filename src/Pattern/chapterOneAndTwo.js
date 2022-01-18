// 암묵적 전역 변수가 전역 객체의 프로퍼티다!!!(strict mode에서 Error)
// var global_var = 1;
// global_novar = 2;
// (function () {
//     global_fromfunc = 3;
// })

// delete global_var;
// delete global_novar;
// delete global_fromfunc;

// console.log(typeof global_var)
// console.log(typeof global_novar)
// console.log(typeof global_fromfunc)


// this 유효 범위에 대한 적용 (apply, call, bind로 적용할 수도 있다.)
var global = (function() {
    return this;
}) // global [function]

// 단일 var를 선언한다면 위에 한번만!
var values = (function() {
    var a = 1,
        b = 2,
        sum = a + b,
        myObject = {},
        i,
        j;
})()

// Dom을 핸들링 하는 경우
/**
 * function updateElement() {
 *  var el = document.getElementById("result") ,
 *      style = el.style; el과 style을 다루는 코드
 * }
 * 
 */

// var를 사용한다면 최상단에 작성 이후에 할당
/**
 * myname = "global"
 * function func() {
 *  var myname;
 *  alert(myname);
 *  myname = "local";
 *  alert(myname);
 * }
 * 
 * func()
 */

/**
 * myarray가 HTMLCollection 이라면 매번 DOM에 접근하여 가져와 성능이 저하된다.
 * 이때 length를 캐싱하고 적용한다면 성능 최적화가 이루어진다.
 * for (var i = 0; i < myarray.length; i++) {} 배열과 비슷한 객체를 순회
 * for (var i = 0, max = myarray.length; i < max; i++ ) {} 
 * 
 * 루프 내에서 DOM 엘리먼트를 추가하는 등 콜렉션에 대한 변경을 명백히 의도한 경우라면
 * length 값이 고정되지 않고 계속 갱신
 */

function looper() {
    var i = 0,
        max,
        myarray = [];
        for (i = 0, max = myarray.length; i < max; i++) {}
}

// for-in 루프 전체 프로퍼티 거르기
Object.prototype.clone = function() {}

var man = {
    hands: 2,
    legs: 2,
    heads: 1
}

for (var i in man) {
    if (man.hasOwnProperty(i)) {
        
        console.log(`hasOwnProperty 적용 ${i} : ${man[i]}`)
    }
    
    console.log(`hasOwnProperty 미적용 ${i} : ${man[i]}`)
}

// man 객체가 hasOwnProperty를 재정의하여 덮어썼을 경우에도 활용 가능한 코드
var i,
    hasOwn = Object.prototype.hasOwnProperty;
for (i in man) if (hasOwn.call(man, i)) {
    console.log(`${i} : ${man[i]}`)
}
// 하지만 이런 코드를 명시하지 않게 확장하지 않는 것이 최선

// parseInt 사용시 깃수 생략하지 말 것
var num = "15"
console.log(parseInt(num, 10))

// 문제는 08 Hello 일 경우 8로 파싱
var num2 = "08 Hello"
console.log(parseInt(num2, 10))

// 과거에는 비공개 메서드 구현시 _ 사용
var person = {
    _getFirst: function() {}
}

// protected 프로퍼티는 밑줄 하나 _ private은 밑줄 두개 __