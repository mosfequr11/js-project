// element.addEventListener(event, function, useCapture);
// The first parameter is the type of the event (like "click" or "mousedown" or any other HTML DOM Event.)
// The second parameter is the function we want to call when the event occurs.
// The third parameter is a boolean value specifying whether to use event bubbling or event capturing. This parameter is optional.

// Passing Parameters
function passingParameters(text) {
  // alert(text);
  document.getElementById("outputPram").innerHTML += text;
}

var parameterPass = document.getElementById("parameterPass");
parameterPass.addEventListener("mouseover", function () {
  passingParameters("Hello Wrold");
});
