/*
  JavaScript Objects

  Objects are used to store related data and functionality together.
  They are collections of key–value pairs, where:
  - keys (also called properties) are strings
  - values can be any data type (numbers, strings, arrays, functions, or even other objects)

  Basic Syntax:
  const person = {
    name: "Alex",
    age: 25,
    isStudent: true,
    greet: function () {
      return "Hello!";
    }
  };

  Accessing Values:
  - Dot notation: person.name
  - Bracket notation: person["age"]

  Common Use Cases:
  - Representing real-world entities (users, products, cars, etc.)
  - Grouping related data into a single structure
  - Storing configuration settings
  - Creating reusable and organized code

  Objects are a core building block in JavaScript and are heavily used
  in frameworks, APIs, and application state management.
*/


// Basic object
const person = {
  name: "John",
  age: 22,
  city: "Abuja",
}; // This object has 3 properties i.e. name, age & city
console.log(`Person Object: ${JSON.stringify(person, null, 2)}`);

// Object Creation Syntax

// Object literal
const car = {
  brand: "Toyota",
  model: "Tundra",
  year: 2026,
};

// Using new Object();
const book = new Object();
book.name = "The 48 Laws of Power";
book.author = "Robert Greene";

// Using constructor
function Student(name, grade) {
  this.name = name;
  this.grade = grade;
}

const student1 = new Student("Jonathan", "A+");
console.log(`Student 1: ${JSON.stringify(student1, null, 2)}`);

// Accessing Object Properties
const account_1 = {
  accountNo: "7392018846",
  balance: "$8,000.00",
  account_holder: "Jonathan Crane",
};

console.log("Account Details");
console.log(`Account No.: ${account_1.accountNo}`); // Dot Notation
console.log(`Account Balance: ${account_1["balance"]}`); // Bracket Notation
console.log(`Account Holder: ${account_1.account_holder}`);

// Bracket notation can also be used for dynamic properties
const property = "accountNo";
console.log(account_1[property]);

// Methods
const Calculator = {
  // Standard Syntax
  add: function (a, b) {
    return a + b;
  },
  subtract: function (a, b) {
    return a - b;
  },
  // ES6+ syntax
  multiply(a, b) {
    return a * b;
  },
  divide(a, b) {
    return a / b;
  },
};

console.log(`Calculator.add(1,2): ${Calculator.add(1, 2)}`);
console.log(`Calculator.subtract(1,2): ${Calculator.subtract(1, 2)}`);
console.log(`Calculator.multiply(1,2): ${Calculator.multiply(1, 2)}`);
console.log(`Calculator.divide(1,2): ${Calculator.divide(1, 2)}`);

// The 'This' Keyword --> Refers to the obj itself
const account = {
  balance: 7850, // property
  deposit: function (amount) {
    if (typeof amount !== "number") {
      return "Input not valid";
    }
    this.balance += amount; // referring to the value of the object's balance property
    return this.balance; // returns current value after calculation
  },
  withdraw: function (amount) {
    if (typeof amount !== "number") {
      return "Input not valid";
    }
    if (amount <= this.balance) { // amount less than the acc balance
      this.balance -= amount; // Withdraw normally
      return this.balance;
    }
    return "Insufficient Funds :("; // else print error message
  }
};

// Account Console logs
console.log(`Current Balance: ${account.balance}`);
console.log(`Balance after deposit: ${account.deposit(500)}`);
console.log(`Balance after withdrawal: ${account.withdraw(250)}`);


// Practical Use Cases with Examples

// Storing Related Info
const product = {
  id: 1,
  name: "HP Envy x360 14",
  price: 1800000,
  currency: "NGN",
  inStock: true,
  category: "Electronics"
};

// Configuration Objects
const config = {
  API_URL: "https://api.example.com", // sample API URL (DON'T CLICK IT)
  timeout: 5000,
  retryAttempts: 3,
  enableLogging: true
};

// Modelling real-world entities
const restaurant = {
  name: "Mama Success' Pot",
  location: "Abuja",
  cuisine: "Nigerian",
  rating: 4.8,
  menu: [["Jollof Rice", "Egusi Soup", "Pounded Yam"]], 
  isOpen(hour) {
    return hour >= 9 && hour <= 22; // Working hours: 9AM-22PM
  }
};

// Grouping related functions (Modules)
const mathUtils = {
  square: (x) => x * x,
  cube: (x) => x * x * x,
  average: (arr) => arr.reduce((a, b) => a + b) / arr.length
};

console.log(mathUtils.square(5)); // Returns 25

// Modifying Objects
const phone = {
  brand: "Samsung",
  model: "Galaxy S21+"
};

// Adding properties
phone.color = "Black";
phone.storage = "256GB";

// Modifying properties
phone.model = "Galaxy S25+";

// Deleting properties
delete phone.storage;

console.log(JSON.stringify(phone,null,2));
// { brand: "Samsung", model: "Galaxy S25+", color: "Black" }

// Iterating through objects
const uniStudent = {
  name: "Silas",
  age: 24,
  course: "Software Engineering"
};

// Using for....in loop
for(let key in uniStudent) { // Key --> object's properties
  console.log(`${key}: ${uniStudent[key]}`); // i.e. property: value
}

// Using Object methods
console.log(`Object Keys: ${Object.keys(uniStudent)}`); // ["name", "age", "major"]
console.log(`Object Values: ${Object.values(uniStudent)}`); // ["Silas", 24, "Computer Science"]
console.log(`Object Entries: ${Object.entries(uniStudent)}`); // [["name", "Silas"], ["age", 24], ...]

// Nested Objects
const company = {
  name: "Sloth Solutions",
  address: { // sub object
    street: "123 Main St.",
    city: "Lagos",
    country: "Nigeria"
  },
  employees: [ // arr of objects
    {name: "Paul", role: "Developer"},
    {name: "James", role: "Designer"}
  ]
};

// Company's city
console.log(`Company's City: ${company.address.city}`);
// Company's first employee's name
console.log(`Company's City: ${company.employees[0].name}`);  

// Exercises
