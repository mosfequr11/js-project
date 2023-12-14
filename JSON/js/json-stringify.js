/*replace the value of "city" to upper case:*/
var Info = { name: "mosfequr", age: "28", city: "Dhaka" };
console.log(Info);
var infoStringify = JSON.stringify(Info, function (key, value) {
  if (key == "city") {
    return value.toUpperCase();
  } else {
    return value;
  }
});
console.log(infoStringify);
