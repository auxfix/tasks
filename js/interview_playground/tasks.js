// 1 What give picca will print

String.prototype.givePizza = () => 'Just give pizza!';
const name = 'Mau';

console.log(name.givePizza())


// Make function which print: "Mau, just give pizza!"

String.prototype.givePizzaToHim = function() { return  this + ', just give pizza!'};
console.log(name.givePizzaToHim())


// 2 what diameter and perimeter will print

function diameter() {
    return this.radius * 2;
};

const shape = {
    radius: 10,
    diameter() {
        return this.radius * 2;
    },
    perimeter: (() => 2 * Math.PI * this.radius).bind({radius: 10}),
}

console.log(shape.diameter());
console.log(shape.perimeter());

// fix it

shape.perimeter = function() { return 2 * Math.PI * this.radius };
console.log(shape.diameter());
console.log(shape.perimeter());


// write delay function implementation

delay(5000).then(() => console.log('Hello !'));


function delay(interval){
    return new Promise((resolve, reject) => {
        let progress = true;
        let progressCount = 1;
        setTimeout(() => {progress = false; resolve();} , interval);
        let timeout = setInterval(() => {
            if(!progress){
                clearTimeout(timeout);
                return;
            }
            let leftOver = progressCount % 4;
            process.stdout.clearLine();  // clear current text
            process.stdout.cursorTo(0);  // move cursor to beginning of line
            process.stdout.write(Array(leftOver).fill(6).reduce((acc) => {
                return acc+'.';
            },'') + '\r');
            progressCount++;
            
        }, 300)
    }) 
}