// what these operators willl print

console.log(true || false) // true
console.log(1 || false) // 1
console.log(0 || false) // false
console.log('string' || false) // string
console.log(0 || false || 'string' || 1) // string
console.log(false || 0 && 5) // 0
console.log(true || 1 && 5) // true
console.log(true && false) // false
console.log(false && true) // false
console.log(1 && 0 && 5) // 0
console.log(1 && 5 || 7) // 5