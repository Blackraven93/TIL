// name space pattern
// 5.1 네임스페이스

function Parent() {}
function Child() {}

const someValue = 1;

const module = {};

module.data = {
  a: 1,
  b: 2,
};

const module2 = {};

const MYAPP = {};
MYAPP.Parent = function () {};
MYAPP.Child = function () {};

// 변수
MYAPP.someValue = 1;
MYAPP.modules = {};

MYAPP.modules.module = {};
MYAPP.modules.module.data = { a: 1, b: 2 };
MYAPP.modules.module2 = {};

// 개선안
// const MYAPP2 = MYAPP2 || {};

MYAPP.namespace = function (ns_string) {
  let parts = ns_string.split('.'),
    parent = MYAPP;

  if (parts[0] === 'MYAPP') {
    parts = parts.slice(1);
  }

  for (let i = 0; i < parts.length; i++) {
    if (typeof parent[parts[i]] === 'undefined') {
      parent[parts[i]] = {};
    }

    parent = parent[parts[i]];
  }

  return parent;
};

const module3 = MYAPP.namespace('MYAPP.modules.module2');
console.log(module3 === MYAPP.modules.module2);

console.log(MYAPP.namespace('modules.module51'));

console.log(MYAPP.namespace('once.upon.a.time.there.was.this.long.nested'));
