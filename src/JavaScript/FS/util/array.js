const forEach = (array, fn) => {
  for (const value of array) {
    fn(value)
  }
}

const map = (array, fn) => {
  let results = []
  for (const value of array) {
    results.push(fn(value))
  }
  return results;
}

const arrayUtils = {
  forEach,
  map
}

export { arrayUtils }

const filter = (array, fn) => {
  let results = []
  for (const value of array) {
    fn(value) && results.push(value)
  }
  return results
}

const testArray = [1, 2, 3, 4, 5, 6, 7, 8, 9]

const answer = filter(testArray, (e) => e > 5)
console.log(answer)


const concatAll = (array, fn) => {
  let results = []
  for (const value of array) {
    results.push.apply(results, value);
  }
  return results
}

const testArray2 = [[1, 2], [3, 4], [5, 6]]
console.log(concatAll(testArray2))


const useless = [2, 5, 6, 1, 10]

let result = 0;
forEach(useless, (value) => {
  result = result + value
})

export const reduce = (array, fn, initialValue = undefined) => {
  let accumlator;

  if (initialValue !== undefined) accumlator = initialValue;
  else accumlator = array[0];

  if (initialValue === undefined) {
    for (let i = 0; i < array.length; i++) {
      accumlator = fn(accumlator, array[i])
    }
  } else {
    for (const value of array) {
      accumlator = fn(accumlator, value)
    }

    return [accumlator]
  }
}

console.log(reduce(useless, (acc, val) => acc * val, 1))

const zip = (leftArr, rightArr, fn) => {
  let index;
  let results = [];
  let minLengthOfTwoArray = Math.min(leftArr.length, rightArr.length)

  for (index = 0; index < minLengthOfTwoArray; index++) {
    results.push(fn(leftArr[index], rightArr[index]))
  }
  return results;
}

console.log(zip([1, 2, 3], [4, 5, 6], (x, y) => x + y))
