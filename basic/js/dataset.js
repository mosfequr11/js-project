// The dataset JavaScript is a document-oriented module (DOM) property to access the data attribute and set it on the JavaScript element.

const student = document.getElementById("student");
// console.log(student);
student.dataset.name = "Adam";
console.log(student.dataset);
delete student.dataset.name;
console.log(student.dataset);
