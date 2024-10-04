// Debounce
// ---------------------------------------
const fetchUrl = (url) => {
    console.log(`fetching ${url}...`);
  }
  
  function debounce(callback, delay) {
  
  }
  
  const fetching = debounce(fetchUrl, 300);
  
  let startTime =  200;
  for (let i = 0; i < 10; i++) {
    setTimeout(() => {fetching(i)}, startTime * i)
  }
  
  // Result: fething 9...
  // ------------------------------------------
  
  
  
  // ==========================================
  
  // Carry
  // -----------------------------------------
  function carry(a) {
  
  }
  
  carry(1)(3)(10);
  
  // Result: 1,4,14
  // -----------------------------------------
  
  // =========================================
  
  
  
  
  // Replace
  // -----------------------------------------
  function replace(string, from, to) {
  
  }
  
  
  console.log(replace("Hello World One Time", 'One', "Two"));
  // Result: Hello World Two Time
  
  console.log(replace("Hello Hello One Time", 'Hello', "Two"));
  // Result: Two Two One Time
  // -----------------------------------------
