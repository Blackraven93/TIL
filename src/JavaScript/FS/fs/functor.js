const Container = function(val) {
  this.value = val;
}

let testValue = new Container(3)
console.log(testValue)

let testObj = new Container({a : 3})
console.log(testObj)

let testArray = new Container([1, 2])
console.log(testArray)

Container.of = function(value) {
  return new Container(value);
}

testValue = Container.of(5)
console.log(testValue)

testObj = Container.of({a : 5})
console.log(testObj)

testArray = Container.of([2,3])
console.log(testArray)

Container.prototype.map = function(fn) {
  return Container.of(fn(this.value))
}

let double = x => x + x;
console.log(
  Container.of(3)
    .map(double)
    .map(double)
    .map(double)
)


export const MayBe = function(val) {
  this.value = val
}

MayBe.of = function(val) {
  return new MayBe(val);
}

MayBe.prototype.isNothing = function() {
  return (this.value === null || this.value === undefined)
}

MayBe.prototype.map = function(fn) {
  return this.isNothing() ? MayBe.of(null) : MayBe.of(fn(this.value));
};

console.log(MayBe.of('string').map(x => x.toUpperCase()))
console.log(MayBe.of(null).map(x => x.toUpperCase())) // 선언적으로 null을 다룰 수 있음

/**
 * 일반적으로
 * let value = 'string'
 * if (value !== null || value !== undefined) {
 *  return value.toUpperCase() 
 * }
 */

console.log(MayBe.of('Raven')
  .map(x => x.toUpperCase())
  .map(x => "Mr. " + x))
