# DOM & Event

## Node

```html
<div class="greeting">Hello</div>
```

**이때 노드를 나눠 보면다면**

- document 노드 : document
- 요소 노드 : div
- 텍스트 노드 : "Hello"
- 어트리뷰트 노드 : class="greeting"

### NodeList vs HTMLCollection

- 차이점은 동적과 정적

### 요소 노드 취득

- 없다면 return value = null

### 다수의 HTMLCollection & NodeList 시 배열로 전환할 것

### textContent vs innerText

- CSS 고려( 종속 ) => textContent 보다 느림
- innerText(Firefox : 2 ~ 44)
- textContent(IE : 6 ~ 8 )

### innerHTML

- XSS 공격에 취약
- 자식 노드 제거 새롭게 생성하여 DOM에 반영
  - 리플로우와 리페인팅 여지가 많음
- 위치 조정이 힘듬

#### insertAdjacentHTML

#### dangerouslySetInnerHTML

#### DocumentFragment

```html
<>
    <section>
        <div></div>
    </section>
</>
```

#### Attribute

- DOM 프로퍼티는 사용자의 입력에 의한 상태 변화에 반응하여 최신 상태 유지

#### data, dataset