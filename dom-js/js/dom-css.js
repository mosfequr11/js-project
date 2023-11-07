// console.log("hello world");

function chengeColor() {
  document.getElementById("color-change").style.color = "blue";
}

function resetColor() {
  document.getElementById("color-change").style.color = "yellow";
}

// let textColor = document.querySelector('#changecolor');
// textColor.style.color="green";
// textColor.style.fontSize="30px";
// textColor.style.fontWeight="600";
// textColor.style.fontFamily="cursive";

// setTimeout(function () {
//   let textColor = document.querySelector("#changecolor");
//   textColor.style.color = "green";
//   textColor.style.fontSize = "30px";
//   textColor.style.fontWeight = "600";
//   textColor.style.fontFamily = "cursive";
// }, 1000);

function changeStyle() {
  let textColor = document.querySelector("#changecolor");
  textColor.style.color = "green";
  textColor.style.fontSize = "30px";
  textColor.style.fontWeight = "600";
  textColor.style.fontFamily = "cursive";
}
