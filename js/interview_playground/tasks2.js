async function f() {
    console.log(1);
    const promise = new Promise((resolve) => {
        console.log(2);
        setTimeout(() => {
            console.log(3);
            resolve('готово!')
            console.log(4);
        })
    });

    console.log(5);

    const result = await promise;
    console.log(6);
    console.log(result);
    return 'Result';
}

f();
console.log(7);

// what does it print?

// 1,2,5,7,3,4,6,готово!


// what will i print

let i = 0;

while(i++ < 10) {
    setTimeout(() => {
        console.log(i);
    },0)
}
