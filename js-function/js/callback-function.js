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
