// Event delegation in JavaScript is a pattern that efficiently handles events. Events can be added to a parent element instead of adding to every single element
const listLan = document.getElementById("list");

listLan.addEventListener("click", (e) => {
  // console.dir(e);
  if (e.target.matches("li")) {
    if (e.target.innerText === "NodeJs") {
      e.target.style.backgroundColor = "blue";
    } else {
      e.target.style.backgroundColor = "yellow";
    }
  }
});
