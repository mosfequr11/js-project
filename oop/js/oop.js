// In OOP, a class is a blueprint for creating objects. It defines the properties and methods that objects of that class will have. In JavaScript, we can define a class using the class keyword.

//create a base class Person
class Person {
  // The constructor() method is a special method for creating and initializing objects created within a class.
  // Note: A class cannot have more than one constructor() method. This will throw a SyntaxError.
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  //make a user define method greet()
  greet() {
    let setClass = document.getElementById("person-info");
    setClass.innerHTML = `Hello, my name is ${this.name} and I am ${this.age} years old.`;
  }
}

//create a Object of Person Base class
const person = new Person("Mosfequr", 27);
person.greet();
