/* 
    Constructors in JavaScript:
    - A constructor is a special function used to create and initialize objects.
    - It is typically called with the `new` keyword.
    - Inside a constructor, `this` refers to the newly created object.

    Basic Syntax:
    function Person(name, age) {
        this.name = name;
        this.age = age;
    }

    const user = new Person("Alice", 25);

    Common Use Cases:
    - Creating multiple objects with the same structure and behavior
    - Modeling real-world entities (e.g., User, Car, Product)
    - Initializing object properties at creation time

    Note:
    - By convention, constructor function names are capitalized.
    - Modern JavaScript often uses `class` syntax, which is syntactic sugar over constructors.
*/

// Basic modern syntax
class Person {
  // Person Constructor
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  // Methods
  greet() {
    console.log(`Hi I'm ${this.name}`);
  }
}

// Object creation using the 'Person' constructors
const person1 = new Person("John", 33);
const person2 = new Person("Julius", 23);

person1.greet(); // "Hi, I'm John"
person2.greet(); // "Hi, I'm Julius"

// Use Cases

// 1) Creating Multiple Similar Objects

class Book {
  constructor(title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isRead = false; // Set to false by default
  }
}

const book1 = new Book("1984", "George Orwell", 328);
const book2 = new Book("To Kill a Mockingbird", "Harper Lee", 281);

console.log(`Book 1: ${JSON.stringify(book1, null, 2)}`);
console.log(`Book 2: ${JSON.stringify(book2, null, 2)}`);

// 2) Encapsulating Related Data and Behavior

class BankAccount {
  constructor(owner, balance) {
    this.owner = owner;
    this.balance = balance;
  }

  deposit(amount) {
    this.balance += amount;
    console.log(`Deposited $${amount}. New balance: $${this.balance}`);
  }

  withdraw(amount) {
    if (amount <= this.balance) {
      this.balance -= amount;
      console.log(`Withdrew $${amount}. New balance: $${this.balance}`);
    } else {
      console.log(`Insufficient Funds !!`);
    }
  }
}
console.log("---------- Account Details ----------");
const myAccount = new BankAccount("John", 1000);
myAccount.deposit(500); // Deposited $500. New balance: $1500
myAccount.withdraw(200); // Withdrew $200. New balance: $1300

// 3) Using Prototypes for Efficiency

class Car {
  constructor(make, model) {
    this.make = make;
    this.model = model;
    this.speed = 0;
  }

  accelerate(amount) {
    this.speed += amount;
    console.log(`${this.make} ${this.model} speed: ${this.speed} mph`);
  }

  brake() {
    this.speed = 0;
    console.log(`${this.make} ${this.model} stopped`);
  }
}
console.log("---------- Car Objects ----------");
const car1 = new Car("Toyota", "Camry");
const car2 = new Car("Honda", "Civic");

car1.accelerate(60); // "Toyota Camry speed: 60 mph"
car2.accelerate(50); // "Honda Civic speed: 50 mph"

car1.brake();
car2.brake();
