/*
    forEach() → An array method used to loop through array elements.

    It accepts a CALLBACK FUNCTION.

    A callback function is a function that is:
    - passed as an argument to another function
    - executed later (in this case, once per array element)

    Syntax:
    array.forEach((element, index, array) => {
        // logic
    });

    NOTE:
    - forEach() does NOT return a new array
    - It directly modifies the existing array (if you choose to)
*/

// =======================
// BASIC NUMBER EXAMPLES
// =======================

let numbers = [1, 2, 3, 4, 5];

console.log(
    "%cOriginal Numbers:",
    "color:#00eaff; font-weight:bold;",
    numbers
);

function cube(element, index, array) {
    array[index] = Math.pow(element, 3);
}

numbers.forEach(cube);

numbers.forEach((element, index) => {
    console.log(
        `%cIndex ${index}: %c${element}`,
        "color:orange;",
        "color:#00ffcc; font-weight:bold;"
    );
});

// =======================
// STRING TRANSFORMATION
// =======================

let fruits = ["pineapple", "lemon", "lime", "citron"];

console.log(
    "%c\nString Manipulation:",
    "color:#ffcc00; font-size:16px;"
);

function capitalizeFirstLetter(element, i, arr) {
    arr[i] =
        element.charAt(0).toUpperCase() +
        element.slice(1).toLowerCase();
}

fruits.forEach(capitalizeFirstLetter);

fruits.forEach((fruit) => {
    console.log(
        "%cFruit:",
        "color:#ff66ff;",
        fruit
    );
});

// =======================
// OBJECT ARRAY EXAMPLE
// =======================

let users = [
    { name: "Alex", age: 21 },
    { name: "Jordan", age: 25 },
    { name: "Taylor", age: 30 }
];

console.log(
    "%c\nUsers List:",
    "color:#00ff99; font-size:16px;"
);

users.forEach((user, index) => {
    console.log(
        `%cUser ${index + 1}: %c${user.name} (${user.age} years old)`,
        "color:#aaa;",
        "color:#00eaff; font-weight:bold;"
    );
});

// =======================
// CALCULATING TOTALS
// =======================

let prices = [19.99, 9.5, 14.25];
let total = 0; // Initial value

prices.forEach((price) => {
    total += price; // Calculate's total
});

console.log(
    "%c\nTotal Price:",
    "color:#ff8800; font-size:16px;",
    `$${total.toFixed(2)}`
);

// =======================
// FINAL NOTE
// =======================

console.log(
    "%c✔ forEach() is best for:",
    "color:#00ffcc; font-size:16px;"
);
console.log(
    "%c• Logging\n• Updating values\n• Performing side effects",
    "color:#ccc;"
);