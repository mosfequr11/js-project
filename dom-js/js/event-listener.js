// element.addEventListener(event, function, useCapture);
// The first parameter is the type of the event (like "click" or "mousedown" or any other HTML DOM Event.)
// The second parameter is the function we want to call when the event occurs.
// The third parameter is a boolean value specifying whether to use event bubbling or event capturing. This parameter is optional.

// Add an Event Handler to an Element
document.getElementById("buttonout").addEventListener("click", function () {
  alert("Hello World!");
});

// Add Many Event Handlers to the Same Element
function manyEventHandlers() {
  document.getElementById("output").innerHTML += "Moused over!<br>";
}

function manyEventHandlersClick() {
  document.getElementById("output").innerHTML += "Clicked!<br>";
}

function manyEventHandlersOut() {
  document.getElementById("output").innerHTML += "Moused out!<br>";
}

var buttonin = document.getElementById("buttonin");
buttonin.addEventListener("mouseover", manyEventHandlers);
buttonin.addEventListener("click", manyEventHandlersClick);
buttonin.addEventListener("mouseout", manyEventHandlersOut);

// Passing Parameters
function passingParameters(text) {
  // alert(text);
  document.getElementById("outputPram").innerHTML += text;
}

var buttonin2 = document.getElementById("buttonin2");
buttonin2.addEventListener("mouseover", function () {
  passingParameters("Hello Wrold");
});
