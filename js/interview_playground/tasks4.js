Promise.all2 = (arr) => {
    return new Promise((resolve, reject) => {
        let results = [];
        let finished = 0;
        arr.forEach((p, index) => {
            p.then(res => {
                results[index] = res;
                finished++;
                if(finished === arr.length) { resolve(results); }
            }).catch((err) => {
                reject(err);
            })
        })
    });
}

function fetch2(number, delay) {
    return new Promise(res => {
        setTimeout(() => {
            res(number);
        }, delay)
    }) 
}

Promise.all(
    [
        Promise.resolve(1),
        fetch2(20, 5000),
        fetch2(30, 2000),
        fetch2(40, 3000),
        Promise.resolve(10),
    ]
).then(result => {
    console.log(result,  ' = [1, 20, 30, 40, 10]')
})

Promise.all2(
    [
        Promise.resolve(1),
        fetch2(20, 5000),
        fetch2(30, 2000),
        fetch2(40, 3000),
        Promise.resolve(10),
    ]
).then(result => {
    console.log(result,  ' = [1, 20, 30, 40, 10]')
})

