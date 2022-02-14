export const forEach = (array, fn) => {
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
