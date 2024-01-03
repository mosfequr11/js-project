// event capturing
function capturingFun(event) {
  console.log(event.currentTarget);
}
const parentVar = document.getElementById("parent");
parentVar.addEventListener("click", capturingFun, { capture: true });

const formVar = document.getElementById("form");
formVar.addEventListener("click", capturingFun, { capture: true });

const buttonVar = document.getElementById("button");
buttonVar.addEventListener("click", capturingFun, { capture: true });
