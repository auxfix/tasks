function test(a, b, c, d, e){
    return a + b + c + d + e;
}

const testC  = curring(test);
const testC2  = curring2(test);
const testC3  = curring2(test);


console.log(testC(1)(2)(3,4)(1)(3)(4)) // 11 - Too many arguments
console.log(testC2(1, 2, 3, 4, 1)); // 11
console.log(testC3(1)(2)(3,4)(1)) // 11

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

function curring2(func){
    let allArgs = [];
    return function cur(...args) {
        allArgs = [...allArgs, ...args]
        if(allArgs.length === func.length) {
            return func(...allArgs);
        } else {
            return cur;
        }
    }
}