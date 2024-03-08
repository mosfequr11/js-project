///  Start  ///
///
///  End  ///

///  Start  ///
/// The unshift() method adds a new element to an array (at the beginning), and "unshifts" older elements:
/// The unshift() method returns the new array length:
var varUnShift = ["My", "name", "is", "Mosfequr", "Rahman", "Engineering"];
document.getElementById("displayUnshift-before").innerHTML = varUnShift;
varUnShift.unshift("Developer");
document.getElementById("displayUnshift-after").innerHTML = varUnShift;

///  End  ///

///  Start  ///
///The shift() method removes the first array element and "shifts" all other elements to a lower index.
var varShift = ["My", "name", "is", "Mosfequr", "Rahman", "Engineering"];
document.getElementById("display-before").innerHTML = varShift;
varShift.shift();
document.getElementById("display-shift").innerHTML = varShift.shift();
document.getElementById("display-shift-after").innerHTML = varShift;
///  End  ///

///  Start  ///
///This is what popping and pushing is: Popping items out of an array, or pushing items into an array.
const varPush = ["My", "Name", "is", "Mosfequr", "Rahman", "Engineering"];
let tempPush = varPush.push("Engineering");
document.getElementById("display-push").innerHTML = tempPush;
// console.log(varPush);
let tempPop = varPush.pop();
document.getElementById("display-pop").innerHTML = tempPop;
// console.log(tempPop);
///  End  ///

///  Start  ///
/// The join() method also joins all array elements into a string.
/// It behaves just like toString(), but in addition you can specify the separator:
const varJoin = ["My", "Name", "is", "Mosfequr", "Rahman"];
let tempJoin = varJoin.join(" * ");
document.getElementById("display-join").innerHTML = tempJoin;
///  End  ///

///  Start  ///
/// The at() method returns an indexed element from an array.
const varAt = ["My", "Name", "is", "Mosfequr", "Rahman"];
let tempAt = varAt.at(2);
document.getElementById("display-at").innerHTML = tempAt;

///  End  ///

///  Start  ///
/// The JavaScript method toString() converts an array to a string of (comma separated) array values.

var vartoString = ["My", "Name", "is", "Mosfequr", "Rahman"];
let temptoString = vartoString.toString();
document.getElementById("display-to-string").innerHTML = temptoString;
///  End  ///

///  Start  ///
/// The length property returns the length (size) of an array:

const myNameLength = ["My", "Name", "is", "Mosfequr", "Rahman"];
let arrayLength = myNameLength.length;
document.getElementById("display-length").innerHTML = arrayLength;

///  End  ///
