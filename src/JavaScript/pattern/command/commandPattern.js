class Calculator {
    constructor() {
        this.value = 0
        this.history = []
    }

    executeCommand(command) {
        this.value = command.execute(this.value)
        this.history.push(command)
    }

    undo() {
        const command = this.history.pop()
        this.value = command.undo(this.value)
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

class AddCommand {
    constructor(valueToAdd) {
        this.valueToAdd = valueToAdd
    }

    execute(currentValue) {
        return currentValue + this.valueToAdd
    }

    undo(currentValue) {
        return currentValue - this.valueToAdd
    }
}
class SubtractCommand {
    constructor(valueToSubTract) {
        this.valueToSubTract = valueToSubTract
    }

    execute(currentValue) {
        return currentValue - this.valueToSubTract
    }

    undo(currentValue) {
        return currentValue + this.valueToSubTract
    }
}
class MultiplyCommand {
    constructor(valueToMultiply) {
        this.valueToMultiply = valueToMultiply
    }

    execute(currentValue) {
        return currentValue * this.valueToMultiply
    }

    undo(currentValue) {
        return currentValue / this.valueToMultiply
    }
}
class DivideCommand {
    constructor(valueToDivide) {
        this.valueToDivide = valueToDivide
    }

    execute(currentValue) {
        return currentValue / this.valueToDivide
    }

    undo(currentValue) {
        return currentValue * this.valueToDivide
    }
}

class AddThenMultiplyCommand {
    constructor(valueToAdd, valueToMultiply) {
        this.addCommand = new AddCommand(valueToAdd);
        this.multiplyCommand = new MultiplyCommand(valueToMultiply)
    }

    execute(currentValue) {
        const newValue = this.addCommand.execute(currentValue)
        return this.multiplyCommand.execute(newValue)
    }

    undo(currentValue) {
        const newValue = this.multiplyCommand.undo(currentValue)
        return this.addCommand.execute(newValue)

    }
}


const calculator = new Calculator()
calculator.executeCommand(new AddCommand(10))
calculator.executeCommand(new MultiplyCommand(5))
console.log(calculator.value)
// undo and command
calculator.undo()
calculator.undo()
calculator.executeCommand(new AddCommand(10))
calculator.executeCommand(new DivideCommand(2))
console.log(calculator.value)
// double command combine
calculator.executeCommand(new AddThenMultiplyCommand(10, 2))
console.log(calculator.value)
