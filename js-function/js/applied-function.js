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
// console.log(x);
// console.log(x.age);

//
// Invoking a JavaScript Function
var D = 6;
function f() {
  console.log("I am a function");
}
// f();
// console.log(D);
function p() {
  console.log(this);
}
// p();

const j = {
  a: function () {
    console.log(this);
    console.log("Mosfequr");
  },
};
j.a();
