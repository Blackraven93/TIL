# Typescript

## Type

### Typescript 계층 구조

![Typescript's type hierarchy](https://www.oreilly.com/library/view/programming-typescript/9781492037644/assets/prts_0301.png)

- any: 뭐든지 타입 선언 가능 (최대한 사용하지 말 것)
- unknown: any와 같이 모든 값을 대표 하지만 타입을 검사하고 값을 사용할 수 없게 강제

### Typescript 에서 객체를 정의하는 방법

1. 객체 리터럴 또는 형태라 불리는 표기법({a: string})
객체가 어떤 필드를 포함할 수 있는지 알고 있거나 객체의 모든 값이 같은 타입을 가질 때 사용
2. 빈 객체 리터럴 표기법({}). 이 방법은 사용하지 말 것
3. object 타입. 어떤 필드를 가지고 있는지는 관심 없고, 그저 객체가 필요할 때
4. Object 타입, 사용하지 않는 것이 좋음

**첫 번째 및 세 번째 방법을 이용해야 한다**

### null, undefined, void, never

- null : 값이 없음
- undefined : 아직 값을 변수에 할당하지 않음
- void : return문을 포함하지 않음
- never : 절대 반환하지 않는 함수