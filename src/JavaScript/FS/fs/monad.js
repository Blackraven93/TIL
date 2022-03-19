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
