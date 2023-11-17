//In JavaScript, an object is a collection of properties, where each property is a key-value pair. The keys are strings that represent the names of the properties, and the values can be of any data type, including other objects.
// const person = {
//   name: "Brendan Eich",
//   age: 60,
//   address: {
//     street: "123 JavaScript Street",
//     city: "Web",
//     state: "Programming",
//     zip: "12345",
//   },
// };

// console.log(person.name);
// console.log(person.age);
// console.log(person.address);
// console.log(person.address.street);

// In OOP, a class is a blueprint for creating objects. It defines the properties and methods that objects of that class will have. In JavaScript, we can define a class using the class keyword.
// The constructor() method is a special method for creating and initializing objects created within a class.
// Note: A class cannot have more than one constructor() method. This will throw a SyntaxError.
// class Person {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }

//   greet() {
//     console.log(
//       `Hello, my name is ${this.name} and I am ${this.age} years old.`
//     );
//   }
// }
// const person = new Person('Mosfequr', 27);
// person.greet();

// Inheritance is the process of creating a new class based on an existing class.
// class Student extends Person {
//   constructor(name, age, grade) {
//     super(name, age);
//     this.grade = grade;
//   }

//   study() {
//     console.log(`${this.name} is a ${this.grade} in JavaScript.`);
//   }
//   studyInfo() {
//     console.log(`${this.name} is a ${this.grade} in JavaScript and ${this.age} years old.`);
//   }
// }

// const student = new Student("mosfequr", 27, "beginner");
// student.study();
// student.studyInfo();

// Encapsulation is the practice of hiding the internal details of an object and providing a public interface for interacting with it. This helps to prevent outside code from directly modifying the internal state of an object, which can lead to bugs and other issues. In JavaScript, we can use closures to achieve encapsulation. Here’s an example:
// function createCounter() {
//   let count = 0;

//   return {
//     increment() {
//       count++;
//     },

//     decrement() {
//       count--;
//     },

//     getCount() {
//       return count;
//     },
//   };
// }
// const counter = createCounter();
// console.log(counter.getCount()); // Output: 0

// counter.increment();
// counter.increment();
// console.log(counter.getCount()); // Output: 1

// counter.decrement();
// counter.decrement();
// console.log(counter.getCount()); // Output: 0

// Polymorphism is the ability of objects of different classes to be treated as if they were objects of the same class. In JavaScript, we can achieve polymorphism using interfaces.

// class Shape {
//   draw() {
//     console.log("Drawing shape...");
//   }
// }
// class Circle extends Shape {
//   draw() {
//     console.log("Drawing circle...");
//   }
// }
// class Square extends Shape {
//   draw() {
//     console.log("Drawing square...");
//   }
// }
// class Triangle extends Shape {
//   draw() {
//     console.log("Drawing Triangle...");
//   }
// }
// function drawShapes(shape) {
//   shapes.forEach((shape) => {
//     shape.draw();
//   });
// }
// const circle = new Circle();
// circle.draw();
// const square = new Square();
// square.draw();
// const jkl = [new Circle(), new Square(), new Circle(), new Triangle()];
// jkl.forEach((shape) => {
//   let mono = shape.draw();
//   document.getElementById("demo").innerHTML = mono;
//   // shape.draw();
// });

class Car {
  carColor(paint) {
    return console.log(`paint a car ${paint}`);
  }
}
class BMW extends Car {
  carColor(paint) {
    return console.log(`paint BMW car as ${paint}`);
  }
}
class Audi extends Car {
  carColor(paint) {
    return console.log(`paint Audi car as ${paint}`);
  }
}
class Kia extends Car {
  carColor(paint) {
    return console.log(`paint Kia car as ${paint}`);
  }
}

// const bmw = new BMW();
// bmw.carColor("red");

// const car = [new BMW(), new Audi(), new Kia()];
// car.forEach(myFunction);
// function myFunction(cars) {
//   cars.carColor();
// }

function myCarColor(params1) {
  for (i = 0; i < params1.length; i++) {
    console.log(params1[i]);
  }
}
function myObject(params2) {
  for (j = 0; j < params2.length; j++) {
    console.log(params2[j]);
  }
}

var color = ["red", "blue", "yellow"];
const car = [new BMW(), new Audi(), new Kia()];
myObject(car);
myCarColor(color);
