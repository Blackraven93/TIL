export {}
function squareOf(n: number) {
    return n * n
}

console.log(squareOf(2));
// squareOf("z") Error

let a: unknown = 30;
let b = a === 123
// let c = a + 10 Error
if (typeof a === "number") {
    let d = a + 10
}

let e: true = true
// let f: true = false Error

let num = 1234;
let num2 = Infinity * 0.10
let bool = num < num2;
let num3: number = 100;
let num4: 26.123 = 26.123;
// let g: 26.128 = 10 Error

// let h:bigint = 100 Error

// let str: 'raven' = "parrot"

let symbol: symbol = Symbol('raven');

const f: unique symbol = Symbol('unique');
// let g: unique symbol = Symbol('unique') Error

let obj: { b: number } = {
    b: 12
}

let obj2: {
    firstName: string
    lastName: string
} = {
    firstName: 'raven',
    lastName: 'black',
}

class Bird {
    constructor (
        public name:string,
        public canFly:boolean
    ) { 
        // this.name = name
        // this.canFly = canFly
    }
}

const raven = new Bird("raven", true);
// 왜 constructor로 지정을 안했는데..?
console.log(raven)

let c: {
    firstName: string
    lastName: string
} = {
    firstName: 'john',
    lastName: "barrowman"
}


type name = {
    firstName: string
    lastName: string
}

let d: name = {
    firstName: "raven",
    lastName: "black"
}

console.log(d)

class Person {
    constructor(
        public firstName: string,
        public lastName: string
        ) { }
}

c = new Person("matt", "smith")
console.log(c)

// let z = {
//     b: number
//     c?: string
//      [key: number]: boolean
// }

/**
 * z = {b: 1}
 * z = {b: 1, c: undefined}
 * z = {b: 1, c: "d"}
 * z = {b: 1, 10: true}
 * z = {b: 1, 10: true, 20: false}
 * z = {10: true} // error 'b'를 프로퍼티로 가져야 함
 * z = {b: 1, 33: "red"} // boolean 타입에 할당할 수 없음.
 */

// [key: T]: U  => 모든 T 타입의 키는 U 타입의 값을 갖는다.
// 인덱스 시그니쳐 키 즉 T는 반드시 number || string
// 키 이름 변경 가능 ex) [raven: T]

let user: {
    readonly firstName: string
    readonly lastName: string
} = {
    firstName: "Black",
    lastName: "raven"
}

// user.firstName = "Grey" error 마치 const 처럼 할당 불가

type Age = number
type People = {
    name: string
    age: Age // 타입간 사용 가능
}

let age: Age = 55
let driver: People = {
    name: "parrot",
    age: age
}

console.log(driver)

type Color = "red"
// type Color : Error (중복 타입 설정)

let x = Math.random() < .5

if (x) { // type도 동일한 자바스크립트 스코프 적용
    type Color = "blue"
    let b: Color = "blue"
    console.log(b)
} else {
    let c: Color = 'red'
    console.log(c)
}

// union(합집합) |
// Intersection(교집합) &

type Cat = {name: string, purrs: boolean}
type Dog = {name: string, barks: boolean, wags: boolean}
type CatOrDogOrBot = Cat | Dog
type CatAndDog = Cat & Dog

type Returns = string | null

let arr1:Array<number> = [1, 2, 3]
let arr2:number[] = [1, 2, 3]

// arr1 === arr2

let arr3:(number | string)[] = [1, 2, "3"]

const buildArray = () => {
    let a = [] // any[]
    a.push(5) // number[]
    a.push("a") // string[]
    return a // (string | number)[] => 최종 타입 확정
}

console.log(buildArray())

// tuple
let tuple: [number, string, boolean] = [1, "hello", false]
// tuple = [5, 10, true] Error

let trainFares: [number, number?][] = [
    [3.75],
    [8.25, 7.70],
    [10.50]
]

let friends: [string, ...string[]] = ["Sara", "Tali", "Chloe", "Claire"]

let as: readonly number[] = [1, 2, 3]
// as[4] = 5 Error

// readonly string[]
type A = readonly string[]
type B = ReadonlyArray<string>
type C = Readonly<string[]>

type D = readonly [number, string]
type E = Readonly<[number, string]>

// null, undefined, void, never
// undefined: 아직 정의하지 않음
// null 없음
// void 아무것도 반환하지 않는다
// 절대 반환하지 않는다 (예외, 무한)

enum BirdEnum {
    Parrrot = 0,
    Raven = 1,
    Eagle = 2
}

const enum Language {  // const enum 상황에서는 채워넣기를 최대한 피해야 한다!!
    English = 0,
    Spanish = 1,
    Russian = 2
}

// const enum은 권장하지 않음



// let languageError = Language.Tagalae => Error
// let languageError2 = language[0] => Error : languageError2.English (이렇게만 접근 가능)

console.log(Language.English)

// 객체이면서 동시에 열거형

