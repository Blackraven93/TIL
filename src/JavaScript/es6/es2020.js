import fetch from "node-fetch";

// ??

// false 일 때는 anonymous를 배출
// 둘중에 하나가 true라면 출력
let raven = 0;
console.log("hello", raven || "anonymous");

// 따라서 명확하게 사용하려면
// raven이 undefined || null 일 때 출력된다.
console.log("hello", raven ?? "anoymous");

// optional chaining(?.)

let bird = {
  raven: {
    wings: 2,
    color: "black",
    group: true,
  },
};

const adventurer = {
  name: "Alice",
  cat: {
    name: "Dinah",
  },
};

const dogName = adventurer.dog?.name;
console.log(dogName);

console.log(adventurer.someNonExistentMethod?.());

// error가 뜨지 않고 undefined가 뜸
console.log(bird.parrot?.color);

// 그래서 언제 사용해??
// 확신할 수 없을 때!! (우리가 원하는걸 가지고 있지 않을 때)

// String.prototype.padStart()
// 문자열 앞이나 뒤에 패딩을 넣어줌

let hours = 12,
  minutes = 3,
  seconds = 2;

const addZeroIfTimeOneUnit = (time) => {
  return String(time).padStart(2, "0");
};

console.log(
  `${hours}h:${addZeroIfTimeOneUnit(minutes)}m:${addZeroIfTimeOneUnit(
    seconds
  )}s`
);
// 첫번째 길이가 인자를 나타냄 반드시 인자 값의 길이로만 이루어져야 함
// 만약에 그렇지 않다면 0을 넣는 형태

console.log("1".padStart(2, "0").padEnd(3, "s"));

// padstart pollyfill
if (!String.prototype.padStart) {
  String.prototype.padStart = function padStart(targetLength, padString) {
    targetLength = targetLength >> 0; //truncate if number, or convert non-number to 0;
    padString = String(typeof padString !== "undefined" ? padString : " ");
    if (this.length >= targetLength) {
      return String(this);
    } else {
      targetLength = targetLength - this.length;
      if (targetLength > padString.length) {
        padString += padString.repeat(targetLength / padString.length);
      }
      return padString.slice(0, targetLength) + String(this);
    }
  };
}

//Original Code
var binaryNum = "110";
var result = binaryNum.padStart(4, "0");

console.log(result);

// String.prototype.trimStart() trimEnd() trim()
// String자체를 바꾸진 않음
// 항상 기존 값을 변형시키는지 파악해야한다.

// Object entries, Object values, Object fromEntries
const person = {
  name: "raven",
  age: 29,
  birds: {
    bird: "parrot",
  },
};

console.log(Object.values(person));

console.log(Object.entries(person));

// pollyfill

const fn = (obj) => {
  let entryArray = [];
  for (const element in obj) {
    if (Object.hasOwnProperty.call(obj, element)) {
      const tempArray = [element, obj[element]];
      entryArray.push(tempArray);
    }
  }
  return entryArray;
};

console.log(fn(person));

console.log(
  Object.fromEntries([
    ["bird", "raven"],
    ["fruit", "apple"],
    ["age", 29],
  ])
);

// Array.prototype.flat()
// 복잡한 array가 있을 때 모든 요소들을 전부 빼준다.
// 인자로 벗겨낼 dept를 설정한다.

// Array.prototype.sort()
// 배열값을 변화시킴!! 주의!!

// fetch 함수는 node에 있지 않음
// let fetch = (...args) =>
//   import("node-fetch").then(({ default: fetch }) =>
//     fetch(...args).then((response) => console.log(response.json))
//   );

const p = Promise.allSettled([
  fetch("https://yts.mx/api/v2/list_movies.json"),
  fetch("https://yts.mx/api/v2/list_movies.json"),
  fetch("https://yts.mx/api/v2/list_movies.json"),
])
  .then((response) => console.log("success", response))
  .catch((error) => console.log("error:", error));

// promise allSettled
// allSettled vs all promise가 잘 작동하는지 확인할 필요가 없다면 allsettled
// 동시에 동작하는지 중요하면 all
