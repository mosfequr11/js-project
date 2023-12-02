//sendRequest() function for send data
function sendRequest(method, url, data) {
  const promise = new Promise((resolve, reject) => {
    const xhttp = new XMLHttpRequest();

    xhttp.onload = function () {
      // handle application error
      if (this.status >= 400) {
        reject(
          `There was an application error and the response status is ${this.status}`
        );
      } else {
        resolve(this.response);
      }
    };
    xhttp.onerror = function () {
      reject("There was an error");
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
    //error
    // "https://jsonplaceholder.typicode.com/postsfrf",
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
