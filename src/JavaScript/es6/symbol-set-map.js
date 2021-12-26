// Symbol

const hello = Symbol("Hello");
const bye = Symbol("Hello");

// uniqueness
// object의 고유한 성질을 나타낼 때 사용할 듯
const superBig = {
  [Symbol("raven")]: {
    bird: true,
  },
  wings: 2,
};
// 절대 변경할 수 없다.
// superBig["raven"].bird = false;

console.log(superBig["raven"]);

// privacy
// symbol은 출력으로 부터 보호됨
console.log(Object.keys(superBig));
console.log(Object.getOwnPropertySymbols(superBig));

const symbol = Object.getOwnPropertySymbols(superBig);
console.log(symbol);

// Set
const array = [1, 2, 3, 4, 5, 6];
const set = new Set([...array]);

console.log(set.has(10)); // false
console.log(set.delete(1));
console.log(set.add(1));
console.log(set.toJSON);
console.log(set.size);
set.forEach((el) => console.log(el));

// weak sets
const weakSet = new WeakSet();

console.log(weakSet.add({ name: "raven" }));
// Garbage Collection
console.log(weakSet.has("name"));

// Map
// map은 set과 비슷한데 key : value 형태

const map = new Map();
map.set("name", "raven");
console.log(map);
console.log(map.entries());
console.log(map.has("name"));
console.log(map.get("age"));

// WeakMap
const weakMap = new WeakMap();

console.log(weakMap);
console.log(weakMap.set({ name: "raven" }));
weakMap.get("name");
