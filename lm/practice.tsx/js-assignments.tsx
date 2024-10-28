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
  
  
  console.log(replace("This is a very good day", 'day', "night"));
  // Result: This is a very good night
  
  console.log(replace("I love sunday. Because  every sunday i meet my parents.", 'sunday', "saturday"));
  // Result: I love saturday. Because every Saturday i meet my parents.
  // -----------------------------------------

  // Find missing number in array

  function missed(array) {
    // может быть не сортирован
    // всегда валиден и содержит 1 пропущенное число
    // всегда массив чисел
    // вернуть пропущенное число в ряду чисел
  }
  console.log(missed([0, 1, 3, 4])); // 2
  console.log(missed([-2, 0, 1, 2])); // -1
  console.log(missed([1, 3, 2, -1])); // 0
