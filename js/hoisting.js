// Hoisting is JavaScript's default behavior of moving declarations to the top.

// x = 5; // Assign 5 to x
// console.log(x);
// var x; // Declare x

// x = 5; // Assign 5 to x
// console.log(x);
// let x; // Declare x

// carName = "Volvo";
// const carName;

// var x = 5; // Initialize x
// var y; // Declare y
// console.log(x + y);
// console.log(x);
// console.log(y);
// y = 7; // Assign 7 to y

// "use strict";
// x = 3.1416;
// console.log(x);

// function myFunction() {
//   "use strict";
//   y = 3.14; // This will cause an error
// }
// // x = 3.14; // This will not cause an error.
// // console.log(x);
// myFunction();

// console.log(this);
const person = {
  firstName: "Mosfequr",
  lastName: "Rahman",
  id: 5566,
  fullName: function () {
    return this.firstName + " " + this.lastName;
  },
  getFullName: function () {
    return this.fullName();
  },
};

const person2 = {
  firstName: "Mehfuz",
  lastName: "Ahamed",
};
// console.log(person.firstName);
// console.log(person.lastName);
// console.log(person.id);
// console.log(person.fullName());
console.log(person.getFullName());
console.log(person.fullName.apply(person2));
