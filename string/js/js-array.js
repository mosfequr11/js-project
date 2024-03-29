/// start ///
///  Associative Arrays
/// In JavaScript, arrays always use numbered indexes.
const person = [];
person[0] = "Mosfequr";
person[1] = "Rahman";
person[2] = 28;
console.log(person[0]);
/// JavaScript does not support arrays with named indexes.
const student = [];
student["firstName"] = "Mosfequr";
student["lasttName"] = "Rahman";
student["age"] = 28;
console.log(student["firstName"]);
/// End ///

/// start ///
/// use the Array.forEach() function
const varLoopEach = ["Mosfequr", "Rahman", "Developer"];

let varEach = "<ul>";
varLoopEach.forEach(myEachFun);
varEach += "</ul>";
function myEachFun(jkl) {
  varEach += "<li>" + jkl + "</li>";
}
document.getElementById("loopEachDisplay").innerHTML = varEach;
/// End ///

/// start ///
/// Looping Array Elements
const varLoopFor = ["Mosfequr", "Rahman", "Engineer"];
let tempLen = varLoopFor.length;

let innerElement = "<ul>";
for (let i = 0; i < tempLen; i++) {
  innerElement += "<li>" + varLoopFor[i] + "</li>";
}
innerElement += "</ul>";
document.getElementById("loopForDisplay").innerHTML = innerElement;
/// End ///

/// start ///
/// Converting an Array to a String
/// The JavaScript method toString() converts an array to a string of (comma separated) array values.
const varArrToStr = ["Mosfequr", "Rahman", "Engineer"];
document.getElementById("arrToStrDisplay").innerHTML = varArrToStr.toString();
/// End ///

/// start ///
// Changing an Array Element
const varChangeArry = ["Mosfequr", "Rahman", "Engineer"];
document.getElementById("oldArrDisplay").innerHTML = varChangeArry;
varChangeArry[2] = "Developer";
// console.log(varChangeArry);
document.getElementById("changeArryDisplay").innerHTML = varChangeArry;
/// End ///

/// start ///
/// Accessing Array Elements
const varAccessArry = ["Mosfequr", "Rahman", "Engineer"];
let tempAccessArry = varAccessArry[0];
// console.log(tempAccessArry);
document.getElementById("accessArrDisplay").innerHTML = tempAccessArry;
// let tempAccessArry2 = varAccessArry[1];
// console.log(tempAccessArry2);
/// End ///

/// start ///
/// the JavaScript Keyword new
const arrInfo = new Array("Mosfequr", "Rahman", "Engineer");
document.getElementById("arrInfoDisplay").innerHTML = arrInfo;
/// End ///

/// start ///
/// You can also create an array, and then provide the elements:
const infoarr = [];
infoarr[0] = "Mosfequr";
infoarr[1] = "Rahman";
infoarr[2] = "Engineer";
document.getElementById("arrDisplay").innerHTML = infoarr;
/// End ///

// An array can hold many values under a single name, and you can access the values by referring to an index number.
// Spaces and line breaks are not important. A declaration can span multiple lines:
const info = ["Mosfequr", "Rahman", "Engineer"];
// console.log(info);
document.getElementById("infoDisplay").innerHTML = info;
