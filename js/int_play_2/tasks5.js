// faltterm array and calculate sum
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

console.log(sum(array)) // 8