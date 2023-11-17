const numbers = [65, 44, 12, 4];
//creates a new array from calling a function for every array element.
const newArr = numbers.map(myFunction);

document.getElementById("demo").innerHTML = newArr;
var getData = document.getElementById("demo").innerHTML;


// console.log(newArr);
// getData = newArr;
// console.log(getData);
