function loadDoc() {
  //Create The XMLHttpRequest Object
  const xhttp = new XMLHttpRequest();
  // This is a callback function. What to do when a response arrives
  xhttp.onload = function () {
    document.getElementById("innercontent").innerHTML = this.responseText;
  };

  // prepare request
  xhttp.open("GET", "http://127.0.0.1:5500/ajax/file/change-text.txt");
  xhttp.send();
}

// AJAX = Asynchronous JavaScript And XML.
// AJAX is not a programming language.

// Modern Browsers (Fetch API)
// Modern Browsers can use Fetch API instead of the XMLHttpRequest Object.
// The Fetch API interface allows web browser to make HTTP requests to web servers.
// If you use the XMLHttpRequest Object, Fetch can do the same in a simpler way.

// AJAX is a misleading name. AJAX applications might use XML to transport data, but it is equally common to transport data as plain text or JSON text.

// on behalf of browser
