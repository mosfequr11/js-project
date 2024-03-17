/// start ///

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
