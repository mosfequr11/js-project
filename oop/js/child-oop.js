// Inheritance is the process of creating a new Child class based on an existing Parent class.
class Student extends Person {
  constructor(name, age, grade) {
    super(name, age);
    this.grade = grade;
  }
  //make a user define method study()
  study() {
    console.log(`${this.name} is a ${this.age} year old.`);
  }
  //make a user define method studyInfo()
  studyInfo() {
    let setClass = document.getElementById("student-info");
    setClass.innerHTML = `${this.name} is a ${this.age} years old and Subject grade is ${this.grade} `;

    // console.log(
    //   `${this.name} is a ${this.age} years old and Subject grade is ${this.grade} `
    // );
  }
}

//create a Object of Student child class
const student = new Student("Mehfuz", 26, 55);
student.study();
student.studyInfo();
