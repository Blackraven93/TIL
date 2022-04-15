import Component from './component.js';

let currentStateKey = 0; // useState가 실행 된 횟수

const states = []; // state를 보관할 배열
function useState(initState) {
  // initState로 초기값 설정
  const key = currentStateKey;
  if (states.length === key) {
    states.push(initState);
  }
  // state 할당
  const state = states[key];
  const setState = (newState) => {
    // 동일 값 개선
    if (newState === state) return;

    if (JSON.stringify(newState) === JSON.stringify(state)) return;
    //
    states[key] = newState;
    render();
  };

  currentStateKey += 1; // render에서 초기화
  return [state, setState];
}

function Counter() {
  const [count, setCount] = useState(1);

  window.increment = () => setCount(count + 1);

  return `
    <div>
      <strong>count: ${count} </strong>
      <button onclick="increment()">증가</button>
    </div>
  `;
}
function Cat() {
  const [cat, setCat] = useState('고양이');

  window.meow = () => setCat(cat + ' 야옹!');

  return `
    <div>
      <strong>${cat}</strong>
      <button onclick="meow()">고양이의 울음소리</button>
    </div>
  `;
}

const render = () => {
  const $app = document.querySelector('#app');
  $app.innerHTML = `
    <div>
      ${Counter()}
      ${Cat()}
    </div>
  `;
  // 이 시점에 currentStateKey는 2가 될 것이다.
  // 그래서 다시 0부터 접근할 수 있도록 값을 초기화 해야 한다.
  currentStateKey = 0;
};

console.log(Component);

render();
