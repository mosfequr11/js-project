// Invoking a Function with a Function Constructor
//Invoking a function Constructor
function myInfo(arg1, arg12) {
  this.age = arg1;
  this.address = arg12;
}
// show undefined
// console.log(myInfo(23, "Mirpur"));
const x = new myInfo(23, "Mirpur");
//  data showing as an object
console.log(x);
console.log(x.age);
