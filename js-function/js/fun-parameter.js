// JavaScript function definitions do not specify data types for parameters.
// JavaScript functions do not perform type checking on the passed arguments.
// JavaScript functions do not check the number of arguments received.

// Arguments are passed by value
// x and y are function parameters
function argumentsPassed(x, y) {
  x = x * 2;
  console.log(x);
  return x * y;
}

let m = 4;
let n = 2;
// The parameters, in a function call, are the function's arguments.
// JavaScript arguments are passed by value: The function only gets to know the values, not the argument's locations.
// If a function changes an argument's value, it does not change the parameter's original value.
// console.log(argumentsPassed(6, 7));
// m and n are function arguments and store the argument value
console.log(argumentsPassed(m, n));
