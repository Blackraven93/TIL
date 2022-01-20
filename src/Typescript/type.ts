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
