let textFull = "Apple,Banana,Kiwi";
document.getElementById("full-text").innerHTML = textFull;
// x is a string
// let x = "John";
// y is an object
// let y = new String("John");
// z is an object
// let z = new String("John");
// console.log(x);
// console.log(y);
// console.log(x == y);
// console.log(x === y);
// document.getElementById("demo").innerHTML = (x == z);
//Comparing two JavaScript objects always returns false.
// console.log(x === z);
// document.getElementById("demo2").innerHTML = (x === z);

//let text = "Apple,Banana,Kiwi";
// document.getElementById("demo").innerHTML = text.substring(0, 13);

// function myFunction() {
//   let text = document.getElementById("demo2").innerHTML;
//   document.getElementById("demo2").innerHTML = text.replace(
//     /WORld/i,
//     "W3Schools"
//   );
// }

function myFunctionAll() {
  // let text = "I love cats. Cats are very easy to love. Cats are very popular";
  let text = document.getElementById("lower-upper").innerHTML;
  document.getElementById("lower-upper").innerHTML = text.replaceAll(
    /Cats/g,
    "Dogs"
  );
  // document.getElementById("lower-upper").innerHTML = text.replaceAll(/cats/g, "dogs");
}

function myFunctionLower() {
  let text = document.getElementById("lower-upper").innerHTML;
  document.getElementById("lower-upper").innerHTML = text.toLowerCase();
}

function myFunctionUpper() {
  let text = document.getElementById("lower-upper").innerHTML;
  document.getElementById("lower-upper").innerHTML = text.toUpperCase();
}

function myFunctionConcat() {
  let text1 = "My";
  let text2 = "Name";
  let text3 = "is";
  let text4 = "Mosfequr";
  let text5 = text1.concat(" ", text2).concat(" ", text3).concat(" ", text4);
  document.getElementById("concat-text").innerHTML = text5;
}
function myFunctionAdd() {
  let text1 = "My";
  let text2 = "Name";
  let text3 = "is";
  let text4 = "Mosfequr";
  let text5 = text1 + text2 + text3 + text4;
  document.getElementById("concat-text").innerHTML = text5;
}

let textSplit = "World";
const myArr = textSplit.split("");
count = "";
for (let i = 0; i < myArr.length; i++) {
  count += myArr[i] + "<br>";
}
document.getElementById("split-text").innerHTML = count;

// let firstName = "John";
// let lastName = "Doe";
// let text = ` Welcome ${firstName}, ${lastName}!`;
// document.getElementById("literals-le").innerHTML = text;

// let price = 10;
// let VAT = 0.25;
// let total = `Total: ${(price * (1 + VAT)).toFixed(2)}`;
// document.getElementById("literals-le").innerHTML = total;

let header = "Templates Literals";
let tags = ["template literals", "javascript", "es6"];
let html = `<h2>${header}</h2><ul>`;
for (const x of tags) {
  html += `<li>${x}</li>`;
}
html += `</ul>`;
document.getElementById("literals-le").innerHTML = html;

let text = "Please locate where 'locate' occurs!";
// document.getElementById("demo").innerHTML = text.indexOf("locate");
// document.getElementById("demo").innerHTML = text.lastIndexOf("jhon");
// document.getElementById("demo").innerHTML = text.indexOf("locate", 15);
// document.getElementById("demo").innerHTML = text.search(/where/);
// document.getElementById("demo").innerHTML = text.search("where");