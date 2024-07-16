// 1 What give picca will print

String.prototype.givePizza = () => 'Just give pizza!';
const name = 'Mau';

console.log(name.givePizza())


// Make function which print: "Mau, just give pizza!"

String.prototype.givePizzaToHim = function() { return  this + ', just give pizza!'};
console.log(name.givePizzaToHim())


// 2 what diameter and perimeter will print
const shape = {
    radius: 10,
    diameter() {
        return this.radius * 2;
    },
    perimeter: () => 2 * Math.PI * this.radius,
}

console.log(shape.diameter());
console.log(shape.perimeter());

// fix it

shape.perimeter = function() { return 2 * Math.PI * this.radius };
console.log(shape.diameter());
console.log(shape.perimeter());
