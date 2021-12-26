// Generators

function* listPeople() {
  yield "Se";
  yield "Da";
  yield "ju";
  yield "won";
}

const listG = listPeople();

console.log(listG.next());
console.log(listG.next());
console.log(listG.next());
console.log(listG.next());

console.log("---------------------------------------------------- Generator");

const birds = ["Raven", "Parrot", "Eagle", "Pigeon"];

// arrow function은 없나..???????
function* printBirds(array) {
  for (const iterator of array) {
    yield iterator;
  }
}
// 아하 return을 못쓰는구나 ????
const birdGenerator = printBirds(birds);

console.log(birdGenerator.next());
console.log(birdGenerator.next());
console.log(birdGenerator.next());
console.log(birdGenerator.next());
console.log(birdGenerator.next()); // undefined

console.log("---------------------------------------------------- Generator");

// Promise와 같은 원리인가??????????? 흠..

// Proxy

const birdObject = {
  name: "raven",
  wings: 2,
  foot: 2,
  eyes: 2,
  color: {
    wings: "black",
    tail: "white",
  },
  canFly: true,
};

const birdFilter = {
  get: () => {
    return "Get bird!";
  },
  set: () => {
    return "Set bird!";
  },
  has: () => {
    console.log("Has bird!");
  },
};

const _filter = new Proxy(birdObject, birdFilter);
// get set has getOwnPropery

// promise에 담김
console.log(_filter.name);

// object에 바로 접속할 수 없구나

console.log(_filter.isBird);

// 이벤트 가로채기

// MDN
// Object Trap

/* docCookis
 *
 * Proxy props (docCookis, {})
 * oTarget {Object} : Trap할 객체
 * sKey : 객체 key
 * vValue : 객체 value
 *
 */

// 흠.. 쿠키 핸들링 어떻게 하지..
// const docCookis = document.cookie;

// docCookis = new Proxy(docCookis, {
//   get: (oTarget, sKey) => {
//     return oTarget[sKey] || oTarget.getItem(sKey) || undefined;
//   },

//   set: (oTarget, sKey, vValue) => {
//     if (sKey in oTarget) return false;
//     return oTarget.setItem(sKey, vValue);
//   },

//   deleteProperty: (oTarget, sKey) => {
//     if (sKey in oTarget) return false;
//     return oTarget.removeItem(sKey);
//   },

//   enumerate: (oTarget, sKey) => {
//     return oTarget, keys();
//   },

//   has: (oTarget, sKey) => {
//     return sKey in oTarget || oTarget.hasItem(sKey);
//   }, // key 값이 오브젝트에 있으면 그걸 주고 없으면 설정
// });

// console.log(docCookies.getItem("testCookie"));
// console.log(docCookies.setItem("testCookie", "hash value"));
// console.log(docCookies.getItem("testCookie"));

// local session 같음
// node에는 없나..? => 없다!!
// localStorage.setItem(); // C U
// localStorage.getItem(); // R
// localStorage.removeItem(); // D
// localStorage.clear;
// localStorage.key === "test" ?? undefined;

console.log("---------------------------------------------------- Proxy");

const userObj = {
  username: "raven",
  age: 33,
  password: 123123,
};

const userFilter = {
  get: (target, prop, receive) => {
    return prop === "password" ? `${"*".repeat(5)}` : target[prop];
  },
  set: () => {
    console.log("Somebody wrote something");
  },
};

const filteredUser = new Proxy(userObj, userFilter);
