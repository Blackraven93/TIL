# Regular Expression(정규 표현식)

## 구성 

- 패턴
- 플래그

### 사용법

```javascript

regexp = new RegExp("pattern", "flags");

// shortcut
regexp = /pattern/;
regexp = /pattern/gmi

```

모든 정규식은 내장 클래스 RegExp의 인스턴스가 됨

생성자 함수는 동적으로 정규식을 생성할 때 사용

```javascript

let tag = prompt("어떤 태그를 찾고 싶나요?", "h2")

let regexp = new RegExp(`<${tag}>`);

```

### Flag

- i : 대소문자 구분 없이 검색
- g : 패턴과 일치하는 모든 것들을 찾아냄( 없다면 첫번째 결과 )
- m : 다중 행 모드를 활상화
- s : 개행 문자 \n 도 포함하도록 활성화
- u : 유니코드 전체 지원
- y : 문자 내 특정 위치에서 검색을 진행

#### 유니코드: 'u'플래그

### method

- match : str.match(reg) // null || array
- replace : str.replace(reg, replacement) // str
- test : reg.test(str) // boolean


#### string pattern
- \d : 숫자 0에서 9사이의 문자 (계산기에 이용해도 좋겠다.)
- \s : 스페이스
- \t : 탭
- \n : 줄 바꿈
- 이밖에 \v, \f, \r 등
- \w : 라틴 문자, 숫자, 밑줄 _ 등을 포함한다.
- . : 정규 표현식 's'플래그가 있으면 모든 문자, 없으면 줄 바꿈(\n)을 제외한 모든 문자
- \u : 정규 표현식에서 유니코드 관련 기능을 활성화
- \p : 유니코드 프로퍼티를 검색에 사용할 수 있음 
- \b : 단어 경계에 대응한다.
  - 어느 한쪽은 word character([_a-zA-Z0-9])이고 다른 쪽은 non-word character([^_a-zA-Z0-9])인 지점
  - 문자열의 시작 또는 끝의 사이 역시 word boundary

##### 반대

- \D : 숫자가 아닌 문자 (\d와 일치하지 않는 일반 글자 등의 모든 문자)
- \S : 공백이 아닌 문자
- \W : 단어에 들어가지 않은 문자
- \B : 단어 경계가 아닌 부분에 대응

### 앵커
- 문자열 시작 ^
- 문자열 끝 $
  
**주의할점은 m 플래그를 사용하면 작동에 영향을 준다.**

### Set & Ranges

#### Sets

- [jae] 일 때 'j', 'e', 'o'를 셋중에 하나라도 나오면 찾겠다는 의미.

#### Ranges

- [0-9] : 숫자 범위 === \d
- [a-zA-Z] : 문자 범위
- [a-zA-Z_] === \w
- [\t\n\v\f\r] === \s

#### 반대(Excluding ranges)

- [^aeyo] 일 때 "a", "e", "y", "o"를 제외한 문자라는 의미
- [^0-9] === \D
- [^\s] === \S

#### 특수문자

- 특수문자는 이스케이프 문자를 사용하지 않는다 (\ : 백슬래쉬)
- [-().^+]

### Quantifiers +, *, ?, {n}

- {n} : 직접 개수를 지정할 수 있음
- {x,y} : 개수의 범위 설정 가능
- {n,} : n개 이상
- \d+ : \d{1,} 숫자 모두
- \d? : \d{0,1} 한개라도 있다면
- \d* : \d{0,} 0개 이상


### 정규표현식 알고리즘

#### Greedy mode Lazy mode
1. For every position in the string
2. Try to match the pattern at that position.
3. If there’s no match, go to the next position.


#### OR |

