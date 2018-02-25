class Calculator {
  constructor(value1, value2) {
    this.value1 = value1
    this.value2 = value2
  }

  static multiply(value1, value2) {
    return value1 * value2
  }

  sum() {
    return this.value1 + this.value2
  }
}

const calc = new Calculator(2, 3)

console.log(calc.sum())
console.log(Calculator.multiply(2, 3))