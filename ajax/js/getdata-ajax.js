// Dummy data from the server
// function getDataFun() {
//   fetch("https://jsonplaceholder.typicode.com/todos/1")
//     .then((response) => response.json())
//     .then((json) => console.log(json));
// }

// Got the data from the server as string, not an object
// function getDataFun() {
//   //The XMLHttpRequest Object
//   const xhttp = new XMLHttpRequest();
//   xhttp.onload = function () {
//     console.log(xhttp.responseText);
//   };
//   xhttp.open("GET", "https://jsonplaceholder.typicode.com/todos/1", true);
//   xhttp.send();
// }

// Got the data from the server as an object
// function getDataFun() {
//   //The XMLHttpRequest Object
//   const xhttp = new XMLHttpRequest();
//   xhttp.onload = function () {
//     //I checked what kind of data I received from the server.
//     // console.log(typeof xhttp.responseText);
//     //converted the data string to valid javascript an object
//     console.log(JSON.parse(xhttp.responseText));
//     //show data on the browser
//     document.getElementById("show-data").innerHTML = xhttp.responseText;
//   };
//   xhttp.open("GET", "https://jsonplaceholder.typicode.com/todos/1", true);
//   xhttp.send();
// }

// Got the data from the server as a string then I covert it to JSON format in another way
function getDataFun() {
  //The XMLHttpRequest Object
  const xhttp = new XMLHttpRequest();
  xhttp.onload = function () {
    // I checked the data in the console area
    console.log(xhttp.response);
    //show data on the browser
    document.getElementById("show-data").innerHTML = xhttp.response;
  };
  xhttp.open("GET", "https://jsonplaceholder.typicode.com/todos/1", true);
  xhttp.responseType = "json";
  xhttp.send();
}

const getButton = document.getElementById("getData");
getButton.addEventListener("click", getDataFun);
