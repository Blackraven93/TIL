class Calculator {
    constructor() {
        this.value = 0
    }

    add(valueToAdd) {
        this.value += valueToAdd
    }

    subtract(valueToSubTract) {
        this.value -= valueToSubTract
    }

    multiply(valueToMultiply) {
        this.value *= valueToMultiply
    }

    divide(valueToDivide) {
        this.value /= valueToDivide
    }
}

const calculator = new Calculator()
calculator.add(10)
console.log(calculator.value)
calculator.divide(2)
console.log(calculator.value)
