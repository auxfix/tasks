// context assignment. what will print these function

const obj ={
    name: 'Colin',
    prop: {
        name: 'Rox',
        getname: function() {
            return this.name;
        },
        arrow: () => this.name,
        arrowInsideFunction: function() {
            return () => console.log(this.name)
        }
    }
}

console.log(obj.prop.getname()); // Rox

const test = obj.prop.getname;
console.log(test()); // undefined


console.log(test.call(obj.prop)); // Rox
console.log(test.apply(obj)); // Colin
console.log(test.bind(obj)); // function
console.log(test.bind(obj).bind(obj.prop)()); // Colin
console.log(obj.prop.arrow()); // undefined

obj.prop.arrowInsideFunction()() // Rox