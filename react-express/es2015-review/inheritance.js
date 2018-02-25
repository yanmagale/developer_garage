
class SquareCalculator {
  constructor(value) {
    this.value = value
  }

  calculate() {
    return this.value * this.value
  }
}

class CubeCalculator extends SquareCalculator {
  calculate() {
    return this.value * super.calculate()
  }
}

const cuber = new CubeCalculator(3)
console.log(cuber.calculate())
