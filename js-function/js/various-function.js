//Show the last digit of the number  //
// function callNumber() {
//   var params = document.getElementById("myNum").value;
//   for (i = 0; i < params.length; i++) {
//     console.log(params[i]);
//     document.getElementById("showNumber").innerHTML = params[i];
//   }
// }

// Invoking a JavaScript Function //
// var a = 6;
// console.log(a);
// function aInvoking() {
//   console.log("I am a function");
// }
// it showing undefined
// console.log(aInvoking());
// Correct invoking the function
// aInvoking();

// function a() {
//   console.log(this);
// }
// a();

// const x = {
//   a: function () {
//     console.log(this);
//   },
// };
// x.a();

// find the maximum number using a function //
// x = findMax(1, 123, 500, 115, 44, 88);
// console.log(x);
// function findMax() {
//   let max = -Infinity;
//   // check total number length
//   // console.log(arguments.length);
//   for (let i = 0; i < arguments.length; i++) {
//     if (arguments[i] > max) {
//       max = arguments[i];
//       //  console.log(max);
//     }
//   }
//   return max;
// }

// get sum passing many variables inside of a function
// x = sumAll(1, 2, 6, 5, 2, 1, 6, 7);
// console.log(x);
// function sumAll() {
//   let sum = 0;
//   for (let i = 0; i < arguments.length; i++) {
//     //check all numbers passed in the function
//     console.log(arguments[i]);
//     sum += arguments[i];
//   }
//   return sum;
// }

// get sum of  passing many variables
// function sum(...args) {
//   let sum = 0;
//   for (let arg of args) {
//     console.log(sum);
//     sum += arg;
//   }
//   return sum;
// }
// let x = sum(1, 2, 6, 5, 2, 1, 6, 7);
// console.log(x);

// function called itself
// (function () {
//   console.log("Hello! I called myself");
// })();

// Objects are Passed by Reference //
// function defination
// here x is a function parameter
// function passedReference(xPram) {
//   xPram.one = 7;
//   console.log(xPram.one);
//   return xPram.one * xPram.two;
// }
// // mObj is a object
// let mObj = {
//   one: 3,
//   two: 4,
// };
//
// console.log(passedReference(mObj));

// receive many arguments
function receiveArguments(x, y) {
  console.log(arguments);
  console.log(x * y);
  // return x * y;
}
console.log(receiveArguments(3, 7, 6, 5));
