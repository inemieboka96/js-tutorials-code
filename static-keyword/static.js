/*
  The `static` keyword in JavaScript is used in classes 
  to define a method or property that belongs to the class 
  itself, rather than to instances of the class.

  Basic Syntax:

      class MyClass {
          static myStaticMethod() {
              // code for the static method
          }

          static myStaticProperty = 'someValue';
      }

  Usage:

  1. Accessing a static method or property:
        MyClass.myStaticMethod();
        console.log(MyClass.myStaticProperty);

  2. Static members cannot be accessed from instances:
        const obj = new MyClass();
        obj.myStaticMethod(); // ❌ Error

  3. Common use cases:
      - Utility functions that don't depend on instance data
      - Constants or configuration values related to the class
      - Factory methods for creating instances

  Key Point:
      Static members are tied to the class itself, not to individual objects.
*/
//  Console Log Title
const titleLog = (message) => {
  const line = "=".repeat(message.length + 8); // adjusts length dynamically
  console.log(`\n${line} ${message.toUpperCase()} ${line}\n`);
};

// Key Concept

class MyClass {
  // Instance method - belongs to each object
  instanceMethod() {
    console.log("Called on an Instance");
  }
  // Static method - Belongs to the class itself
  static staticMethod() {
    console.log("Called on the class");
  }
}

const obj = new MyClass();
obj.instanceMethod(); // ✅ Works
MyClass.staticMethod(); // ✅ Works

//obj.staticMethod(); // ❌ Error: not a function
//MyClass.instanceMethod(); // ❌ Error: not a function

// Use Cases

// 1) Utility Functions
class MathHelper {
  static add(a, b) {
    return a + b;
  }

  static multiply(a, b) {
    return a * b;
  }

  static square(num) {
    return num * num;
  }
}

titleLog("MathHelper Details");
console.log(MathHelper.add(5, 3)); // 8
console.log(MathHelper.multiply(4, 7)); // 28
console.log(MathHelper.square(5)); // 25

// No need to create an instance
// const helper = new MathHelper(); // Unnecessary!

// 2) Factory Methods -> create and return instances with specific configurations

class User {
  constructor(name, role, permissions) {
    this.name = name;
    this.role = role;
    this.permissions = permissions;
  }

  // Static method for creating admins
  static createAdmin(name) {
    const ADMIN_PERMISSIONS = ["read", "write", "delete"];
    return new User(name, "admin", ADMIN_PERMISSIONS);
  }
  // Static method for creating guest
  static createGuest(name) {
    const GUEST_PERMISSIONS = ["read"];
    return new User(name, "guest", GUEST_PERMISSIONS);
  }

  // Instance method
  displayInfo() {
    console.log(`${this.name} (${this.role}): ${this.permissions.join(", ")}`);
  }
}
titleLog("User Details");
const admin = User.createAdmin("John");
const guest = User.createGuest("Jane");

admin.displayInfo();
guest.displayInfo();

// 3) Static Properties -> store data at the class level, shared across all instances

class Database {
    // Private vars
    static CONNECTION_COUNT = 0; // Connections to database
    static MAX_CONNECTIONS = 10; // Maximum no. of connections

    constructor(name) {
        // Validations
        if(Database.CONNECTION_COUNT >= Database.MAX_CONNECTIONS) {
            throw new Error('Max connections reached!!');
        }

        this.name = name;
        Database.CONNECTION_COUNT++;
        console.log(`Connection ${Database.CONNECTION_COUNT} created: ${name}`);
    }

    static getConnectionCount() {
        return Database.CONNECTION_COUNT;
    }

    disconnect() {
        Database.CONNECTION_COUNT--;
        console.log(`${this.name} disconnected. Active: ${Database.CONNECTION_COUNT}`);
    }
}

titleLog("Database Details");
const db1 = new Database('MySQL');     // Connection 1 created: MySQL
const db2 = new Database('PostgreSQL'); // Connection 2 created: PostgreSQL

console.log(Database.getConnectionCount()); // 2

db1.disconnect(); // MySQL disconnected. Active: 1
console.log(Database.CONNECTION_COUNT); // 1 (accessed directly)

// 4) Counter/ID Generator

class Product {
    static nextId = 1; // Start product ID's from 1;
    constructor(name,price) {
        this.id = Product.nextId++; // Increment id no by 1
        this.name = name;
        this.price = price;
    }

    static resetIdCounter() {
        Product.nextId = 1;
    }
}

titleLog("Product Details");
const p1 = new Product('Laptop',899);
const p2 = new Product('Mouse',20);
const p3 = new Product('Keyboard',65);

console.log(p1.id); // 1
console.log(p2.id); // 2
console.log(p3.id); // 3

Product.resetIdCounter();
const p4 = new Product('Monitor', 300);
console.log(p4.id); // 1 (counter was reset)    

// 5) Validation & Helper Functions
class Email {
    constructor(address) {
        if(!Email.isValid(address)) throw new Error("Invalid email address!");
        this.address = address;
    }

    static isValid(email) {
        return email.includes("@") && email.includes(".");
    }

    static extractDomain(email) {
        return email.split("@")[1];
    }
}
titleLog("Email Details");
// Use static method without creating instance
console.log(Email.isValid('test@example.com')); // true
console.log(Email.isValid('invalid-email'));    // false
console.log(Email.extractDomain('user@gmail.com')); // gmail.com

// Creating instances with validation
const email1 = new Email('john@example.com'); // ✅ Works
// const email2 = new Email('invalid'); // ❌ Throws error

// 6) Configuration & Constraints
class Config {
  static API_URL = "https://api.example.com";
  static TIMEOUT = 5000;
  static MAX_RETRIES = 3;

  static getFullEndpoint(path) {
    return `${Config.API_URL}${path}`;
  }
}

// Access configuration anywhere in your app
titleLog("Configuration Details");
console.log(Config.API_URL);                    // https://api.example.com
console.log(Config.getFullEndpoint('/users'));  // https://api.example.com/users

// 6) Comparison & Utility Methods

class Temperature {
  constructor(celsius) {
    this.celsius = celsius;
  }
  // Static methods
  static celsiusToFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
  }
  
  static fahrenheitToCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5/9;
  }

  static compare(temp1,temp2) {
    if(temp1.celsius > temp2.celsius) return 1;
    if(temp1.celsius < temp2.celsius) return -1;
    return 0;
  }
  // Instance methods
  toFahrenheit() {
    return Temperature.celsiusToFahrenheit(this.celsius);
  }
}

titleLog("Temperature Details");
// Using static methods
console.log(Temperature.celsiusToFahrenheit(100)); // 212
console.log(Temperature.fahrenheitToCelsius(32));  // 0

const t1 = new Temperature(25);
const t2 = new Temperature(30);

console.log(Temperature.compare(t1, t2)); // -1 (t1 is less than t2)
console.log(t1.toFahrenheit());           // 77

// Real World Example
class UserManager {
  // Class-only properties
  static users = [];
  static currentId = 1; // Starts at 1

  constructor(username,email) {
    this.id = UserManager.currentId++; // Starts at 1
    this.username = username;
    this.email = email;
    this.createdAt = new Date();

    UserManager.users.push(this); // Add new users to the user's array
  }

  // Static methods for managing all users
  static getAllUsers() {
    return UserManager.users;
  }

  static findById(id) {
    return UserManager.users.find(user => user.id === id);
  }

  static findByUsername(username) {
    return UserManager.users.find(user => user.username === username);
  }

  static getTotalUsers() {
    return UserManager.users.length;
  }

  static deleteUser(id) {
    const index = UserManager.users.findIndex(user => user.id === id); // Find the index of user by id
    if (index !== -1) { // if index within bounds
      UserManager.users.splice(index,1); // Delete user at specific index
      return true;
    };
    return false; // if user not found
  }

  // Instance method
  getProfile() {
    return {
      id: this.id,
      username: this.username,
      email: this.email,
      memberSince: this.createdAt
    }; // Return object values of class instance
  }
}

titleLog("User Manager Details");
// Creating users
const user1 = new UserManager('alice', 'alice@example.com');
const user2 = new UserManager('bob', 'bob@example.com');
const user3 = new UserManager('charlie', 'charlie@example.com');

// Using static methods
console.log(UserManager.getTotalUsers()); // 3
console.log(UserManager.findByUsername('bob')); // User object
console.log(UserManager.findById(1).getProfile()); // Alice's profile

UserManager.deleteUser(2);
console.log(UserManager.getTotalUsers()); // 2