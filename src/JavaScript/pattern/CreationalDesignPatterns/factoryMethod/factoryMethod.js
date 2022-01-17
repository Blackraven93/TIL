class Creator {
    
    factoryMethod() {}
    someOperation() {
        const product = this.factoryMethod();
        return `Creator: The same creattor's code has just worked with ${product.operation()}`;
    }
}

class ConcreteCreator1 extends Creator {
    factoryMethod() {
        return new ConcreteProduct1();
    }
}

class ConcreteCreator2 extends Creator {
    factoryMethod() {
        return new ConcreteProduct2();
    }
}

class ConcreteProduct1 {
    operation() {
        return "Result of the ConcreteProduct1";
    }
}

class ConcreteProduct2 {
    operation() {
        return "Result of the ConcreteProduct2";
    }
}

const clientCode = creator => {
    console.log("Client: I'm not aware of the creator's class, but it still works.")
    console.log(creator.someOperation())
}

console.log(' ')
console.log('ConcreteCreator1.');
clientCode(new ConcreteCreator1());
console.log(' ')

console.log('ConcreteCreator2.');
clientCode(new ConcreteCreator2());
console.log(' ')


// 적용 예시


class Greeting {
    say () {
        return "Hi, I am " + this.name + " and I am a " + this.type
    }
}

class Developer extends Greeting {
    constructor(name) {
        super()
        this.name = name
        this.type = "Developer"
    }
}

class Tester extends Greeting {
    constructor(name) {
        super()
        this.name = name
        this.type = "Tester"
    }
}

class EmployeeFactory {
    create(name, type) {
        switch(type) {
            case 1:
                return new Developer(name)
            case 2:
                return new Tester(name)
        }
    }
}



const employeeFactory = new EmployeeFactory()
const employees = []

employees.push(employeeFactory.create("Patrick", 1))
employees.push(employeeFactory.create("John", 2))
employees.push(employeeFactory.create("Jamie", 1))
employees.push(employeeFactory.create("Taylor", 1))
employees.push(employeeFactory.create("Tim", 2))

employees.forEach( emp => {
  console.log(emp.say())
})