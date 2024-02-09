///  Start  ///
/// A string can be converted to an array with the split() method:

let contentTextTwo = "Hello";
const arrSplit = contentTextTwo.split("");
// console.log(arrSplit);

loopItem = " ";
for (let i = 0; i < arrSplit.length; i++) {
  loopItem += arrSplit[i] + "<br>";
  // console.log(loopItem);
}
console.log(loopItem);
var countSplit = document.getElementsByClassName("display-split");
countSplit.innerHTML = loopItem;

///  End  ///
///  Start  ///
/// The length property returns the length of a string
var contentText = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
// console.log(contentText.length);

var countLength = document.getElementsByClassName("display-length");
countLength.innerHTML = contentText.length;

// document.getElementsByClassName("display-length").innerHTML = contentText.length;
///  End  ///
