// Problem-Set Solutions

const titleLog = (message) => {
  const line = "=".repeat(message.length + 8); // adjusts length dynamically
  console.log(`\n${line} ${message.toUpperCase()} ${line}\n`);
};

// Beginner

// Problem 1: Basic Constructor
class Student {
  constructor(name, grade) {
    this.name = name;
    this.grade = grade;
  }
}
titleLog("Student Details");
const s1 = new Student("Alice", 10);
const s2 = new Student("Bob", 11);

console.log(JSON.stringify(s1, null, 2));
console.log(JSON.stringify(s2, null, 2));

// Problem 2: Constructor with Method
class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  getArea() {
    return `Area: ${this.width * this.height}`; // Formula
  }
}

const rect1 = new Rectangle(10, 5);
const rect2 = new Rectangle(8, 3);

titleLog("Rectangle Areas");
console.log(rect1.getArea());
console.log(rect2.getArea());

// Problem 3: Default Values
class Product {
  constructor(name, price = 0) {
    // Default Value
    this.name = name;
    this.price = price;
  }

  displayInfo() {
    console.log(`Product: ${this.name}, Price: $${this.price}`);
  }
}

const p1 = new Product("Laptop", 999);
const p2 = new Product("Mouse");

titleLog("Product Details");
p1.displayInfo();
p2.displayInfo();

// Intermediate

// Problem 4: Prototype Methods
class Circle {
  constructor(radius) {
    this.radius = radius;
  }

  getArea() {
    const area = Math.PI * this.radius * this.radius;
    return parseFloat(area.toFixed(2));
  }

  getCircumference() {
    const circumference = 2 * Math.PI * this.radius;
    return parseFloat(circumference.toFixed(2));
  }
}

const c5 = new Circle(5);

titleLog("Circle Details");
console.log("Circle with radius 5:");
console.log(`Area: ${c5.getArea()}`);
console.log(`Circumference: ${c5.getCircumference()}`);

// Problem 5: Counter Object
class Counter {
  constructor(count = 0) {
    // Default value
    this.count = count;
  }

  increment() {
    this.count++;
  }

  decrement() {
    this.count--;
  }

  reset() {
    this.count = 0;
  }

  getValue() {
    return this.count;
  }
}

const counter = new Counter();

titleLog("Counter Details");
console.log(`Count: ${counter.getValue()}`); // Initial value 0
// Increment 3 times
counter.increment();
counter.increment();
counter.increment();
// Display count
console.log(`Count: ${counter.getValue()}`);
// Decrement once
counter.decrement();
// Display count
console.log(`Count: ${counter.getValue()}`);
// Reset counter
counter.reset();
// Display count
console.log(`Count: ${counter.getValue()}`);

// Problem 6: Shopping Cart
class ShoppingCart {
  constructor(items = []) {
    this.items = items;
  }

  addItem(name, price) {
    const item = {
      // Create item object
      name: name,
      price: price,
    };
    this.items.push(item); // Add item to cart
    console.log(
      `[ ${item.name} has been added to the cart. Price: $${item.price} ]`
    );
  }

  removeItem(name) {
    let found = false; // flag to track if the item was removed
    for (let i = 0; i < this.items.length; i++) {
      const item = this.items[i];
      if (item.name === name) {
        this.items.splice(i, 1); // Remove item at specific index
        console.log(`[ ${item.name} has been removed from cart ]`);
        found = true;
        break;
      }
    }
    if (!found) console.log(`${item.name} not found`);
  }

  getTotal() {
    let prices = []; // Initialize empty arr

    for (let i = 0; i < this.items.length; i++) {
      const item = this.items[i];
      prices.push(item.price); // Add item price to arr
    }

    const total = prices.reduce((total, sum) => total + sum, 0); // Calc sum
    return total;
  }
}

titleLog("Shopping Cart Details");
const cart = new ShoppingCart(); // Initialize empty cart

// Adding 3 items to cart
cart.addItem("Beef", 20);
cart.addItem("Fish", 10);
cart.addItem("Milk", 5);

// Calculate Total
console.log(`Total: $${cart.getTotal()}`);
// Removing milk from cart
cart.removeItem("Milk");
// Total after removing milk
console.log(`Total after removing milk: $${cart.getTotal()}`);

// Advanced

// Problem 7: Task Manager
class Task {
  constructor(title = "Untitled Task", description) {
    this.title = title;
    this.description = description;
    // Default
    this.completed = false;
    this.createdAt = new Date(); // Current Date
  }

  markAsCompleted() {
    this.completed = true;
  }

  getTitle() {
    return this.title;
  }

  getDescription() {
    return this.description;
  }

  getStatus() {
    return this.completed ? "Complete" : "Incomplete";
  }

  isOverdue() {
    // Edge Case: Completed tasks cannot be overdue
    if (this.completed) return false;

    const currentDate = Date.now(); // Current time in milliseconds
    const timeDifference = currentDate - this.createdAt.getTime();

    // 7 days in milliseconds
    const sevenDaysInMs = 7 * 24 * 60 * 60 * 1000;

    return timeDifference > sevenDaysInMs;
  }
}

const task = new Task(
  "Complete Assignment",
  "Finish coding problem set before Saturday"
);

// Console Output
titleLog("Task Manager Details");
console.log(`Task: ${task.getTitle()}`);
console.log(`Status: ${task.getStatus()}`);
console.log(`Is Overdue ?: ${task.isOverdue()}`);
console.log();
console.log(`Task: ${task.getTitle()}`);
task.markAsCompleted();
console.log(`Status: ${task.getStatus()}`);

// Problem 8: Inheritance Problem
// TODO: Complete tomorrow