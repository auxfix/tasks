// Replace solution

function replace(string, from, to) {
    return string.split(from).join(to)
}

 
console.log(replace("This is a very good day", 'day', "night"));
// Result: This is a very good night

console.log(replace("I love sunday. Because  every sunday i meet my parents.", 'sunday', "saturday"));
// Result: I love saturday. Because every Saturday i meet my parents.

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