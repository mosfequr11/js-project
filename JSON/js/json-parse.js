// The JSON.parse() method parses a string and returns a JavaScript object.
// The string has to be written in JSON format.
// The JSON.parse() method can optionally transform the result with a function.

var dataType =
  '{"name":"Md", "age":28, "skills": ["JavaScript", "Shopify", "WordPress"], "car": "BMW","reading": "yes"}';
// console.log(dataType);
// var dataParse = JSON.parse(dataType);
// console.log(dataParse);

// The JSON.parse() method does not support undefine.
// var dataUndefine =
//   '{"name":"Md", "age":28, "skills": undefine, "car": "BMW","reading": "yes"}';
// var dataParse = JSON.parse(dataUndefine);
// console.log(dataParse);

// The JSON.parse() method support Date.
var dataData =
  '{"name":"Md", "age":"11-05-2020", "skills": "Shopify", "car": "BMW","reading": "yes"}';
var dataParse = JSON.parse(dataData);
console.log(dataParse.age);
var birth = new Date(dataParse.age);
console.log(birth);
