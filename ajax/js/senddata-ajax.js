function sendDataFun() {
  // Dummy data from the server
  fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    body: JSON.stringify({
      fname: "Mosfequr",
      lname: "Rahman",
      userId: 1,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((response) => response.json())
    .then((toServer) => console.log(toServer));
}
const sendButton = document.getElementById("sendData");
sendButton.addEventListener("click", sendDataFun);
