// htmlcollection vs nodelist

const log = console.log

// returns NodeList
// 정적 처리
const fruits = document.querySelectorAll('.fruits');
log('Nodelist', fruits)



// 동적 처리 (live)
const fruits2 = document.querySelector('.fruits');
const childFruit = fruits2.childNodes;
log(fruits2, childFruit)


// returns HTMLCollection (using item method)
// className, tagName
const fruits3 = document.getElementsByClassName('fruits');
fruits3.item(0).classList.add('apples')
log(fruits3)

// handle nodes
const allEl = document.getElementsByTagName("*")
let elements = document.getElementsByTagName('li');
log(allEl)
log(elements)
let iter = elements[Symbol.iterator]()

log(iter.next())
log(iter.next())
log(iter.next())
let printIter = [...iter].forEach(e => log(e)); // 4 출력
log(iter.next())
log(iter.next())

let elementsArr = [...elements].forEach(e => { e.style.color = "teal"; })

// tomato 색체 변경

const liClassName = document.getElementsByClassName("tomato");

for (const element of fruits3) {
    element.className = 'tomato'
    // 클래스를 변화하면 className을 가져오면 첫번째 녀석의 클래스는 tomato
}

[...liClassName].forEach(e => { e.style.color = "tomato"; })

// 따라서 className, tagName 사용시 주의할 것

// nodeList도 childNodes 프로퍼티 사용시 주의

// 무조건 배열로 변환해서 사용할 것

const tomato = document.querySelector('.tomato');

log(tomato.childNodes) // textNode

// 텍스트 핸들링 시 textContent 사용할 것

// XSS

const btn = document.querySelector(".btn")
const textArea = document.getElementById("textarea")

btn.addEventListener("click", (event) => {
    event.preventDefault()

    const makeEl = document.createElement("li");
    log(textArea.innerHTML)
    // createTextNode
    makeEl.innerHTML = textArea.innerHTML
    const getEl = document.querySelectorAll("li")

    getEl[getEl.length - 1].append(makeEl)
    // getEl.insertBefore(makeEl, getEl.lastElementChild)

})

// https://html5sec.org/
// </script><script>alert('You have an XSS vulnerability!')</script>

// attr 확인

const { attributes } = btn
log(attributes)
log(attributes.class)
log(attributes.type)

// DOM 프로퍼티는 사용자의 입력에 의한 상태 변화에 반응하여 최신 상태 유지
const title = document.getElementById("title")
title.textContent = "Title 값 변경"
textArea.addEventListener("keyup", () => {
    title.textContent = textArea.value
})

const subTitle = document.getElementById("sub-title");
subTitle.dataset.text = '서브타이틀'

console.log(subTitle.dataset)
