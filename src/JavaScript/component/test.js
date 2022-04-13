var observer = {
  handlers: {},
  register: function (eventName, handler) {
    var handlerArray = this.handlers[eventName];
    if (undefined === handlerArray) {
      handlerArray = this.handlers[eventName] = [];
    }
    handlerArray.push({ handler, context: context });
  },
  unregister: function (eventName, handler, context) {
    var handlerArray = this.handlers[eventName];
    if (undefined === handlerArray) return;
    for (var hidx = 0; hidx < handlerArray.length; hidx++) {
      var currentHandler = handlerArray[hidx];
      if (
        handler === currentHandler['handler'] &&
        context === currentHandler['context']
      ) {
        handlerArray.splice(hidx, 1);
        return;
      }
    }
  },

  // 특정 상태가 변했을때 이벤트를 통보할 함수를 작성합니다.
  notify: function (eventName, data) {
    // ​통보된 이벤트에 등록된 핸들러가 있는지 확인합니다.
    var handlerArray = this.handlers[eventName];
    if (undefined === handlerArray)
      // 없다면 함수를 리턴하여 종료합니다.
      return;

    // 핸들러 배열에 등록되어있는 핸들러들을 하나씩 꺼내 전달받은 데이터와 함께 호출합니다.
    for (var hidx = 0; hidx < handlerArray.length; hidx++) {
      var currentHandler = handlerArray[hidx];
      currentHandler['handler'].call(currentHandler['context'], data);
      // 전달받은 함수를 바로 호출하지 않고 call을 사용하여 호출하는 이유는
      // ​미리 등록시 함께 전달된 context 객체를 함수내부에서 this로 사용할 수 있게끔
      // 함수 내부로 전달하기 위함입니다.
      // 자바스크립트에서 this를 사용할때는 상당히 주의해야 합니다.
    }
  },
};

class Person {}

var boss = new Person(); // 여기에 사장이 있습니다.
var manager = new Person(); // 팀장도 있고,
var programmer = new Person(); // 개발자도 있습니다.

// 서로 연관성을 한번 만들어 보겠습니다.

// 사장님이 말씀을 하십니다.
boss.speak = function (comment) {
  // 훈하 말씀을 담아서
  // alert(comment);
  observer.notify('bossSpeak', comment); // '사장이 말한다' 이벤트를 발생시킵니다.
};

// 이제 사장님 이하 직원들이 이야기를 새겨 들어야겠죠?
manager.listen = function (comment) {
  this.bossComment = comment;
  // 팀장님은 팀장님 답게 사장님의 훈하말씀을 본인의 마인드에 새겨놓습니다.

  // * call을 사용하여 context가 넘겨지지 않았다면 이 부분에서 this가
  // manager를 지칭할 것이라는 보장이 없게 됩니다.(자바스크립트의 특징으로 주의해야합니다.)
  // 그래서 notify에서 call을 사용하여 핸들러를 실행시키고
  // 첫번째 인자인 context로 manager를 넘겨주는 것입니다.
  // 그렇게 넘겨진 manager는 함수내에서 this에 할당되어 접근할 수 있게 됩니다.
};

observer.register('bossSpeak', manager.listen, manager);
// 옵저버에 등록하여 언제든 사장님의 말씀을 새겨들을 준비를 합니다.

// 자.. 그럼 우리 개발자는?
programmer.drop = function (comment) {
  // 한귀로 듣고
  return comment; // 한귀로 흘려 봅시다.
};
observer.register('bossSpeak', programmer.drop, programmer);
// 무념무상이 준비되었습니다.

boss.speak('... for an hour ...'); // 이제 사장님이 뭐라고 (한시간 동안)말씀을 하시면,
// 옵저버에 등록한 대로 자동으로
// manager.listen("... for an hour ...");     // 팀장님은 새겨듣고,
// programmer.drop("... for an hour ...");    // 개발자는 흘려 듣게 됩니다.
