String.prototype.givePizza = () => 'Just give pizza!';
const name = 'Mau';

console.log(name.givePizza())


String.prototype.givePizzaToHim = function() { return  this + ', just give pizza!'};
console.log(name.givePizzaToHim())