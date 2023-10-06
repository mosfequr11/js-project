function myFunction() {
  document.getElementById("demo").innerHTML = "Paragraph changed.";
}

function aboutMe() {
  document.getElementById("about_info").innerHTML = "I am a web developer";
}

function toCelsius(f) {
  return (5 / 9) * (f - 32);
}
document.getElementById("calculate_temparature").innerHTML = toCelsius(77);
document.getElementById("calculate_temparature").innerHTML = toCelsius;
