function getData() {
  sendRequest("GET", "https://jsonplaceholder.typicode.com/todos/test")
    .then((responseData) => {
      console.log(responseData);
    })
    .catch((err) => {
      console.log(err);
    });
}
const getButton = document.getElementById("get");
getButton.addEventListener("click", getData);
