const arr = ['one!', 'two!', 'three!', 'four!']
const [one, two, ...rest] = arr

console.log(arr, one);

const obj = {a: 'x', b: 'y', c: 'z'}
const {a, b, c} = obj
console.log(a);