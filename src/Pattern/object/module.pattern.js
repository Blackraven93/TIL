/**
 * 모듈패턴
 * - 네임스페이스 패턴
 * - 즉시 실행 함수
 * - 비공개 멤버와 특권 멤버
 * - 의존 관계 선언
 */

const MYAPP = {};

MYAPP.utilities = {};

MYAPP.utilities.array = function () {
  // 비공개 프로퍼티
  const arrayString = '[object Array]',
    ops = Object.prototype.toString,
    // 비공개 메서드
    inArray = function (haystack, needle) {
      for (let index = 0, max = haystack.length; index < max; index += 1) {
        if (haystack[index] === needle) {
          return index;
        }
      }

      return -1;
    },
    isArray = function (a) {
      return ops.call(a) === arrayString;
    };

  return {
    isArray: isArray,
    indexOf: inArray,
  };
};

console.log(MYAPP.utilities.array().indexOf([1, 2, 3, 4], 3));

// MYAPP.utilities.module = (function (app, global) {})(MYAPP, this);

// Sandbox pattern

function Sandbox(...args) {
  args = [...args];

  const callback = args.pop();
  let modules = args[0] && typeof args[0] === 'string' ? args : args[0];

  // 전역의 this는 window || global
  if (!(this instanceof Sandbox)) {
    return new Sandbox(modules, callback);
  }

  this.a = 1;
  this.b = 2;

  if (!modules || modules === '*' || modules[0] === '*') {
    modules = [];
    for (const key in Sandbox.modules) {
      if (Object.hasOwnProperty.call(Sandbox.modules, key)) {
        modules.push(key);
      }
    }
  }

  // 모듈 초기화
  for (let index = 0; index < modules.length; index += 1) {
    Sandbox.modules[modules[index]](this);
  }

  callback(this);
}

Sandbox.prototype = {
  name: 'My Application',
  version: '1.0',
  getName: function () {
    return this.name;
  },
};

Sandbox.modules = {};

Sandbox.modules.dom = function (box) {
  box.getElement = function () {};
  box.getStyle = function () {};
  box.foo = 'bar';
};
Sandbox.modules.event = function (box) {
  box.attachEvent = function () {};
  box.detachEvent = function () {};
};

Sandbox.modules.ajax = function (box) {
  box.makeRequest = function () {};
  box.getResponse = function () {};
};

console.log(Sandbox('event', () => {}));
