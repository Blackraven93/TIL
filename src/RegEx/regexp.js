// 이왕이면 안쓰는게 좋음 그렇다면 언제?? 정규식이 동적으로 변화할 때 생성자 함수 사용
// let regexp = new RegExp("pattern", "flags");

// regexp = /pattern/
// regexp = /pattern/gmi;


let string = "raven is black. it can fly!!";

let result = string.match(/an/gi);

console.log(result[0]);
console.log(result.length);
console.log(result.index);
console.log(result.input);

let result2 = string.match(/an/i);

console.log(result2[0]);
console.log(result2.length);
console.log(result2.index);
console.log(result2.input);

let matches = "Raven".match(/bird/);
console.log(matches) // null

matches = "Raven".match(/bird/) || [];
console.log(matches)

// 원시값 문자열 교체
matches = "my black raven".replace(/my/i, "I'm");
console.log(matches)

matches = "my black raven, Raven is bird".replace(/raven/gi, "parrot");
console.log(matches)

// $&
matches = "I love Javascript".replace(/javascript/i, "html, css and $&")
console.log(matches)

// $`
matches = "I love Javascript".replace(/javascript/i, "I really $`")
console.log(matches)

// boolean

let str = "I love bird";
let regexp = /Love/i;

console.log(regexp.test(str));

// 숫자 판별

str = "+82-5094-1145";
regexp = /\d/
console.log(str.match(regexp));
console.log([...str].find((e) => !isNaN(Number(e))))

str = "+82-5094-1145";
regexp = /\d/g
console.log(str.match(regexp).join(""));

str = "my tall is 181cm"
regexp = /\d{3,}cm/gi
console.log(str.match(regexp));

str = "this is fucking regexp"
regexp = /\s\w\w\s/g
console.log(str.match(regexp));

str = "+82-1234-5678";
regexp = /\d/g
console.log(str.match(regexp).join(""));

str = "+82-1234-5678";
regexp = /\D/g
console.log(str.replace(regexp, ""));

regexp = /ja.a/;

console.log(regexp.test("java"))
console.log(regexp.test("jaza"))
console.log(regexp.test("jaqa"))

// 공백 주의
str = "1 - 5"
regexp = /\d-\d/;
console.log(str.match(regexp)); // null

regexp = /\d - \d/
console.log(str.match(regexp));

str = "I love you in chinese to say 你好"
regexp = /\p{sc=Han}/gu;
console.log(str.match(regexp));

regexp = /\p{Sc}\d/gu;

str = `Prices: $2, €1, ¥9`;

console.log(str.match(regexp)); // $2,€1,¥9

str = "raven is black";
console.log(/^raven/.test(str))
console.log(/black$/.test(str))
console.log(str.startsWith("raven"))
console.log(str.endsWith("black"))

// 두 앵커를 동시에 사용할 때 => 완벽하게 일치할 때
str = "12:35"
console.log(/^\d\d:\d\d$/.test(str));
str = "12:9"
console.log(/^\d\d:\d\d$/.test(str));

str = `1st
2nd
3rd
4rd`;

console.log(str.match(/^\d/gm));
console.log(str.match(/^\d/g));
console.log(str.match(/\d\w+\n/gm));

console.log("Hello, Javascript!".match(/\bHello\b/g))
console.log("Hello, Javascript!".match(/\bJavascript\b/g))
console.log("Hello, Javascript!".match(/\bHell\b/g))
console.log("Hello, Javascript!".match(/\bJavascript!\b/g)) // 무조건 단어랑 단어랑 경계


console.log("time is 1:1".match(/\d\:\d/)); // \escape 
console.log("time is 1:1".match(/\d.\d/));

// 생성자 함수 사용시 이스케이프 두번
regexp = new RegExp("\d\.\d");

console.log("Chapter 5.1".match(regexp));

regexp = new RegExp("\\d\\.\\d");
console.log("Chapter 5.1".match(regexp));

// 특수 문자들을 문자 그자체로 만들기 위해선 이스케이프(backslash 사용) ex [ \ ^ $ . | ? * + ( )

str = "Raven love to go Oaio"
regexp = /[rlo]a/gi
console.log(str.match(regexp));

str = "Voila";
regexp = /V[oi]la/
console.log(str.match(regexp)); // null
// why?? answer is Vola or Vila

str = "reblackraven@gmail.com";
regexp = /[^\d\sA-Z]/gi
console.log(str.match(regexp).join(""));

str = "1 + 2 - 3 = 0"
regexp = /[-().^+]/g;
console.log(str.match(regexp));