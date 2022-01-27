const { log } = console

log('=============================================================== map')

const map = (f, iter) => {
  let res = [];
  for (const a of iter) { // iterator 산출
    res.push(f(a)) // 어떤 조건을 건 함수를 전달.
  }
  return res;
}

const list = [1, 2, 3, 4, 5, 6]


log(map((a) => a * a, list))

log('=============================================================== Array Like Object')

const arrayLike = {
  0: 1,
  1: 2,
  2: 3,
  3: 4,
  4: 5,
  5: 6,
  length: 6,
  [Symbol.iterator]() {
    let max = arrayLike.length - 1
    let count = -1
    return {
      next() {
        count++
        return { value: count > max ? undefined : arrayLike[count], done: count > max }
      }
    }
  }
}

const iterableTest = arrayLike[Symbol.iterator]();

log(`ArrayLike : `, arrayLike)

log("\nArray like iterator\n")
log(iterableTest.next())
log(iterableTest.next())
log(iterableTest.next())
log(iterableTest.next())
log(iterableTest.next())
log(iterableTest.next())
log(iterableTest.next())
log(iterableTest.next())
log(iterableTest.next())
log("")

log("Square map\n")

log(map((a) => a * a, arrayLike))


log('=============================================================== Destructuring')

log([...arrayLike])

const [one, two, three, ...rest] = arrayLike

log(one)
log(two)
log(three)
log(rest)


const props = {
  species: "Bird",
  color: ["black", "purple", "blue", "grey"],
  wings: 2
}

const raven = ({ species, wings, color }) => {

  return `This species is ${species}, wings count is ${wings}, colors are ${color}`
}

log(raven(props)) // const {species, wings, color} = props

log('=============================================================== Set')

const set = new Set([...arrayLike])
let setCount = set[Symbol.iterator]()
log(setCount.next())
log(setCount.next())
log(setCount.next())
log(setCount.next())
log(setCount.next())
log(setCount.next())
log(setCount.next())

log('=============================================================== Map')

const mapFn = new Map([["A", 1], ["B", 2], ["C", 3]])
log(mapFn)
let mapCount = mapFn[Symbol.iterator]()
log(mapCount.next())
log(mapCount.next())
log(mapCount.next())
log(mapCount.next())

log('=============================================================== Generator')

function* generator(condition) {
  yield 1;
  yield 2;
  yield condition === 3 && 3;
  yield 4;
  yield 5;
}


const threeGenerator = generator(3)

log(threeGenerator.next())
log(threeGenerator.next())
log(threeGenerator.next())
log(threeGenerator.next())
log(threeGenerator.next())
log(threeGenerator.next())

const twoGenerator = generator(2)

log(twoGenerator.next())
log(twoGenerator.next())
log(twoGenerator.next())
log(twoGenerator.next())

// 이터러블은 지연 평가가 가능

// async, await => promise와 generator의 조합