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
