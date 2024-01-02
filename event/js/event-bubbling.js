// Event Bubbling is a concept in the DOM (Document Object Model). It happens when an element receives an event, and that event bubbles up (or you can say is transmitted or propagated) to its parent and ancestor elements in the DOM tree until it gets to the root element.

function bubblingFun(event) {
  console.log(event.currentTarget);
}
const parentVar = document.getElementById("parent");
parentVar.addEventListener("click", bubblingFun);

const formVar = document.getElementById("form");
formVar.addEventListener("click", bubblingFun);

const buttonVar = document.getElementById("button");
buttonVar.addEventListener("click", bubblingFun);
