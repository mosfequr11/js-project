// define a base class called Animal
class Animal {
  // The constructor() method is a special method for creating and initializing objects created within a class.
  // Note: A class cannot have more than one constructor() method. This will throw a SyntaxError.
  constructor(name) {
    this.name = name;
  }

  eat() {
    console.log(`${this.name} is eating.`);
  }

  sleep() {
    console.log(`${this.name} is sleeping.`);
  }
}

const animal = new Animal("cat");
animal.eat();

// Inheritance is the process of creating a new Child class based on an existing Parent class.
