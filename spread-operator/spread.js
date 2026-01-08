/*
====================================
 JavaScript Spread Operator (...)
====================================
 Allows iterables (arrays, strings)
 to be expanded into individual elements
====================================
*/

console.log(
    "%c🚀 JavaScript Spread Operator Demo Started",
    "color: #38bdf8; font-size: 16px; font-weight: bold;"
);

/* ===== Using Numbers ===== */
let numbers = [1,2,3,4,5,6,7,8,9,10];

console.log(
    "%cOriginal Numbers Array:",
    "color: #fbbf24; font-weight: bold;"
);
console.log(numbers);

let maximum = Math.max(...numbers);
let minimum = Math.min(...numbers);

console.log(
    `%cMaximum value using spread operator: ${maximum}`,
    "color: #22c55e;"
);

console.log(
    `%cMinimum value using spread operator: ${minimum}`,
    "color: #ef4444;"
);

/* ===== Using Strings ===== */
let username = "John Doe";

console.log(
    "%cOriginal String:",
    "color: #fbbf24; font-weight: bold;"
);
console.log(username);

let letters = [...username];

console.log(
    "%cString spread into individual characters:",
    "color: #22c55e;"
);
console.log(letters);

console.log(
    "%cCharacters joined with hyphens:",
    "color: #38bdf8;"
);
console.log(letters.join("-"));

/* ===== Using Arrays ===== */
let fruits = ["Apple", "Pineapple", "Mango"];
let vegetables = ["Onions", "Broccoli", "Potato"];

console.log(
    "%cFruits Array:",
    "color: #fbbf24; font-weight: bold;"
);
console.log(fruits);

console.log(
    "%cVegetables Array:",
    "color: #fbbf24; font-weight: bold;"
);
console.log(vegetables);

let combinedFoods = [...fruits, ...vegetables];

console.log(
    "%cCombined Array using spread operator:",
    "color: #22c55e; font-weight: bold;"
);
console.log(combinedFoods);

console.log(
    "%c✅ Spread Operator Demo Completed",
    "color: #38bdf8; font-size: 14px; font-weight: bold;"
);