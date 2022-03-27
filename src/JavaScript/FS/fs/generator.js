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

function* sayFullName() {
  const firstName = yield;
  const secondName = yield;
  console.log(firstName + ' ' + secondName)
}

let fullName = sayFullName()
console.log(fullName.next())
console.log(fullName.next('Raven'))
console.log(fullName.next('Black'))

console.log('비동기 시작')

let getDateOne = (cb) => {
  setTimeout(() => {
    cb('dummy data one')
  }, 1000);
}

let getDateTwo = (cb) => {
  setTimeout(() => {
    cb('dummy data two')
  }, 1000);
}

getDateOne((data) => console.log('data received', data))
getDateTwo((data) => console.log('data received', data))

let generator;
let getDataThree = () => {
  setTimeout(() => {
    generator.next('dummy data three')
  }, 1000)
}

let getDataFour = () => {
  setTimeout(() => {
    generator.next('dummy data four')
  }, 1000)
}

function* main() {
  let dataOne = yield getDataThree();
  let dataTwo = yield getDataFour();
  console.log('data one', dataOne)
  console.log('data two', dataTwo)
}

generator = main();
generator.next()

console.log('비동기 끝')

// git push 오류

import https from "https";

function httpGetAsync(url, callback) {
  return https.get(url,
    function(response) {
      let body = '';
      response.on('data', (d) => {
        body += d;
      });

      response.on('end',() => {
        let parsed = JSON.parse(body)
        callback(parsed)
      })
    })
}

