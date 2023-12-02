// Dummy data send to the server
// function sendDataFun() {
//   fetch("https://jsonplaceholder.typicode.com/posts", {
//     method: "POST",
//     body: JSON.stringify({
//       fname: "Mosfequr",
//       lname: "Rahman",
//       userId: 1,
//     }),
//     headers: {
//       "Content-type": "application/json; charset=UTF-8",
//     },
//   })
//     .then((response) => response.json())
//     .then((toServer) => console.log(toServer));
// }
// const sendButton = document.getElementById("sendData");
// sendButton.addEventListener("click", sendDataFun);

//sendRequest() function for get data
// function sendRequest(method, url) {
//   const promise = new Promise((resolve, reject) => {
//     const xhttp = new XMLHttpRequest();

//     xhttp.onload = function () {
//       resolve(this.response);
//     };
//     xhttp.open(method, url);

//     xhttp.responseType = "json";

//     xhttp.send();
//   });

//   return promise;
// }

// Got the data from the server  using sendRequest() function
// function getDataFun() {
//   sendRequest("GET", "https://jsonplaceholder.typicode.com/todos/1").then(
//     (responseData) => {
//       console.log(responseData);
//     }
//   );
// }

// const getButton = document.getElementById("getData");
// getButton.addEventListener("click", getDataFun);

//sendRequest() function for send data
function sendRequest(method, url, data) {
  const promise = new Promise((resolve) => {
    const xhttp = new XMLHttpRequest();

    xhttp.onload = function () {
      resolve(this.response);
    };
    xhttp.open(method, url);

    xhttp.responseType = "json";

    xhttp.send(data);
  });

  return promise;
}

// Send data to the server  using sendRequest() function
function sendDataFun() {
  sendRequest(
    "POST",
    "https://jsonplaceholder.typicode.com/posts",
    JSON.stringify({
      fname: "Mosfequr",
      lname: "Rahman",
      userId: 1,
    })
  ).then((responseData) => {
    console.log(responseData);
  });
}

const sendButton = document.getElementById("sendData");
sendButton.addEventListener("click", sendDataFun);
