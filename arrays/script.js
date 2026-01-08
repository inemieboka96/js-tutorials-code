// ==========================================
// 🚀 JS ARRAY MASTERY
// ==========================================

console.log("%c--- 📦 ARRAY BASICS ---", "color: #38bdf8; font-weight: bold; font-size: 14px;");

let vegetables = ["Carrot", "Onion", "Potato"];
console.log("Original Veggies:", vegetables);
console.log("Accessing Last Index:", vegetables[vegetables.length - 1]); // 🥔 Returns Potato

// ==========================================
// 🛠 STACKS & QUEUES (LIFO / FIFO)
// ==========================================
console.log("%c--- 🛠 STACKS & QUEUES ---", "color: #22c55e; font-weight: bold;");

// Stacks
let stack = [1, 2, 3];
stack.push(4); // Adds to end
console.log("After Push(4):", stack);
stack.pop(); // Removes from end
console.log("After Pop():", stack);

// Queues
let queue = [2, 3, 4];
queue.unshift(1); // Adds to start
console.log("After Unshift(1):", queue);
queue.shift(); // Removes from start
console.log("After Shift():", queue);

// ==========================================
// ✂️ SLICE VS SPLICE
// ==========================================
console.log("%c--- ✂️ SLICE & SPLICE ---", "color: #fbbf24; font-weight: bold;");

// Slice: Does NOT change original array (returns a copy)
let numbers = [10, 20, 30, 40, 50];
let sliced = numbers.slice(1, 4); 
console.log("Sliced (Index 1 to 4):", sliced);

// Splice: CHANGES original array (index, howMany, addItems...)
let sample = [1, 2, 3, 4, 5];
sample.splice(2, 1, "REPLACED"); 
console.log("Spliced Array:", sample);

// ==========================================
// 🧪 MODERN ITERATORS (The Good Stuff)
// ==========================================
console.log("%c--- 🧪 ITERATORS ---", "color: #f472b6; font-weight: bold;");

let nums = [1, 2, 3, 4, 5];

// Map: Transform
let doubled = nums.map(n => n * 2);
console.log("Doubled Map:", doubled);

// Filter: Select
let evens = nums.filter(n => n % 2 === 0);
console.log("Filtered Evens:", evens);

// Reduce: Accumulate
let total = nums.reduce((acc, current) => acc + current, 0);
console.log("Total Sum via Reduce:", total);

// Every & Some (Bonus Methods!)
let allPositive = nums.every(n => n > 0);
console.log("Are all positive?:", allPositive); // true

// ==========================================
// 🧩 UTILITIES
// ==========================================
console.log("%c--- 🧩 UTILITIES ---", "color: #a78bfa; font-weight: bold;");

let fruits = ['Apple', 'Banana', 'Peach'];
console.log("Contains Banana?:", fruits.includes('Banana')); // Returns Bool    

// Join: Array to String
let greeting = ["Hello", "World"].join(" 🤝 ");
console.log("Joined String:", greeting);

// Sort: Ordering
let randomNums = [5, 1, 10, 2];
console.log("Sorted (Correctly):", randomNums.sort((a, b) => a - b));

console.log("%c✅ Lab Complete. Happy Coding!", "background: #22c55e; color: white; padding: 5px; border-radius: 5px;");