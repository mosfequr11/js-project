///  Start  ///
/// concat() joins two or more strings:
/// Note: All string methods return a new string. They don't modify the original string.Formally said: Strings are immutable: Strings cannot be changed, only replaced.
let firstName = "Mosfequr";
let lastName = "Rahman";
// let myAge = "twenty Eight years old";
let myAge = "28 years old ";
let fullName = firstName.concat(" ", lastName).concat(" ", myAge);
document.getElementById("displayConcat").innerHTML = fullName;

///  End  ///

///  Start  ///
/// A string can be converted to an array with the split() method:

let contentTextTwo = "Hello";
const arrSplit = contentTextTwo.split("");
console.log(contentTextTwo);
contentTextTwo = "";
for (let i = 0; i < arrSplit.length; i++) {
  // console.log(i);
  // console.log(contentTextTwo);
  contentTextTwo += arrSplit[i] + "<br>";
}
// console.log(contentTextTwo);
document.getElementById("displaySplit").innerHTML = contentTextTwo;

///  End  ///

///  Start  ///
/// The length property returns the length of a string
var contentText = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
// console.log(contentText.length);

var countLength = document.getElementsByClassName("display-length");
countLength.innerHTML = contentText.length;

// document.getElementsByClassName("display-length").innerHTML = contentText.length;
///  End  ///
