function callNumber() {
  var params = document.getElementById("myNum").value;
  for (i = 0; i < params.length; i++) {
    // console.log(params[i]);
    document.getElementById("showNumber").innerHTML = params[i];
  }
}
