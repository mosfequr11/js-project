// The dataset JavaScript is a document-oriented module (DOM) property to access the data attribute and set it on the JavaScript element.

const studentData = document.getElementById("student-data");
// check whether the variable content exists or not
// console.log(studentData);
// added data
studentData.dataset.name = "Adam";
studentData.dataset.phone = "111000";
studentData.dataset.age = "28";
console.log(studentData.dataset);
// remove data
delete studentData.dataset.name;
console.log(studentData.dataset);
