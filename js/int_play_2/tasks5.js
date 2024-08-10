// flattern array and calculate sum
const array = [1, 1, [1, [1, 2], 1] , [1]]

const sum = (arr) => {
    let sum = 0;

    while(arr.length > 0) {
        let el = arr.pop();
        if (Array.isArray(el)){
           arr.push(...el);
        } else {
            sum += el;
        }
    }

    return sum;

}

const sumRec = (el) => {
    if(Array.isArray(el)) {    
        return el.reduce((acc, item, _) => {
            acc += sumRec(item);
            return acc;
        },0)     
    } else {
        return el; 
    }
}

console.log(sum(array.slice())) // 8
console.log(sumRec(array.slice())) // 8