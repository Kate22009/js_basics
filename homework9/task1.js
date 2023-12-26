// Function 1: Returns a promise that resolves after a given time
function asyncFunction1() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve('Result from asyncFunction1');
      }, 1000); // Resolves after 1 second
    });
  }
  
  // Function 2: Returns a promise that resolves after a given time
  function asyncFunction2() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve('Result from asyncFunction2');
      }, 1500); // Resolves after 1.5 seconds
    });
  }
  
  // Function 3: Takes two inputs, adds them, and returns the result as a promise
  function asyncFunction3(a, b) {
    return new Promise((resolve) => {
      resolve(a + b);
    });
  }
  
  // Using .then block to print results sequentially
  asyncFunction1()
    .then((result1) => {
      console.log(result1);
      return asyncFunction2();
    })
    .then((result2) => {
      console.log(result2);
      return asyncFunction3(3, 4); // Passing 3 and 4 as inputs to asyncFunction3
    })
    .then((result3) => {
      console.log(result3);
    })
    .catch((error) => {
      console.error('Error:', error);
    });
  