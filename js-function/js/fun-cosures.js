console.log("Learn:", "Function Closures");

// Initiate counter
let counter = 0;

// Function to increment counter
function add() {
  counter += 1;
}

// Call the add() more times
// console.log(add());
// console.log(add());
// console.log(add());
// console.log(add());

var nameString = function (name) {
  return '"Hi, I am" + " " + name';
};
nameString("Mosfequr");
console.log(nameString);
