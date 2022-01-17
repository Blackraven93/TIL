# Jquery 1.0.1 버전을 분석해 봅니다.

1. jQuery function 정의

2. jQuery.fn = jQuery.prototype 정의
    - size
    - get
    - each
    - index
    - attr
    - css
    - text
    - wrap
    - append
    - prepend
    - before
    - after
    - end
    - find
    - clone
    - filter
    - not
    - add
    - is
    - domManip
    - pushStack

3. jQuery.extend = jQuery.fn.extend 정의
   
4. jQuery.extend에만 정의
    - init
    - each
    - className
    - swap
    - css
    - curCSS
    - clean
    - expr
    - token
    - find (겹치는데 뭐지) (굉장히 김)
    - getAll
    - attr
    - parse
    - filter
    - trim
    - parents
    - sibling
    - merge
    - grep
    - map
    - event
      - add
      - remove
      - trigger
      - handle
      - fix
  
5. jQuery.macros
    - to
      - appendTo
      - prependTo
      - insertBefore
      - insertAfter
    - css
    - filter
    - attr
      - val
      - html
      - id
      - title
      - name
      - href
      - src
      - rel
    - axis
      - parent
      - ancestors
      - parents
      - next
      - prev
      - siblings
      - children
    - each
      - removeAttr
      - show
      - hide
      - toggle
      - addClass
      - removeClass
      - toggleClass
      - remove
      - empty
      - bind
      - unbind
      - trigger

6. jQuery.init();
7. jQuery.fn.extend
    - _toggle
    - toggle
    - hover
    - ready

8. jQuery.extend()
    - ready

9. new function(){}
    
10. jQuery.fn.extend()
    - show
    - hide
    - slideDown
    - slideUp
    - slideToggle
    - fadeIn
    - fadeOut
    - fadeTo
    - animate
    - queue

11. jQuery.extend
    - setAuto
    - speed
    - queue
    - dequeue
    - fx

12. jQuery.fn.loadIfModified

13. jQuery.fn.load
    - jQuery.ajax

14. new function() {}

15. jQuery.extend
    - get
    - getIfModified
    - getScript
    - post
    - ajaxTimeout
    - ajax
    - httpSuccess
    - httpNotModified
    - httpData
    - param