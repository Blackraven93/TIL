const forEach = (array, fn) => {
  if (Array.isArray(array)) {
    let index;
    for (index = 0; index < array.length; index++) {
      fn(array[index]);
    }
  }
};

const arr = [1, 2, 3, 4, 5];

const newArr = forEach(arr, (e) => console.log(e * e));

console.log(newArr); // 원본 함수의 변화

const forEachObject = (obj, fn) => {
  for (const key in obj) {
    if (Object.hasOwnProperty.call(obj, key)) {
      fn(key, obj[key]);
    }
  }
};

const obj = { name: "raven", isFly: true, age: 3, color: ["black", "grey"] };

forEachObject(obj, (key, value) => {
  console.log(key, value);
});

const unless = (predicate, fn) => {
  if (!predicate) {
    fn();
  }
};

unless(false, () => {
  console.log("false 입니다");
});

forEach([1, 2, 3, 4, 5, 6, 7, 8], (number) => {
  unless(number % 2, () => console.log(number, "짝수입니다."));
});

const times = (times, fn) => {
  for (let i = 0; i < times; i++) {
    fn(i);
  }
};

times(10, (number) => {
  unless(number % 2, () => console.log(number, "짝수입니다."));
});

const every = (arr, fn) => {
  let result = true;
  for (const item of arr) {
    result = result && fn(item);
  }
  return result;
};

console.log(
  every([1, 2, 3, 4, 5, 6, 7], (element) => typeof element === "number")
);

const some = (arr, fn) => {
  let result = false;
  for (const item of arr) {
    result = result || fn(item);
  }
  return result;
};

const birds = [
  { name: "raven", isFly: true, age: 3, color: ["black", "grey"] },
  { name: "woodpecker", isFly: true, age: 2, color: ["brown", "yellow"] },
  { name: "kiwi", isFly: false, age: 5, color: ["green", "black", "brown"] },
];

const sortBy = (property) => {
  return (a, b) => {
    let result =
      a[property] < b[property] ? -1 : a[property] < b[property] ? 1 : 0;
    return result;
  };
};

birds.sort(sortBy("age"));
console.log(birds);
