import React, { Component } from 'react'
import ReactDOM from 'react-dom'

const styles = {
  app: {
    paddingTop: 40,
    textAlign: 'center',
  },
}

class App extends Component {
  render() {
    return (
      <div style={styles.app}>
        App React with full setup -> Webpack + Babel + React
      </div>
    )
  }
}

const root = document.querySelector('#app')
ReactDOM.render(<App />, root)