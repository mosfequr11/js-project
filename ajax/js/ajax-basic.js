function loadDoc() {
  //The XMLHttpRequest Object
  const xhttp = new XMLHttpRequest();
  xhttp.onload = function () {
    document.getElementById("container").innerHTML = this.responseText;
  };
  xhttp.open("GET", "http://127.0.0.1:5500/ajax/file/change-text.txt");
  xhttp.send();
}
