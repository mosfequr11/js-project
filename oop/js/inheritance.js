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

const animal = new Animal("Animal");
animal.eat();
animal.sleep();

// Inheritance is the process of creating a new Child class based on an existing Parent class.
// define a subclass called Cat that inherits from Animal
class Cat extends Animal {
  constructor(name) {
    super(name);
  }
  // Child class new method meow()
  meow() {
    console.log(`${this.name} says meow.`);
  }

  // override the sleep() method from Animal base class
  sleep() {
    console.log(`${this.name} is sleeping on bed.`);
  }
}

const objCat = new Cat("Cat");
objCat.eat();
objCat.sleep();
objCat.meow();
