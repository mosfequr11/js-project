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
console.log("break");

// define another subclass called Dog that also inherits from Animal
class Dog extends Animal {
  constructor(name) {
    super(name);
  }

  bark() {
    console.log(`${this.name} says woof.`);
  }

  // override the eat method of Animal
  eat() {
    console.log(`${this.name} is eating from a bowl.`);
  }
}

// create an array of animals
let animalsarr = [new Cat("loly"), new Dog("Barby")];

// loop through the array and call methods on each animal
for (let animal of animalsarr) {
  animal.eat();
  animal.sleep();

  // check if the animal is a cat and call the meow method if it is
  if (animal instanceof Cat) {
    animal.meow();
  }

  // check if the animal is a dog and call the bark method if it is
  if (animal instanceof Dog) {
    animal.bark();
  }
}
