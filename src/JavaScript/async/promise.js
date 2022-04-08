const delay = (ms) => {
  return new Promise((resolve) =>
    setTimeout(() => {
      resolve(ms);
    }, ms)
  );
};
const main = async () => {
  console.log(`main1 start`);

  const result = delay(1000);
  result.then(console.log);
  console.log(`main1 end`);
};

const main2 = async () => {
  console.log(`main2 start`);

  const result = await delay(1000);
  console.log(result);
  console.log(`main2 end`);
};

main();
main2();

// main1 start
// main1 end
// main2 start

// 1000
// 1000
// main2 end

function testPromise() {
  var thisPromiseCount = ++promiseCount;

  var log = document.getElementById('log');
  log.insertAdjacentHTML(
    'beforeend',
    thisPromiseCount + ') 시작 (<small>동기적 코드 시작</small>)<br/>'
  );

  var p1 = new Promise(function (resolve, reject) {
    log.insertAdjacentHTML(
      'beforeend',
      thisPromiseCount +
        ') 프로미스 시작 (<small>비동기적 코드 시작</small>)<br/>'
    );
    setTimeout(function () {
      resolve(thisPromiseCount);
    }, Math.random() * 2000 + 1000);
  });

  p1.then(function (val) {
    log.insertAdjacentHTML(
      'beforeend',
      val + ') 프로미스 이행 (<small>비동기적 코드 종료</small>)<br/>'
    );
  }).catch(function (reason) {
    console.log('여기서 거부된 프로미스(' + reason + ')를 처리하세요.');
  });

  log.insertAdjacentHTML(
    'beforeend',
    thisPromiseCount + ') 프로미스 생성 (<small>동기적 코드 종료</small>)<br/>'
  );
}
