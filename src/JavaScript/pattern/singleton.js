const singleton = (function () {
  let _instance = "";
  const _private = 0;
  function init() {
    return {
      publicKey: _private,
      publickMethod: function () {
        return this.publicKey;
      },
    };
  }

  return function () {
    if (!_instance) {
      _instance = init();
    }
    return _instance;
  };
})();

const singleton1 = singleton();
const singleton2 = singleton();
console.log(singleton1);
console.log(singleton1 === singleton2);

var Module = function () {
  var privateKey = 0;
  function privateMethod() {
    return privateKey++;
  }

  return {
    publicKey: privateKey,
    publicMethod: function () {
      return privateMethod();
    },
  };
};

var obj1 = Module();
console.log(obj1.publicMethod()); // 1
console.log(obj1.publicMethod()); // 2

var obj2 = Module();
console.log(obj2.publicMethod()); // 1
console.log(obj2.publicMethod()); // 2

console.log(obj1 === obj2);
console.log(obj1);

// 네임 스페이스 패턴을 함께 사용하면 더욱 좋음
var app = app || {}; // 이부분?
app.module = (function () {
  var privateKey = 0;
  function privateMethod() {
    return privateKey++;
  }

  return {
    publicKey: privateKey,
    publicMethod: function () {
      return privateMethod();
    },
  };
})();

console.log(app.module.publicMethod()); // 0
console.log(app.module.publicMethod()); // 1
