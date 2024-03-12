///  Start  ///
/// The copyWithin() method copies array elements to another position in an array:
const varcopyWithin = ["Engineering", "Teacher", "Developer", "Designation"];
document.getElementById("copyWithinDisplay").innerHTML =
  varcopyWithin.varcopyWithinn(2, 3);
///  End  ///

///  Start  ///
/// The concat() method creates a new array by merging (concatenating) existing arrays:
const varName = ["Mosfequr", "Rahman"];
const varDesignation = ["Engineering", "Teacher", "Developer"];
const tempInfo = varName.concat(varDesignation);
// check after joining two array
// console.log(tempInfo);
document.getElementById("concatDisplay").innerHTML = tempInfo;
///  End  ///

///  Start  ///
/// The slice() method slices out a piece of an array into a new array:
/// The slice() method creates a new array.
/// The slice() method does not remove any elements from the source array.
var varSlices = ["My", "name", "is", "Mosfequr", "Rahman", "Engineering"];
var tempSlices = varSlices.slice(3);
document.getElementById("sliceDisplay").innerHTML =
  varSlices + "<br><br>" + tempSlices;
/// The slice() method can take two arguments like slice(1, 3).
var tempSlicesTwo = varSlices.slice(0, 4);
document.getElementById("sliceDisplayTwo").innerHTML =
  varSlices + "<br><br>" + tempSlicesTwo;
///  End  ///

///  Start  ///
/// The splice() method can be used to add new items to an array:
var varSplice = ["My", "name", "is", "Mosfequr", "Rahman", "Engineering"];
document.getElementById("displaySplice").innerHTML = varSplice;
varSplice.splice(2, 0, "Engineering", "Developer");
document.getElementById("displaySpliceAfter").innerHTML = varSplice;

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
