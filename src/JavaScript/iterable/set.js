const nums = [1,2,3,3,3,3,4,5,6,11,234,215,34,656,88,43,553,124,2,34,11,234, 1234,55]

const App = {} ;

App.checkDuplicate = () => {
  const set = new Set([...nums])
  const duplicateValues = new Map();


  const isInclude = (count, e) => {
    // filter 사용
    if (nums.includes(e)) {
      nums.some(num => {
        if (num === e) {
          count += 1
        }})
      return count
    }
    return count
  }

  const check = (set) => {

    // filter 사용하면 됨
    for (const iter of set) {
      let count = 0
      count = isInclude(count, iter);
      if (count > 1) {
        duplicateValues.set(iter, count)
      }
    }
  }


  check(set)

  return duplicateValues  
  
}

// Set? 중복 제거

console.log( App.checkDuplicate() )