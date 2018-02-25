class Cat {
  name = 'Tom'
  state = {
    running: true
  }

  constructor() {
    console.log(this.name, this.state.running)
  }
}

new Cat()