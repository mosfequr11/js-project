// this is an object
// Data is in name/value pairs
// Data is separated by commas
// Curly braces hold objects
// Square brackets hold arrays
const Student = {
  name: "Mosfequr",
  age: 27,
  skills: ["JavaScript", "Shopify", "WordPress"],
};
// console.log(Student.skills);

// this is a JSON string
// single-quote is not allowed in JSON name/value pair
//JSON names require double quotes.
// Data is in name/value pairs
// Data is separated by commas
// Curly braces hold objects
// Square brackets hold arrays
var studentInfo =
  '{"name":"Mosfequr", "age":28, "car": "BMW" , "skills": ["JavaScript", "Shopify", "WordPress"]}';
// console.log(studentInfo);

// In JSON, values must be one of the following data types:
// 1. a string
// 2. a number
// 3. an object
// 4. an array
// 5. a boolean
// 6. null
var dataTypes =
  '{"name":"Mosfequr", "age":28, "car": "BMW" , "skills": ["JavaScript", "Shopify", "WordPress"],"reading":yes, game:null}';
console.log(dataTypes);

// JavaScript Arrays as JSON
var arraysJson = [
  '{"name":"Mosfequr", "age":28, "car": "BMW" , "skills": ["JavaScript", "Shopify", "WordPress"]}',
];
console.log(arraysJson);
