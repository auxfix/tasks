function test(a, b, c, d, e){
    return a + b + c + d + e;
}

const testC  = curring(test);


console.log(testC(1)(2)(3,4)(1)(3)(4)) // 11 - Too many arguments


function curring(func) {
    let flength = func.length;
    let argsInternal = [];
    return function cur(...args) {
        argsInternal = [...argsInternal, ...args];
        if(argsInternal.length > flength) {
            console.log('Too many arguments')
            return cur;
        };
        let argsToCall = [
            ...argsInternal, 
            ...(new Array(flength - argsInternal.length)).fill(0)
        ];
        
        console.log(func(...argsToCall));

        return cur;
    }
}