/*
    Callback Functions
    ------------------
    A callback function is a function that is passed as an argument
    to another function and is executed later, usually after
    a specific task or event occurs.

    Common Use Cases
    ----------------
    1) Asynchronous programming (e.g., timers, API requests)
    2) Event handling (e.g., click, submit, keypress events)
    3) Array methods (map, filter, reduce, forEach)
    4) Error-first handling patterns (common in Node.js)
    5) Custom logic execution after a task completes
*/

/* ================================
   BASIC CALLBACK EXAMPLE
================================ */

console.log("------ BASIC CALLBACK EXAMPLE ------");

function greet(callback) {
  console.log("Step 1: greet() function started");
  console.log("Hello!");
  console.log("Step 2: Calling callback...");
  callback();
}

function sayGoodbye() {
  console.log("Callback executed: Goodbye!");
}

greet(sayGoodbye);

/* ================================
   CALLBACK WITH DATA
================================ */

console.log("\n------ CALLBACK WITH DATA ------");

function calculateSum(a, b, callback) {
  console.log(`Calculating sum of ${a} and ${b}`);
  let result = a + b;
  console.log("Calculation done. Passing result to callback...");
  callback(result);
}

function logResult(result) {
  console.log("Result received in callback:", result);
}

function displayResult(result) {
  document.getElementById(
    "func-result"
  ).textContent = `Sum result from callback: ${result}`;
}

calculateSum(8, 8, logResult);
calculateSum(8, 8, displayResult);

/* ================================
   CALLBACKS WITH TIMERS (ASYNC)
================================ */

console.log("\n------ ASYNC CALLBACK (setTimeout) ------");

function delayedMessage(callback) {
  console.log("Waiting 2 seconds before executing callback...");
  setTimeout(() => {
    callback("This message was delayed!");
  }, 2000);
}

delayedMessage((message) => {
  console.log("Callback executed after delay:", message);
});

/* ================================
   CALLBACKS IN ARRAY METHODS
================================ */

console.log("\n------ ARRAY CALLBACKS ------");

const numbers = [1, 2, 3, 4, 5];

console.log("Using forEach:");
numbers.forEach((num) => {
  console.log("forEach callback value:", num);
});

console.log("Using map:");
const doubled = numbers.map((num) => {
  return num * 2;
});
console.log("Mapped result:", doubled);

/* ================================
   REAL-WORLD STYLE EXAMPLE
================================ */

console.log("\n------ REAL-WORLD EXAMPLE ------");

/**
 * Simulates a user login process with a delay and 
 * executes a callback function upon successful login.
 * @param username - username of the user trying to log in.
 * @param onSuccess - callback function that will be called 
 * when the login operation is successful. It takes the 
 * `username` as an argument and can be used to perform
 * actions after the user has successfully logged in.
 */
function loginUser(username, onSuccess) {
  console.log(`Logging in user: ${username}`);
  console.log("Checking credentials...");

  // Simulate server delay
  setTimeout(() => {
    console.log("Login successful!");
    onSuccess(username);
  }, 1500);
}
// Callback function for the loginUser() function
function showDashboard(user) {
  console.log(`Welcome ${user}, loading dashboard...`);
}

loginUser("Ikubie", showDashboard);
