class Overloading {
    raven() {
        return '매개변수 없음'
    }

    raven(a, b) {
        return `${a}매개 변수와 ${b}매개변수가 있음`
    }

    raven(c) {
        return `${c} 매개 변수가 있음`
    }
}


const test = new Overloading()

console.log(test.raven())
console.log(test.raven('black', 'red'))
console.log(test.raven('bird'))