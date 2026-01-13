console.clear();
console.log("%c🚀 CONSTRUCTORS IN JAVASCRIPT TUTORIAL 🚀", "color: #667eea; font-size: 20px; font-weight: bold; text-shadow: 2px 2px 4px rgba(0,0,0,0.3);");
console.log("%c" + "=".repeat(70), "color: #667eea; font-size: 14px;");

// ==================== PART 1: OLD WAY ====================
console.log("\n%c📖 PART 1: THE OLD WAY (Function Constructors)", "color: #f5576c; font-size: 16px; font-weight: bold;");
console.log("%c" + "-".repeat(70), "color: #f5576c; font-size: 12px;");

function PersonOldWay(name, age) {
    this.name = name;
    this.age = age;
    this.introduce = function() {
        return `Hello, I'm ${this.name} and I'm ${this.age} years old.`;
    };
}

const userOld1 = new PersonOldWay("Alice", 28);
const userOld2 = new PersonOldWay("Bob", 35);

console.log("%cExample 1: Creating objects with function constructor", "color: #333; font-weight: bold;");
console.log("User 1:", userOld1);
console.log("User 2:", userOld2);
console.log("User 1 Introduce:", userOld1.introduce());
console.log("User 2 Introduce:", userOld2.introduce());

// ==================== PART 2: MODERN WAY ====================
console.log("\n%c✨ PART 2: THE MODERN WAY (ES6 Classes)", "color: #667eea; font-size: 16px; font-weight: bold;");
console.log("%c" + "-".repeat(70), "color: #667eea; font-size: 12px;");

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greet() {
        return `Hi, I'm ${this.name}`;
    }

    getInfo() {
        return `${this.name} is ${this.age} years old`;
    }
}

const person1 = new Person("John", 33);
const person2 = new Person("Julius", 23);

console.log("%cExample 1: Creating objects with ES6 class", "color: #333; font-weight: bold;");
console.table([person1, person2]);
console.log("Person 1 Greeting:", person1.greet());
console.log("Person 2 Info:", person2.getInfo());

// ==================== USE CASE 1: MULTIPLE SIMILAR OBJECTS ====================
console.log("\n%c📚 USE CASE 1: Creating Multiple Similar Objects", "color: #00bfa5; font-size: 16px; font-weight: bold;");
console.log("%c" + "-".repeat(70), "color: #00bfa5; font-size: 12px;");

class Book {
    constructor(title, author, pages) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.isRead = false;
    }

    markAsRead() {
        this.isRead = true;
        return `"${this.title}" marked as read!`;
    }

    getDetails() {
        return `${this.title} by ${this.author} (${this.pages} pages) - Read: ${this.isRead}`;
    }
}

const book1 = new Book("1984", "George Orwell", 328);
const book2 = new Book("To Kill a Mockingbird", "Harper Lee", 281);
const book3 = new Book("The Great Gatsby", "F. Scott Fitzgerald", 180);

console.log("%cBooks Created:", "color: #333; font-weight: bold;");
console.table([book1, book2, book3]);
console.log(book1.markAsRead());
console.log("Book 1 Details:", book1.getDetails());
console.log("Book 2 Details:", book2.getDetails());

// ==================== USE CASE 2: ENCAPSULATING DATA & BEHAVIOR ====================
console.log("\n%c🏦 USE CASE 2: Encapsulating Data & Behavior", "color: #ff9800; font-size: 16px; font-weight: bold;");
console.log("%c" + "-".repeat(70), "color: #ff9800; font-size: 12px;");

class BankAccount {
    constructor(owner, balance) {
        this.owner = owner;
        this.balance = balance;
        this.transactions = [];
    }

    deposit(amount) {
        this.balance += amount;
        this.transactions.push(`+$${amount}`);
        return `✅ Deposited $${amount}. New balance: $${this.balance}`;
    }

    withdraw(amount) {
        if (amount <= this.balance) {
            this.balance -= amount;
            this.transactions.push(`-$${amount}`);
            return `✅ Withdrew $${amount}. New balance: $${this.balance}`;
        } else {
            return `❌ Insufficient Funds! Available: $${this.balance}`;
        }
    }

    getStatement() {
        return `Account Owner: ${this.owner} | Current Balance: $${this.balance} | Transactions: ${this.transactions.length}`;
    }
}

console.log("%cBank Account Operations:", "color: #333; font-weight: bold;");
const myAccount = new BankAccount("John Doe", 1000);
console.log(myAccount.deposit(500));
console.log(myAccount.withdraw(200));
console.log(myAccount.withdraw(2000));
console.log(myAccount.deposit(150));
console.log("\nAccount Statement:", myAccount.getStatement());
console.log("Transaction History:", myAccount.transactions);
console.log("Final Account Object:", myAccount);

// ==================== USE CASE 3: PROTOTYPES FOR EFFICIENCY ====================
console.log("\n%c🚗 USE CASE 3: Using Prototypes for Efficiency", "color: #9c27b0; font-size: 16px; font-weight: bold;");
console.log("%c" + "-".repeat(70), "color: #9c27b0; font-size: 12px;");

class Car {
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
        this.speed = 0;
        this.isRunning = false;
    }

    start() {
        this.isRunning = true;
        return `🔧 ${this.year} ${this.make} ${this.model} started!`;
    }

    accelerate(amount) {
        if (this.isRunning) {
            this.speed += amount;
            return `⚡ ${this.make} ${this.model} speed: ${this.speed} mph`;
        }
        return "❌ Car is not running!";
    }

    brake() {
        this.speed = 0;
        return `🛑 ${this.make} ${this.model} stopped!`;
    }

    stop() {
        this.isRunning = false;
        this.speed = 0;
        return `🔌 ${this.year} ${this.make} ${this.model} turned off!`;
    }
}

console.log("%cCar Operations:", "color: #333; font-weight: bold;");
const car1 = new Car("Toyota", "Camry", 2023);
const car2 = new Car("Honda", "Civic", 2022);

console.log(car1.start());
console.log(car1.accelerate(60));
console.log(car1.accelerate(20));
console.log(car1.brake());
console.log(car1.stop());

console.log("\n" + car2.start());
console.log(car2.accelerate(50));
console.log(car2.brake());
console.log(car2.stop());

console.table([car1, car2]);

// ==================== BONUS: INHERITANCE EXAMPLE ====================
console.log("\n%c🎓 BONUS: Constructor Inheritance", "color: #2196f3; font-size: 16px; font-weight: bold;");
console.log("%c" + "-".repeat(70), "color: #2196f3; font-size: 12px;");

class Animal {
    constructor(name, species) {
        this.name = name;
        this.species = species;
    }

    describe() {
        return `${this.name} is a ${this.species}`;
    }
}

class Dog extends Animal {
    constructor(name, breed) {
        super(name, "Dog");
        this.breed = breed;
    }

    bark() {
        return `${this.name} barks: Woof! Woof!`;
    }
}

const dog1 = new Dog("Buddy", "Golden Retriever");
const dog2 = new Dog("Max", "German Shepherd");

console.log("%cInheritance Example - Dogs:", "color: #333; font-weight: bold;");
console.log(dog1.describe());
console.log(dog1.bark());
console.log("\n" + dog2.describe());
console.log(dog2.bark());
console.table([dog1, dog2]);

// ==================== SUMMARY ====================
console.log("\n%c" + "=".repeat(70), "color: #667eea; font-size: 14px;");
console.log("%c📌 KEY TAKEAWAYS", "color: #667eea; font-size: 16px; font-weight: bold;");
console.log("%c" + "=".repeat(70), "color: #667eea; font-size: 14px;");
console.log("%c✓ Old Way: Function constructors work but are verbose", "color: #666; font-size: 12px;");
console.log("%c✓ Modern Way: ES6 classes are cleaner and more intuitive", "color: #666; font-size: 12px;");
console.log("%c✓ Use Cases: Multiple objects, encapsulation, and inheritance", "color: #666; font-size: 12px;");
console.log("%c✓ Methods are stored in the prototype for memory efficiency", "color: #666; font-size: 12px;");
console.log("%c✓ Always use 'new' keyword to create instances from constructors", "color: #666; font-size: 12px;");
console.log("\n%c" + "=".repeat(70), "color: #667eea; font-size: 14px;");