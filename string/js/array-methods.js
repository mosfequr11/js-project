///  Start  ///
///
///  End  ///

///  Start  ///
///
///  End  ///

///  Start  ///
///This is what popping and pushing is: Popping items out of an array, or pushing items into an array.
const varPush = ["My", "Name", "is", "Mosfequr", "Rahman", "Engineering"];
let tempPush = varPush.push("Engineering");
document.getElementById("display-push").innerHTML = tempPush;
console.log(varPush);
const varPop = ["My", "Name", "is", "Mosfequr", "Rahman", "Engineering"];
let tempPop = varPush.pop();
document.getElementById("display-pop").innerHTML = tempPop;
console.log(tempPop);
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
