// JS Objects

// Basic object
const person = {
    name: "John",
    age: 22,
    city: "Abuja"
} // This object has 3 properties i.e. name, age & city
console.log(`Person Object: ${JSON.stringify(person,null,2)}`);

// Object Creation Syntax

// Object literal
const car = {
    brand: "Toyota",
    model: "Tundra",
    year: 2026
}

// Using new Object();
const book = new Object();
book.name = "The 48 Laws of Power";
book.author = "Robert Greene";

// Using constructor
function Student(name,grade) {
    this.name = name;
    this.grade = grade;
}

const student1 = new Student("Jonathan","A+");
console.log(`Student 1: ${JSON.stringify(student1,null,2)}`);

// Accessing Object Properties
const account = {
    accountNo: "7392018846",
    balance: "$8,000.00",   
    account_holder: "Jonathan Crane"
}

console.log("Account Details");
console.log(`Account No.: ${account.accountNo}`); // Dot Notation
console.log(`Account Balance: ${account["balance"]}`); // Bracket Notation
console.log(`Account Holder: ${account.account_holder}`);

// Bracket notation can also be used for dynamic properties
const property = "accountNo";
console.log(account[property]);