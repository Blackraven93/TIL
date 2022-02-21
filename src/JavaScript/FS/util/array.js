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