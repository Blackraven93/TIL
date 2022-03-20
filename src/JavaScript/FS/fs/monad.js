import { MayBe } from "./functor.js";

// 함수자 복습
class Box {
  constructor(value) {
    this.$value = value;
  }
  
  static of (value) {
    return new Box(value);
  }

  map(fn) {
    return new Box(fn(this.$value));
  }
}

const box1 = new Box('FP'); // Box('FP');
const box2 = Box.of('FP2'); // Box('FP2');
const box3 = Box.of(Box.of('FP3')); // Box(Box('FP3'));

console.log(box1)
console.log(box2)
console.log(box3)

const addFive = (num) => {
  return num + 5;
}

// 첫 글자를 대문자로 바꿔줍니다.
const startCase = (str) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

console.log(Box.of(1).map(addFive))
console.log(Box.of(1).map(addFive).map(addFive))
console.log(Box.of('hello, FP').map(startCase))



// 함수자: 같은 타입을 반환하는 map 메소드를 구현한 객체. ex) array

const response = {
  type: 'Bird',
  data: [
    {
      id: 1,
      name: 'raven',
      color: ['black', 'white', 'blue', 'purple'],
      age: 2,
      canFly: true,
    },
    {
      id: 2,
      name: 'pigeon',
      color: ['grey', 'white', 'brown', 'silver'],
      age: 4,
      canFly: true,
    },
    {
      id: 3,
      name: 'kiwi',
      color: ['brown', 'Ivory'],
      age: 3,
      canFly: false,
    },
  ]
}

const res = MayBe.of(response);
res.map(console.log)

MayBe.prototype.join = function() {
  return this.isNothing() ? MayBe.of(null) : this.value;
}

const joinExample = MayBe.of(MayBe.of(5))
console.log(joinExample)
console.log(joinExample.join())

console.log(joinExample.map((outsideMatBe) => {
  return outsideMatBe.map(value => value + 4)
}))

console.log(joinExample.join().map(v => v + 4))


// chain method를 가지고 있는 것이 모나드..?
MayBe.prototype.chain = function(f) {
  return this.map(f).join()
}

joinExample.chain(v => v + 8)

// of와 map만 갖는 MayBe는 함수자다.
// chain을 갖는 함수자는 모나드다.

// f⋄g(x) = f(g(x))
const abs = x => Math.abs(x);
abs(Math.PI * 1/2); // 1

const cube = x => (x ** 3);
cube(3); // 27

const cubeThenAbs = x => cube(abs(x))
console.log(cubeThenAbs(2))

const compose = (f, g) => x => f(g(x))
/**
 * const compose = function(f, g) {
 *  return function(x) {
 *    return f(g(x))
 *  }
 * }
 */


const absCube = compose(abs, cube)
console.log(absCube(2))

const sine = x => [Math.sin(x), 'sine was called'];
const squared = x => [x ** 2, 'squared was called'];

console.log(sine(2))
console.log(squared(2))
console.log(compose(sine, squared)(2))

/**
 * 1. sine은 Math.sin을 계산하려고 하지만, 입력받은 인자가 숫자가 아니기 때문에 NaN을 반환하게 된다.
 * 2. squared 반환값의 2번째 원소인 squared was called.가 사라진다.
 */

const composeM = (f, g) => (a, b) => {
  const [y, s] = g(a, b);
  const [z, t] = f(y, s);

  return [z, s + ' & ' + t];
};

console.log(composeM(sine, squared)(3));


// bind
const bind = f => (...tuple) => {
  console.log('tuple', tuple);
  const [x, s] = tuple; // 첫번째 [3, in], 두번째 [9, squared...]
  const [y, t] = f(x); // 첫번째 [9 , 'squared ... ' ] 두번째 [Math.sin(9),] 

  return [y, t]; // [9 , 'squared ... ' ]
};

console.log(composeM(bind(sine), bind(squared))(3, ''))

const unit = x => {
  return x
};

console.log(composeM(bind(sine), bind(squared))(unit(3)));

class Monad {
  static of(value) {
    return new Monad(value);
  }
  constructor(value) {
    this.value = value
  }
  map(fn) {
    return Monad.of(fn(this.value))
  }
  join() {
    return this.value
  }
  chain(fn) {
    return fn(this.join())
  }
}

// examples
console.log(Monad.of(3).map(x => x+3).chain(x => Monad.of(x*2)).join()) // 12


