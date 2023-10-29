//  A constructor is a special function that creates and initializes an object instance of a class.
// Constructor function for Person objects
function Person(first, last, year, eye) {
  this.firstName = first;
  this.lastName = last;
  this.age = year;
  this.eyeColor = eye;
}

// Create a Person object
const myInfo = new Person("Mosfequr", " Rahman", 50, "Black");

// Display age
document.getElementById("demo").innerHTML =
  "My first Name is " + myInfo.firstName + ".";
document.getElementById("demo1").innerHTML =
  "My last Name " + myInfo.lastName + ".";
document.getElementById("demo2").innerHTML = "My age is " + myInfo.age + ".";
document.getElementById("demo3").innerHTML =
  "My eyeColor is " + myInfo.eyeColor + ".";
