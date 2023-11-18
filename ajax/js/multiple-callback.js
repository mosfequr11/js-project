function loadDoc(callbackFunction) {
  //The XMLHttpRequest Object
  const xhttp = new XMLHttpRequest();
  //if single
  // xhttp.onload = function () {
  //   document.getElementById("container").innerHTML = this.responseText;
  // };
  //if multiple
  xhttp.onload = function () {
    callbackFunction(xhttp);
  };
  //if single
  xhttp.open("GET", "http://127.0.0.1:5500/ajax/file/change-text.txt");
  //if multiple
  // xhttp.open("GET", url);
  xhttp.send();
}

function multipleCallBack(xhttp) {
  document.getElementById("container").innerHTML = xhttp.responseText;
}
function multipleCallBack2(xhttp) {
  document.getElementById("container2").innerHTML = xhttp.responseText;
}
