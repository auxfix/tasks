// Replace solution

function replace(string, from, to) {
    return string.split(from).join(to)
}


console.log(replace("Hello World One Time", 'One', "Two"));
// Hello World Two Time

console.log(replace("Hello Hello One Time", 'Hello', "Two"));
// Two Two One Time

// ========================

// Carry solution

function carry(a) {
    let sum = a;
    console.log(a);
    return function carryInternal(b) {
      sum+= b;
      console.log(sum);
      return carryInternal;
    }  
  }
  
  carry(1)(3)(10);
  
// 1, 4, 14

// ============================

// Debounce solution

const fetchUrl = (url) => {
  console.log(`fetching ${url}...`);
}
  
function debounce(callback, delay) {
    let timeout; 
    return function db(arg) {
        if(timeout) {
            clearTimeout(timeout);
            timeout = setTimeout(() => {
                callback(arg)
            }, delay);
        } else {
            timeout = setTimeout(() => {
                callback(arg);
            }, delay);
        }
    } 
}

const fetching = debounce(fetchUrl, 200);

let startTime =  200;
for (let i = 0; i < 10; i++) {
    setTimeout(() => {fetching(i)}, startTime)
}