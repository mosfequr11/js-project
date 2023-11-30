// Dummy data from the server
// function getDataFun() {
//   fetch("https://jsonplaceholder.typicode.com/todos/1")
//     .then((response) => response.json())
//     .then((json) => console.log(json));
// }

function getDataFun() {
  //The XMLHttpRequest Object
  const xhttp = new XMLHttpRequest();
  xhttp.onload = function () {
    console.log(xhttp.responseText);
  };
  xhttp.open("GET", "https://jsonplaceholder.typicode.com/todos/1", true);
  xhttp.send();
}

const getButton = document.getElementById("getData");
getButton.addEventListener("click", getDataFun);
