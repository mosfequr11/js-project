// In JSON, values must be one of the following data types:
// a string
// a number
// an array
// a boolean
// an object
// null

var dataType =
  '{"name":"Md", "age":28, "skills": ["JavaScript", "Shopify", "WordPress"], "car": "BMW","reading": "yes"}';
console.log(dataType);
var dataTypeToObj = JSON.parse(dataType);
console.log(dataTypeToObj.name);
// You can access a JavaScript object like this:
console.log(dataTypeToObj["name"]);
// Data can be modified like this:
console.log((dataTypeToObj.car = "ROLLS ROYCE"));
// a number
console.log(dataTypeToObj.age);
// an array
console.log(dataTypeToObj.skills);
// a boolean
console.log(dataTypeToObj.reading);

// In JavaScript values can be all of the above, plus any other valid JavaScript expression, including:
// a function
// a date
// undefined
