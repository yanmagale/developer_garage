const defaultStyle = {
  color: 'black',
  fontSize: 12,
  fontWeight: 'normal'
}

const style = {
  ...defaultStyle,
  fontWeight: 'bold',
  backgroundColor: 'white'
}

// Note that fontWeight is 'bold', as the second
// assignment overrode the initial assignment.
console.log(style)