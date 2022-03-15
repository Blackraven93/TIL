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


