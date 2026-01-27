/*
Inheritance in JavaScript

Inheritance is a mechanism that allows one class (or constructor function)
to reuse properties and methods of another class. This helps reduce code
duplication and model real-world relationships (e.g., a Dog is an Animal).

BASIC SYNTAX (ES6 Classes):
--------------------------
class Parent {
  constructor(prop) {
    this.prop = prop;
  }

  parentMethod() {
    console.log("Method from Parent");
  }
}

class Child extends Parent {
  constructor(prop, childProp) {
    super(prop); // calls Parent's constructor
    this.childProp = childProp;
  }

  childMethod() {
    console.log("Method from Child");
  }
}

const obj = new Child("value1", "value2");

KEY CONCEPTS:
-------------
- extends: creates a subclass that inherits from a parent class
- super(): calls the parent class constructor or methods
- this: refers to the current object instance
- Child objects can access both Parent and Child methods

INHERITANCE WITH PROTOTYPES (Pre-ES6):
-------------------------------------
function Parent(prop) {
  this.prop = prop;
}

Parent.prototype.parentMethod = function () {
  console.log("Method from Parent");
};

function Child(prop, childProp) {
  Parent.call(this, prop); // inherit properties
  this.childProp = childProp;
}

Child.prototype = Object.create(Parent.prototype);
Child.prototype.constructor = Child;

USE CASES:
----------
- Creating specialized versions of a general class
  (e.g., AdminUser extends User)
- Sharing common behavior across multiple classes
- Organizing large applications with clear relationships
- Implementing polymorphism (same method name, different behavior)

In summary, inheritance helps write cleaner, reusable, and more maintainable code.
*/

// Basic Example

class Vehicle {
  constructor(brand, speed) {
    this.brand = brand;
    this.speed = speed;
  }

  accelerate() {
    this.speed += 10;
    console.log(`${this.brand} accelerating to ${this.speed} km/h`);
  }
}

class Car extends Vehicle {
  constructor(brand, speed, doors) {
    super(brand, speed);
    this.doors = doors;
  }

  honk() {
    // Car Specific instance method
    console.log(`${this.brand} goes beeeeeeep!!`);
  }

  // Override parent method
  accelerate() {
    super.accelerate();
    console.log(`Smoooooth acceleration!!!`);
  }
}

const toyota = new Car("Toyota", 60, 4);

toyota.accelerate();
toyota.honk();

// Object.create() Method

const person = {
  greet() {
    console.log(`Hi I'm ${this.name}`);
  },
  introduce() {
    console.log(`I work as a ${this.job}`);
  },
};

const employee = Object.create(person);
employee.name = "John";
employee.job = "Programmer";

employee.greet();
employee.introduce();

// ========== USE CASES ==========

// 1) UI Components

class Component {
  constructor(props) {
    this.props = props;
    this.state = {};
  }

  render() {
    throw new Error("render() must be implemented");
  }

  setState(newState) {
    this.state = { ...this.state, ...newState };
    this.render();
  }
}

class Button extends Component {
  constructor(props) {
    super(props);
    this.state = { clicked: false };
  }

  render() {
    return `<button>${this.props.text}</button>`;
  }

  handleClick() {
    this.setState({ clicked: true });
    console.log(`Button Clicked!!`);
  }
}

const submitBtn = new Button({ text: "Submit" });

// 2) Error Handling

class CustomError extends Error {
  constructor(message, errorCode) {
    super(message);
    this.name = "Custom Error";
    this.errorCode = errorCode;
    this.timeStamp = new Date();
  }
}

class ValidationError extends CustomError {
  constructor(field, message) {
    super(message, "VALIDATION_ERROR");
    this.field = field;
  }
}

try {
  throw new ValidationError("Email", "Invalid Email Format");
} catch (error) {
  console.log(error.name);
  console.log(error.field);
  console.log(error.errorCode);
}

// 3) Game Development

class Character {
  constructor(name, health) {
    this.name = name;
    this.health = health;
    this.isAlive = true;
  }

  // Instance Methods
  takeDamage(amount) {
    this.health -= amount;
    if (this.health <= 0) {
      this.isAlive = false; // If health is 0, character dies (obviously)
      console.log(`${this.name} has been defeated!!!`);
    }
  }

  stats() {
    console.log(`\n========== ${this.name} — Stats ==========\n`);
    console.log(`❤️  Health   : ${this.health}`);
    console.log(`☠️  Status   : ${this.isAlive ? "Alive" : "Dead"}`);
    console.log(`\n=========================================\n`);
  }
}

class Warrior extends Character {
  constructor(name, health, weapon) {
    super(name, health);
    this.weapon = weapon;
    this.armor = 50; // 50HP❤️
  }

  // Warrior-Specific Methods
  attack(target) {
    console.log(`${this.name} attacks ${target} with ${this.weapon}`);
    target.takeDamage(30);
  }

  defend() {
    this.armor += 20;
    console.log(`${this.name} raises shield! Armor: ${this.armor}`);
  }

  // @Override
  stats() {
    super.stats();
    console.log(`⚔️  Weapon   : ${this.weapon}`);
    console.log();
  }
}

class Mage extends Character {
  constructor(name, health) {
    super(name, health);
    this.mana = 100; // 100MP
  }

  // Mage-Specific Method
  castSpell(target) {
    if (this.mana >= 20) {
      this.mana -= 20; // -20MP
      console.log(`${this.name} casts fireball!`);
      target.takeDamage(40);
    }
  }

  // @Override
  stats() {
    super.stats();
    console.log(`✨  MP   : ${this.mana}`);
    console.log();
  }
}

const warrior = new Warrior("Thorin", 200, "Sword");
const mage = new Mage("Gandalf", 120);

warrior.attack(mage); // Thorin attacks with Sword!
mage.castSpell(warrior); // Gandalf casts fireball!

// Display Character Stats
warrior.stats();
mage.stats();

