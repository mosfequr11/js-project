function loadDoc() {
  //The XMLHttpRequest Object
  const xhttp = new XMLHttpRequest();
  xhttp.onload = function () {
    console.log("finished the request");
    document.getElementById("container").innerHTML = this.responseText;
  };
  // by default
  // xhttp.open("GET", "http://127.0.0.1:5500/ajax/file/change-text.txt");
  //Asynchronous - True or False?
  xhttp.open("GET", "http://127.0.0.1:5500/ajax/file/change-text.txt", true);
  xhttp.send();
  console.log("hellow World");
}
