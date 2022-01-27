# Event (이벤트)

## Event 발생 시 해당 이벤트를 처리하기 위해 이벤트 핸들러 등록

### Event type

#### Mouse Event

- click
- dbclick
- mousedown
- mouseup
- mousemove
- mouseenter
- mouseover
- mouseleave
- mouseout

#### Keyboard Event

- keydown
- ~~keypress~~ (폐지)
- keyup

#### Focus Event

- focus
- blur
- focusin
- focusout

#### Form Event

- submit
- reset

#### Value change Event

- input(text, checkbox, radio), select, textarea
- change
- readystatechange

#### DOM Mutation Event

- DOMContentLoaded : 파싱이 완료 되었을 때

#### View Event

- load : DOMContentLoaded 발생한 이후 모든 리로스의 로딩이 완료되었을 때
- unload
- abort
- error