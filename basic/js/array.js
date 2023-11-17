var fruite = [23, 24, 25, 26, 27, 28];
var vegitable = [3, 4, 5, 6, 7, 8];
var inegration = fruite.concat(vegitable);
document.write(inegration);
document.write("<hr>");
fruite.shift();
document.write(fruite);

// const cars = ["Saab", "Volvo", "BMW"];
// const person = { firstName: "John", lastName: "Doe", age: 46 };
// document.getElementById("demo").innerHTML = cars;
// document.getElementById("demo").innerHTML = person;
// console.log(cars);
// console.log(cars.length);
// console.log(person);

// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits[4] = "Pineapples";
// console.log(fruits);
// let fruit = fruits[0];
// console.log(fruits[0]);
// fruits[4] = "Guava";
// console.log(fruits);
// console.log(fruits[fruits.length - 1]);
// let text = "<ul>";
// for (i = 0; i < fruits.length; i++) {
//   //   console.log(i);
//   //   console.log(fruits[i]);
//   text += "<li>" + fruits[i] + "</li>";
// }
// text += "</ul>";
// document.getElementById("demo").innerHTML = text;
// console.log("finished");
// console.log(text);

// function myFunction(jkl) {
//   //console.log(jkl);
//   text += "<li>" + jkl + "</li>";
// }
// let text = "<ul>";
// fruits.forEach(myFunction);
// text += "</ul>";
// console.log(text);
// document.getElementById("demo").innerHTML = text;
// console.log("finished");

// console.log(fruits);
// // The easiest way to add a new element to an array is using the push() method:
// fruits.push("Lemon");
// console.log(fruits);
// // New element can also be added to an array using the length property:
// fruits[fruits.length] = "Watermelon";
// console.log(fruits);

// JavaScript does not support arrays with named indexes.
// const person3 = [];
// person3["firstName"] = "Mosfequr";
// person3["lastName"] = "Rahman";
// person3["age"] = 46;
// person3.length; // Will return 0
// console.log(person3[0]); // Will return undefined

// In JavaScript, arrays always use numbered indexes.
// const person2 = [];
// person2[0] = "Mosfequr";
// person2[1] = "Rahman";
// person2[2] = 46;
// person2.length; // Will return 3
// console.log(person2[0]); // Will return "John"

// The typeof operator returns object because a JavaScript array is an object.
// const fruits2 = ["Banana", "Orange", "Apple"];
// let type = typeof fruits2;
// Array.isArray(fruits2);
// console.log(type);
