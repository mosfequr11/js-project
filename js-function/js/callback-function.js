/// start ///
/// When you pass a function as an argument, remember not to use parenthesis.
// Right: displayNumTwo(sumNumTwo);
// Wrong: displayNumTwo(sumNumTwo());
/// end ///

function displayNumTwo(sumNumTwo) {
  document.getElementById("display-output").innerHTML = sumNumTwo;
}
// here p and q are function parameter
function sumNumTwo() {
  var g = 9;
  var h = 9;
  var total = g + h;
  return total;
}
// sumNumTwo();
displayNumTwo(sumNumTwo);
/// start ///

/// start ///
/// Sequence Control
function displayNum(displayNum) {
  document.getElementById("display-num-output").innerHTML = displayNum;
}
// here p and q are function parameter
function sumNum(p, q) {
  let sum = p + q;
  return sum;
}
var j = 6;
var k = 7;
// here j and k is function argument
let result = sumNum(j, k);
displayNum(result);
/// end ///

/// start ///
/// A callback is a function passed as an argument to another function. This technique allows a function to call another function. A callback function can run after another function has finished

/// JavaScript functions are executed in the sequence they are called. Not in the sequence they are defined.

function displayMessage(paramText) {
  /// Display a message on the page
  var display = document.getElementById("display");
  display.innerHTML = paramText;
  /// Find an alternative way to display the message on the page.
  // document.getElementById("display").innerHTML = paramText;
  /// Inspect the console for information.
  // console.log(display);
}

function myName() {
  displayMessage("Hello I am Mosfequr Rahman");
}

function myAge() {
  displayMessage("I am 28 years old");
}
/// end ///
