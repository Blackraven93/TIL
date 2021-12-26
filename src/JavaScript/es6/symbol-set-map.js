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
