/*
 * map(), filter() & reduce() Functions in JavaScript
 *
 * These are higher-order array methods that enable functional programming patterns:
 *
 * map() - Transforms each element in an array and returns a new array of the same length
 *   Use cases: Converting data types, extracting properties, applying calculations
 *   Example: [1, 2, 3].map(x => x * 2) → [2, 4, 6]
 *
 * filter() - Creates a new array with elements that pass a test condition
 *   Use cases: Removing unwanted items, searching, conditional selection
 *   Example: [1, 2, 3, 4].filter(x => x > 2) → [3, 4]
 *
 * reduce() - Reduces an array to a single value by applying a function cumulatively
 *   Use cases: Summing values, flattening arrays, grouping data, building objects
 *   Example: [1, 2, 3].reduce((sum, x) => sum + x, 0) → 6
 */

// ================================
// map(), filter(), reduce() Examples
// ================================

// Colored console helpers
const logTitle = (title) => console.log(`%c${title}`, 'color: #ffdd57; font-weight: bold; font-size: 16px;');
const logResult = (label, value) => console.log(`%c${label}: %c${JSON.stringify(value, null, 2)}`, 'color: #00bcd4; font-weight: bold;', 'color: #fff;');

// ----------------
// map() Examples
// ----------------
logTitle("MAP() Examples");

// Transform numbers
const numbers = [2, 4, 6, 8, 10];
const doubled = numbers.map(n => n * 2);
logResult("Original Numbers", numbers);
logResult("Doubled Numbers", doubled);

// Extract user names
const users = [
    { id: 1, name: "John", age: 22 },
    { id: 2, name: "Silas", age: 26 },
    { id: 3, name: "Peter", age: 24 },
];
const names = users.map(user => user.name);
logResult("User Names", names);

// ----------------
// filter() Examples
// ----------------
logTitle("FILTER() Examples");

// Filter even & odd numbers
const nums = [1,2,3,4,5,6,7,8,9,10];
const evenNums = nums.filter(n => n % 2 === 0);
const oddNums = nums.filter(n => n % 2 !== 0);
logResult("Even Numbers", evenNums);
logResult("Odd Numbers", oddNums);

// Adults & kids
const testUsers = [
  { name: "Liam", age: 16 }, { name: "Noah", age: 17 }, { name: "Ethan", age: 15 },
  { name: "Lucas", age: 14 }, { name: "Mason", age: 17 }, { name: "James", age: 18 },
  { name: "Oliver", age: 21 }, { name: "Benjamin", age: 25 }, { name: "Henry", age: 30 },
  { name: "Daniel", age: 40 },
];
const adults = testUsers.filter(u => u.age >= 18);
const kids = testUsers.filter(u => u.age < 18);
logResult("Adults", adults);
logResult("Kids", kids);

// ----------------
// reduce() Examples
// ----------------
logTitle("REDUCE() Examples");

// Sum numbers
const sampleNumbers = [1,2,3,4,5,6,7];
const sum = sampleNumbers.reduce((total, n) => total + n, 0);
logResult("Sum of Numbers", sum);

// Count fruit occurrences
const fruits = ["orange","orange","lemon","lime","grapefruit","mandarin","mandarin"];
const fruitCount = fruits.reduce((acc, fruit) => {
    acc[fruit] = (acc[fruit] || 0) + 1;
    return acc;
}, {});
logResult("Fruit Frequency", fruitCount);

// Flatten nested arrays
const nested = [[1,2],[3,4],[5,6]];
const flattened = nested.reduce((acc, arr) => acc.concat(arr), []);
logResult("Flattened Array", flattened);

// Group employees by department
const employees = [
  { name: "Alice", department: "Engineering" },
  { name: "Bob", department: "Sales" },
  { name: "Charlie", department: "Engineering" },
  { name: "David", department: "Marketing" }
];
const groupedByDept = employees.reduce((acc, emp) => {
    (acc[emp.department] = acc[emp.department] || []).push(emp);
    return acc;
}, {});
logResult("Grouped By Department", groupedByDept);

// ----------------
// Method chaining
// ----------------
logTitle("Method Chaining Example");
const orders = [
    { product: "Laptop", price: 1000, quantity: 2 },
    { product: "Mouse", price: 25, quantity: 5 },
    { product: "Keyboard", price: 75, quantity: 3 }
];

const totalCost = orders
    .map(o => o.price * o.quantity)
    .reduce((sum, cost) => sum + cost, 0);
const formatter = new Intl.NumberFormat('en-US', { style:'currency', currency:'USD' });
console.log(`%cTotal Cost: %c${formatter.format(totalCost)}`, 'color: #ffdd57; font-weight: bold;', 'color: #00ffab;');

const expensiveItems = orders
    .filter(o => o.price > 50)
    .map(o => o.product);
console.log(`%cExpensive Items: %c${expensiveItems.join(', ')}`, 'color: #ffdd57; font-weight: bold;', 'color: #00ffab;');