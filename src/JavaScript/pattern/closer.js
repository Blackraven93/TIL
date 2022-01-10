const closer = (function () {
  /**
   * 구현체
   */

  // 은닉될 멤버
  let privateKey = 0;
  function privateMethod() {
    return ++privateKey;
  }

  // 공개될 멤버 정의
  return {
    publicKey: privateKey,
    publicMehod: function () {
      return privateMethod();
    },
  };
})();

// console.log(closer.publicKey);
// console.log(closer.publicMehod());
// console.log(closer.publicMehod());
// // method를 통해서만 호출 할 수 있음
// console.log(closer.publicKey);

// closer의 경우

function func() {
  let privateNum = 0;
  return function () {
    privateNum++;
    return privateNum;
  };
}

const val = func();
console.log(val());
console.log(val());
console.log(val());
