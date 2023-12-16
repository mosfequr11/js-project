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
function aInvoking() {
  console.log("I am a function");
}
// it showing undefined
// console.log(aInvoking());
// Correct invoking the function
aInvoking();

function a() {
  console.log(this);
}
a();

const x = {
  a: function () {
    console.log(this);
  },
};
x.a();
