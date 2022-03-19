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

