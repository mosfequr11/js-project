let button = document.getElementById("debounce");
const debounce = (func, delay) => {
  let debounceTimer;
  return function () {
    const context = this;
    const args = arguments;
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(() => func.apply(context, args), delay);
  };
};
button.addEventListener(
  "click",
  debounce(function () {
    alert("executed once every 1000 ms!");
  }, 1000)
);
