///  Start  ///
/// The charAt() method returns the character at a given position in a string
/// The charCodeAt() method returns the unicode of the character at a given position in a string:
var varCharAt = "HELLO WORLD";
document.getElementById("displaycharAt").innerHTML = varCharAt.charAt(6);
document.getElementById("displayCharCodeAt").innerHTML =
  varCharAt.charCodeAt(6);
///  End  ///

///  Start  ///
/// slice() extracts a part of a string and returns the extracted part in a new string.
/// The method takes 2 parameters: start position, and end position (end not included).
let contentTextThree = "I am an Engineer";
let afterSlice = contentTextThree.slice(4, 13);
document.getElementById("displaySlice").innerHTML = afterSlice;
///  End  ///

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
