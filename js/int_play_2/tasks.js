// what each of these typeofs prints

console.log(typeof NaN);        // number
console.log(typeof null);       // object
console.log(typeof []);         // object
console.log(typeof Array);      // function
console.log(typeof (() => {})); // function 
console.log(typeof Function);   // function


// what these evaluation will print

console.log([] == [])  // false
console.log([] === []) // false

console.log({} == {})  // false
console.log({} === {}) // false

console.log(NaN == NaN)  // false
console.log(NaN === NaN) // false
console.log(null == undefined)  // true
console.log(undefined == null) // true
console.log(undefined === null) // false