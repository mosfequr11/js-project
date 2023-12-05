// console.log("hellow");

// const myInfo = { name: "Mosfequr", age: 30, city: "Dhaka" };
// //show value using object property
// console.log(myInfo.name);
// //replace the name property of object
// myInfo["name"] = "Rahman";
// console.log(myInfo["name"]);
// document.getElementById("showdata").innerHTML = myInfo["name"];

// this is a JSON string
var info = '{"name":"Mosfequr", "age":30, "car": "BMW"}';
console.log(info);

// JSON string convert to Object
var infoObj = JSON.parse(info);
console.log(infoObj);
console.log(infoObj.car);
// display the data with multiple line
var displayObj = document.getElementsByClassName("str-to-obj");
displayObj[0].innerHTML = infoObj.car;

// Object convert to JSON string
var infoString = JSON.stringify(infoObj);
console.log(infoString);
// display the data
document.getElementsByClassName("obj-to-str").innerHTML = infoString;
