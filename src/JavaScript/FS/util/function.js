const forEach = (array, fn) => {
  if (Array.isArray(array)) {
    let index;
    for (index = 0; index < array.length; index++) {
      array[index] = fn(array[index]);
    }
    return array;
  }
};

const arr = [1, 2, 3, 4, 5];

const newArr = forEach(arr, (e) => e * e);

console.log(arr); // 원본 함수의 변화
