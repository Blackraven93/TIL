class Bird {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    info() {
        return `새의 이름은 ${this.name}, 나이는 ${this.age} 입니다.`
    }
}

class Eagle extends Bird {
    constructor(name, age, eagle) {
        super(name, age)
        this.eagle = eagle
    }

    fly() { 
        return `${this.eagle}은 날 수 있다.`
    }

    info() {
        console.log(this.fly())
        return super.info()
    }
}

const eagle = new Eagle("Riki", 22, 'hoo');
console.log(eagle.info())
