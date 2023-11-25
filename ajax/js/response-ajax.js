function loadDoc() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById("container").innerHTML = this.responseText;
      // The getAllResponseHeaders() method returns all header information from the server response.
      // console.log(this.getAllResponseHeaders());
      //The getResponseHeader() method returns specific header information from the server response.
      console.log(this.getResponseHeader("cache-control"));
    }
  };
  xhttp.open(
    "GET",
    "http://127.0.0.1:5500/ajax/file/change-text-respons.txt",
    true
  );
  xhttp.send();
}
