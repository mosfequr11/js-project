// console.log("learn array search");
/// Start
/// The indexOf() method searches an array for an element value and returns its position.
/// Note: The first item has position 0, the second item has position 1, and so on.
const varArrSeaarch = ["Mosfequr", "Rahman", "Developer"];
let position = varArrSeaarch.indexOf("Rahman") + 1;
document.getElementById("arrSearchDisplay").innerHTML =
  "Name is found in position" + position;
// array.indexOf(item, start)
// item	Required. The item to search for.
// start	Optional. Where to start the search. Negative values will start at the given position counting from the end, and search to the end.
// Array.indexOf() returns -1 if the item is not found.
// If the item is present more than once, it returns the position of the first occurrence.
/// End
