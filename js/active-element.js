function functionActiveElement() {
  const element = document.activeElement.tagName;
  document.getElementById("demo").innerHTML = element;
}
