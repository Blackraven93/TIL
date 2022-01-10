# TDD (Test-Driven-Development)

## 단위 테스트 (Unit Test)

### 단위(Unit)

**특정 조건에서 어떻게 작동해야 할지 정의한 것.(대개 함수로 표현)**

- 패턴
  1. 준비(arrange)
  2. 실행(act)
  3. 단언(assert)


테스트 코트 작성
- 적색(Red), 녹색(Green), 리팩터(Refactor) 순환
  - 적색
  - 녹색
  - 리팩터

1. 관심사의 분리(단일 책임의 원칙)
2. 전역변수 선언(open close 원칙)

테스트할 수 있는 방법??
1. 모듈 패턴
    **함수로 데이터를 감추고, 모듈 API를 담고 있는 객체를 반환하는 형태**
    - 임의 함수를 호출하여 생성하는 모듈
    - 즉시 실행 함수(IIFE)기반의 모듈

    - 임의 모듈 패턴 (보통 여러 객체가 필요할 때)
        ```javascript
        // 이름 공간으로 활용
        var app = app || {}

        // 이름공간에 함수를 추가. 의존성있는 God 함수를 주입
        app.person = function (god) {
            var name = god.makeName()

            return {
                getName: function() {return name},
                setName: function(newName) {name = newName}
            }
        }

        const person = app.person('raven')
        person.getName()
        ```
    - 즉시 실행 함수(IIFE) 모듈 패턴 (싱글톤 인스턴스가 됨 => 하나의 객체만을 만들 때)
        ```javascript
        var app = app || {}
        app.person = (function() {
            let name = ""

            return {
                getName(god) {
                    name = name || god.makeName()
                    return name
                }
                setName(newName) {name = newName}
            }
        })() // 함수 선언 즉시 실행. 싱글톤

        app.person.getName(god)
        ```
      