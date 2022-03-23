// callback 지옥

let sync = () => {
  // 특정 연산
  // 데이터 변환
}

let sync2 = () => {
  // 특정 연산
  // 데이터 반환
}

let sync3 = () => {
  // 특정 연산
  // 데이터 반환
}

const result = sync()
const result2 = sync2()
const result3 = sync3()

let async = fn => {
  // 특정 비동기 연산
  // 비동기 연산으로 콜백 호출
  fn(/* result data */)
}

let async2 = fn => {
  // 특정 비동기 연산
  // 비동기 연산으로 콜백 호출
  fn(/* result data */)
}
let async3 = fn => {
  // 특정 비동기 연산
  // 비동기 연산으로 콜백 호출
  fn(/* result data */)
}

async(function(x) {
  async2(function(y) {
    async3(function(z) {
      /* 연산 */
    })
  })
})

function* gen() {
  return 'first generator';
}

let generatorResult = gen()
let generatorResult2 = gen()


console.log(generatorResult.next().value)
console.log(generatorResult.next().value)

console.log(generatorResult2.next().value)
console.log(generatorResult2.next().value)

function* generatorSequence() {
  yield 'first';
  yield 'second';
  yield 'third';
}

let squence = generatorSequence()

console.log(squence.next().value)
console.log(squence.next().value)
console.log(squence.next().value)

// lazy evaluation
// 코드가 실행하려고 요청할 때까지는 실행되지 않는 것을 의미한다.
// 요청할 때에만 실행되고 반환된다.

let sequence2 = generatorSequence()

console.log(sequence2.next())
console.log(sequence2.next())
console.log(sequence2.next())
console.log(sequence2.next().done)

for (const value of generatorSequence()) {
  console.log(value)
}
