const Gadget = function () {};
Gadget.isShiny = function () {
  return 'you bet';
};

Gadget.prototype.setPrice = function (price) {
  this.price = price;
};

console.log(Gadget.isShiny());

const iphone = new Gadget();

iphone.setPrice(500);

console.log(typeof Gadget.setPrice);
console.log(iphone.isShiny);

Gadget.prototype.isShiny = Gadget.isShiny;
console.log(iphone.isShiny());

const Gadget2 = function (price) {
  this.price = price;
};

Gadget2.isShiny = function () {
  let msg = 'you bet';

  if (this instanceof Gadget2) {
    msg += `, it costs $${this.price} !`;
  }

  return msg;
};

Gadget2.prototype.isShiny = function () {
  return Gadget2.isShiny.call(this);
};

console.log(Gadget.isShiny());
console.log(Gadget2.isShiny());
const iphone2 = new Gadget2(4000);

console.log(iphone2.isShiny());

// 비공개 메서드
// 동일한 생성자 함수로 생성된 객체들이 공유하는 멤버이다.
// 생성자 외부에서는 접근할 수 없다.

export const Gadget3 = (function () {
  let counter = 0;

  return function () {
    console.log((counter += 1));
  };
})();

const g1 = new Gadget3();
const g2 = new Gadget3();

const Gadget4 = (function () {
  let counter = 0,
    NewGadget;

  NewGadget = function () {
    counter += 1;
  };

  NewGadget.prototype.getLastId = function () {
    return counter;
  };

  return NewGadget;
})();

const iphone4 = new Gadget4();
console.log(`id : ${iphone4.getLastId()}`);
const ipod = new Gadget4();
console.log(`id : ${ipod.getLastId()}`);
