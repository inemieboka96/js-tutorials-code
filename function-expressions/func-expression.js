// Function Expressions in JavaScript

/*
    ═══════════════════════════════════════════════════════════════════════════════
    FUNCTION EXPRESSIONS - COMPREHENSIVE GUIDE
    ═══════════════════════════════════════════════════════════════════════════════
    
    DEFINITION:
    Function expressions are a way to define functions as values that can be assigned 
    to variables, passed as arguments to other functions, or returned from functions.
    Unlike function declarations, function expressions are not hoisted and must be 
    defined before use.
    
    SYNTAX TYPES:
    1. Anonymous Function Expression:     const func = function() { ... };
    2. Named Function Expression:         const func = function myFunc() { ... };
    3. Arrow Function Expression:         const func = () => { ... };
    4. IIFE (Immediately Invoked):        (function() { ... })();
    
    KEY CHARACTERISTICS:
    • First-Class Citizens: Functions can be assigned to variables, passed as 
      arguments, and returned from other functions
    • Not Hoisted: Must be defined before they are called
    • Can be Anonymous: Don't require a name identifier
    • Lexical Scope: Access to variables from their outer scope (closures)
    • Dynamic Creation: Can be created at runtime
    
    COMMON USE CASES:
    1. Array Manipulation: map(), filter(), reduce(), forEach(), find(), some(), every()
    2. Event Handling: addEventListener callbacks, DOM event handlers
    3. Asynchronous Programming: Promises, async/await, setTimeout, setInterval
    4. Higher-Order Functions: Functions that accept or return other functions
    5. Closures: Private variables and data encapsulation
    6. Function Factories: Creating specialized functions dynamically
    7. Callbacks: Passing functions as arguments for custom behavior
    8. IIFE: Immediately executed functions for module patterns
    9. Method Definitions: Object methods and class methods
    10. Functional Programming: Pure functions, composition, currying
    
    ═══════════════════════════════════════════════════════════════════════════════
*/

// ═══════════════════════════════════════════════════════════════════════════════
// CONSOLE STYLING SETUP
// ═══════════════════════════════════════════════════════════════════════════════
const styles = {
    title: 'font-size: 24px; font-weight: bold; color: #fff; background: linear-gradient(90deg, #667eea, #764ba2); padding: 12px 20px; border-radius: 8px; text-shadow: 2px 2px 4px rgba(0,0,0,0.3);',
    section: 'font-size: 18px; font-weight: bold; color: #ffd700; background: #1a1a2e; padding: 8px 15px; border-radius: 5px; margin-top: 10px;',
    success: 'color: #4CAF50; font-weight: bold;',
    info: 'color: #2196F3; font-weight: bold;',
    warning: 'color: #FF9800; font-weight: bold;',
    error: 'color: #f44336; font-weight: bold;',
    purple: 'color: #9C27B0; font-weight: bold;',
    pink: 'color: #E91E63; font-weight: bold;',
    cyan: 'color: #00BCD4; font-weight: bold;',
    lime: 'color: #CDDC39; font-weight: bold;',
    amber: 'color: #FFC107; font-weight: bold;',
    deepOrange: 'color: #FF5722; font-weight: bold;',
    teal: 'color: #009688; font-weight: bold;',
    indigo: 'color: #3F51B5; font-weight: bold;',
    divider: 'color: #667eea;'
};

// ═══════════════════════════════════════════════════════════════════════════════
// HEADER
// ═══════════════════════════════════════════════════════════════════════════════
console.log('%c🎯 FUNCTION EXPRESSIONS DEMONSTRATION 🎯', styles.title);
console.log('%c━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━', styles.divider);
console.log('%cExploring the power and versatility of function expressions in JavaScript\n', 'color: #a8edea; font-style: italic;');

// ═══════════════════════════════════════════════════════════════════════════════
// SAMPLE DATA
// ═══════════════════════════════════════════════════════════════════════════════
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const products = [
    { name: 'Laptop', price: 1200, category: 'Electronics', rating: 4.5 },
    { name: 'Phone', price: 800, category: 'Electronics', rating: 4.7 },
    { name: 'Desk', price: 300, category: 'Furniture', rating: 4.2 },
    { name: 'Chair', price: 150, category: 'Furniture', rating: 4.0 },
    { name: 'Headphones', price: 100, category: 'Electronics', rating: 4.8 },
    { name: 'Monitor', price: 350, category: 'Electronics', rating: 4.6 }
];
const users = [
    { name: 'Alice', age: 28, active: true },
    { name: 'Bob', age: 35, active: false },
    { name: 'Charlie', age: 42, active: true },
    { name: 'Diana', age: 31, active: true }
];

// ═══════════════════════════════════════════════════════════════════════════════
// 1. ARRAY TRANSFORMATION METHODS (map, filter, reduce)
// ═══════════════════════════════════════════════════════════════════════════════
console.log('\n%c📊 1. ARRAY TRANSFORMATION METHODS', styles.section);
console.log('%c─────────────────────────────────────────────────────────────────────────', styles.divider);

// MAP - Transform each element
console.log('\n%c🔄 MAP: Transforming Arrays', styles.info);
const squared = numbers.map((element) => Math.pow(element, 2));
const cubed = numbers.map((element) => Math.pow(element, 3));
const doubled = numbers.map(n => n * 2);
const tripled = numbers.map(n => n * 3);

console.log('Original Numbers:', numbers);
console.log('%c  → Squared:', styles.success, squared);
console.log('%c  → Cubed:', styles.info, cubed);
console.log('%c  → Doubled:', styles.warning, doubled);
console.log('%c  → Tripled:', styles.purple, tripled);

// FILTER - Select elements that meet criteria
console.log('\n%c🔍 FILTER: Selecting Specific Elements', styles.info);
const evenNums = numbers.filter((n) => n % 2 === 0);
const oddNums = numbers.filter((n) => n % 2 !== 0);
const greaterThanFive = numbers.filter(n => n > 5);
const inRange = numbers.filter(n => n >= 3 && n <= 7);

console.log('%c  → Even Numbers:', styles.purple, evenNums);
console.log('%c  → Odd Numbers:', styles.pink, oddNums);
console.log('%c  → Greater Than 5:', styles.cyan, greaterThanFive);
console.log('%c  → Range [3-7]:', styles.teal, inRange);

// REDUCE - Aggregate values
console.log('\n%c📈 REDUCE: Aggregating Values', styles.info);
const sum = numbers.reduce((acc, current) => acc + current, 0);
const product = numbers.reduce((acc, curr) => acc * curr, 1);
const max = numbers.reduce((acc, curr) => curr > acc ? curr : acc);
const min = numbers.reduce((acc, curr) => curr < acc ? curr : acc);
const average = numbers.reduce((acc, curr, idx, arr) => {
    acc += curr;
    return idx === arr.length - 1 ? acc / arr.length : acc;
}, 0);

console.log('%c  → Sum:', styles.lime, sum);
console.log('%c  → Product:', styles.amber, product);
console.log('%c  → Max Value:', styles.deepOrange, max);
console.log('%c  → Min Value:', styles.success, min);
console.log('%c  → Average:', styles.indigo, average.toFixed(2));

// ═══════════════════════════════════════════════════════════════════════════════
// 2. WORKING WITH COMPLEX OBJECTS
// ═══════════════════════════════════════════════════════════════════════════════
console.log('\n%c🛍️ 2. WORKING WITH COMPLEX OBJECTS', styles.section);
console.log('%c─────────────────────────────────────────────────────────────────────────', styles.divider);

// Extract specific properties
const productNames = products.map(p => p.name);
const prices = products.map(p => `$${p.price}`);
console.log('\n%cProduct Names:', styles.success, productNames);
console.log('%cPrices:', styles.info, prices);

// Filter by category
const electronics = products.filter(p => p.category === 'Electronics');
const furniture = products.filter(p => p.category === 'Furniture');
console.log('\n%cElectronics:', styles.warning, electronics);
console.log('%cFurniture:', styles.purple, furniture);

// Complex filtering
const expensiveProducts = products.filter(p => p.price > 200);
const highlyRated = products.filter(p => p.rating >= 4.5);
const affordableElectronics = products.filter(p => p.category === 'Electronics' && p.price < 500);

console.log('\n%cExpensive Products (>$200):', styles.pink, expensiveProducts);
console.log('%cHighly Rated (≥4.5):', styles.cyan, highlyRated);
console.log('%cAffordable Electronics (<$500):', styles.teal, affordableElectronics);

// Reduce calculations
const totalPrice = products.reduce((sum, p) => sum + p.price, 0);
const avgPrice = totalPrice / products.length;
const avgRating = products.reduce((sum, p) => sum + p.rating, 0) / products.length;

console.log('\n%c💰 Financial Summary:', styles.amber);
console.log(`  Total Inventory Value: $${totalPrice}`);
console.log(`  Average Product Price: $${avgPrice.toFixed(2)}`);
console.log(`  Average Rating: ${avgRating.toFixed(2)} ⭐`);

// ═══════════════════════════════════════════════════════════════════════════════
// 3. CALLBACKS & ASYNCHRONOUS OPERATIONS
// ═══════════════════════════════════════════════════════════════════════════════
console.log('\n%c⏱️ 3. CALLBACKS & ASYNCHRONOUS OPERATIONS', styles.section);
console.log('%c─────────────────────────────────────────────────────────────────────────', styles.divider);

// Simulated API call using callback
const fetchUserData = (userId, callback) => {
    console.log(`%c  → Fetching user data for ID: ${userId}...`, styles.info);
    setTimeout(() => {
        const userData = { id: userId, name: 'John Doe', email: 'john@example.com', role: 'Developer' };
        callback(userData);
    }, 100);
};

fetchUserData(123, (data) => {
    console.log('%c  ✓ Data Retrieved:', styles.success, data);
});

// Simulated database query
const queryDatabase = (query, successCallback, errorCallback) => {
    console.log(`%c  → Executing query: "${query}"`, styles.warning);
    setTimeout(() => {
        if (query.includes('SELECT')) {
            successCallback({ rows: 5, data: ['Record 1', 'Record 2', 'Record 3'] });
        } else {
            errorCallback('Invalid query syntax');
        }
    }, 150);
};

queryDatabase(
    'SELECT * FROM users',
    (result) => console.log('%c  ✓ Query Success:', styles.success, result),
    (error) => console.log('%c  ✗ Query Failed:', styles.error, error)
);

// forEach with detailed callback
console.log('\n%c🔄 forEach Example with Index:', styles.purple);
products.slice(0, 4).forEach((product, index) => {
    console.log(`  [${index}] ${product.name} - $${product.price} (${product.category})`);
});

// ═══════════════════════════════════════════════════════════════════════════════
// 4. HIGHER-ORDER FUNCTIONS
// ═══════════════════════════════════════════════════════════════════════════════
console.log('\n%c🎨 4. HIGHER-ORDER FUNCTIONS', styles.section);
console.log('%c─────────────────────────────────────────────────────────────────────────', styles.divider);

// Function factory - creates specialized functions
console.log('\n%c🏭 Function Factory Pattern:', styles.info);
const createMultiplier = (factor) => {
    return (number) => number * factor;
};

const double = createMultiplier(2);
const triple = createMultiplier(3);
const quadruple = createMultiplier(4);
const quintuple = createMultiplier(5);

console.log('%c  double(7) =', styles.success, double(7));
console.log('%c  triple(7) =', styles.info, triple(7));
console.log('%c  quadruple(7) =', styles.warning, quadruple(7));
console.log('%c  quintuple(7) =', styles.purple, quintuple(7));

// Currying - function returning function
console.log('\n%c🔗 Currying (Function Chaining):', styles.info);
const add = (a) => (b) => a + b;
const multiply = (a) => (b) => a * b;

const add5 = add(5);
const add10 = add(10);
const multiplyBy3 = multiply(3);

console.log('%c  add5(3) =', styles.pink, add5(3));
console.log('%c  add10(15) =', styles.cyan, add10(15));
console.log('%c  multiplyBy3(4) =', styles.teal, multiplyBy3(4));

// Function composition
console.log('\n%c🎼 Function Composition:', styles.info);
const compose = (f, g) => (x) => f(g(x));
const addTwo = x => x + 2;
const multiplyByThree = x => x * 3;
const composed = compose(multiplyByThree, addTwo);

console.log('%c  (x + 2) * 3 where x=4:', styles.lime, composed(4)); // (4 + 2) * 3 = 18

// ═══════════════════════════════════════════════════════════════════════════════
// 5. CLOSURES & PRIVATE VARIABLES
// ═══════════════════════════════════════════════════════════════════════════════
console.log('\n%c🔒 5. CLOSURES & PRIVATE VARIABLES', styles.section);
console.log('%c─────────────────────────────────────────────────────────────────────────', styles.divider);

// Counter with closure
console.log('\n%c📊 Counter with Private State:', styles.info);
const createCounter = () => {
    let count = 0; // Private variable
    return {
        increment: () => ++count,
        decrement: () => --count,
        getValue: () => count,
        reset: () => count = 0
    };
};

const counter = createCounter();
console.log('%c  Initial value:', styles.success, counter.getValue());
console.log('%c  After increment:', styles.info, counter.increment());
console.log('%c  After increment:', styles.warning, counter.increment());
console.log('%c  After increment:', styles.purple, counter.increment());
console.log('%c  After decrement:', styles.pink, counter.decrement());
console.log('%c  Current value:', styles.cyan, counter.getValue());

// Bank account with encapsulation
console.log('\n%c🏦 Bank Account with Encapsulation:', styles.info);
const createBankAccount = (initialBalance) => {
    let balance = initialBalance; // Private
    return {
        deposit: (amount) => {
            balance += amount;
            return `Deposited $${amount}. New balance: $${balance}`;
        },
        withdraw: (amount) => {
            if (amount > balance) return 'Insufficient funds!';
            balance -= amount;
            return `Withdrew $${amount}. New balance: $${balance}`;
        },
        getBalance: () => balance
    };
};

const myAccount = createBankAccount(1000);
console.log('%c  Starting balance:', styles.success, `$${myAccount.getBalance()}`);
console.log('%c  ', styles.info, myAccount.deposit(500));
console.log('%c  ', styles.warning, myAccount.withdraw(200));
console.log('%c  Final balance:', styles.purple, `$${myAccount.getBalance()}`);

// ═══════════════════════════════════════════════════════════════════════════════
// 6. IIFE (Immediately Invoked Function Expressions)
// ═══════════════════════════════════════════════════════════════════════════════
console.log('\n%c⚡ 6. IIFE (IMMEDIATELY INVOKED FUNCTION EXPRESSIONS)', styles.section);
console.log('%c─────────────────────────────────────────────────────────────────────────', styles.divider);

// Module pattern with IIFE
const calculator = (function() {
    const PI = 3.14159; // Private constant
    
    return {
        add: (a, b) => a + b,
        subtract: (a, b) => a - b,
        multiply: (a, b) => a * b,
        divide: (a, b) => b !== 0 ? a / b : 'Cannot divide by zero',
        circleArea: (radius) => PI * radius * radius
    };
})();

console.log('\n%c🧮 Calculator Module:', styles.info);
console.log('%c  add(10, 5) =', styles.success, calculator.add(10, 5));
console.log('%c  subtract(10, 5) =', styles.info, calculator.subtract(10, 5));
console.log('%c  multiply(10, 5) =', styles.warning, calculator.multiply(10, 5));
console.log('%c  divide(10, 5) =', styles.purple, calculator.divide(10, 5));
console.log('%c  circleArea(5) =', styles.pink, calculator.circleArea(5).toFixed(2));

// ═══════════════════════════════════════════════════════════════════════════════
// 7. ADVANCED ARRAY METHODS
// ═══════════════════════════════════════════════════════════════════════════════
console.log('\n%c🔬 7. ADVANCED ARRAY METHODS', styles.section);
console.log('%c─────────────────────────────────────────────────────────────────────────', styles.divider);

// find() - returns first match
const firstElectronicOver500 = products.find(p => p.category === 'Electronics' && p.price > 500);
console.log('\n%cfind() - First electronic over $500:', styles.success, firstElectronicOver500);

// findIndex() - returns index of first match
const indexOfChair = products.findIndex(p => p.name === 'Chair');
console.log('%cfindIndex() - Index of Chair:', styles.info, indexOfChair);

// some() - tests if at least one element passes
const hasExpensiveItem = products.some(p => p.price > 1000);
const hasLowRating = products.some(p => p.rating < 3.0);
console.log('%csome() - Has item over $1000:', styles.warning, hasExpensiveItem);
console.log('%csome() - Has rating below 3.0:', styles.purple, hasLowRating);

// every() - tests if all elements pass
const allRatedAbove3 = products.every(p => p.rating > 3.0);
const allUnder2000 = products.every(p => p.price < 2000);
console.log('%cevery() - All rated above 3.0:', styles.pink, allRatedAbove3);
console.log('%cevery() - All under $2000:', styles.cyan, allUnder2000);

// sort() with custom comparator
const sortedByPrice = [...products].sort((a, b) => a.price - b.price);
const sortedByRating = [...products].sort((a, b) => b.rating - a.rating);
console.log('\n%csort() - By Price (ascending):', styles.teal, sortedByPrice.map(p => `${p.name}: $${p.price}`));
console.log('%csort() - By Rating (descending):', styles.lime, sortedByRating.map(p => `${p.name}: ${p.rating}⭐`));

// ═══════════════════════════════════════════════════════════════════════════════
// 8. REAL-WORLD PRACTICAL EXAMPLES
// ═══════════════════════════════════════════════════════════════════════════════
console.log('\n%c🌍 8. REAL-WORLD PRACTICAL EXAMPLES', styles.section);
console.log('%c─────────────────────────────────────────────────────────────────────────', styles.divider);

// Data validation pipeline
console.log('\n%c✅ Data Validation Pipeline:', styles.info);
const validators = {
    isEmail: (str) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(str),
    isPhone: (str) => /^\d{3}-\d{3}-\d{4}$/.test(str),
    isStrongPassword: (str) => str.length >= 8 && /[A-Z]/.test(str) && /[0-9]/.test(str)
};

const testEmail = 'user@example.com';
const testPhone = '123-456-7890';
const testPassword = 'SecurePass123';

console.log(`%c  "${testEmail}" is valid email:`, styles.success, validators.isEmail(testEmail));
console.log(`%c  "${testPhone}" is valid phone:`, styles.info, validators.isPhone(testPhone));
console.log(`%c  "${testPassword}" is strong password:`, styles.warning, validators.isStrongPassword(testPassword));

// Data transformation pipeline
console.log('\n%c🔄 Data Transformation Pipeline:', styles.info);
const processUserData = (users) => {
    return users
        .filter(user => user.active)
        .map(user => ({
            ...user,
            ageGroup: user.age < 30 ? 'Young' : user.age < 40 ? 'Middle' : 'Senior'
        }))
        .sort((a, b) => a.age - b.age);
};

const processedUsers = processUserData(users);
console.log('%c  Processed Users:', styles.purple, processedUsers);

// Debounce function (real-world use case)
console.log('\n%c⏲️ Debounce Function (Performance Optimization):', styles.info);
const debounce = (func, delay) => {
    let timeoutId;
    return (...args) => {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => func(...args), delay);
    };
};

const expensiveOperation = (input) => console.log('%c  Processing:', styles.cyan, input);
const debouncedOperation = debounce(expensiveOperation, 300);
console.log('%c  Debounced function created (300ms delay)', styles.lime);

// Memoization (caching function results)
console.log('\n%c💾 Memoization (Caching Results):', styles.info);
const memoize = (fn) => {
    const cache = {};
    return (...args) => {
        const key = JSON.stringify(args);
        if (cache[key]) {
            console.log('%c    → Cache hit!', styles.success);
            return cache[key];
        }
        console.log('%c    → Computing...', styles.warning);
        const result = fn(...args);
        cache[key] = result;
        return result;
    };
};

const expensiveCalculation = (n) => {
    let sum = 0;
    for (let i = 0; i <= n; i++) sum += i;
    return sum;
};

const memoizedCalc = memoize(expensiveCalculation);
console.log('%c  First call - memoizedCalc(100):', styles.purple, memoizedCalc(100));
console.log('%c  Second call - memoizedCalc(100):', styles.pink, memoizedCalc(100));

// ═══════════════════════════════════════════════════════════════════════════════
// SUMMARY & FOOTER
// ═══════════════════════════════════════════════════════════════════════════════
console.log('\n%c━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━', styles.divider);
console.log('%c✨ SUMMARY ✨', 'font-size: 20px; font-weight: bold; color: #ffd700; background: #1a1a2e; padding: 10px; border-radius: 5px;');
console.log('%c━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━', styles.divider);

console.log('\n%cFunction expressions are essential building blocks in JavaScript that enable:', 'color: #a8edea; font-size: 14px;');
console.log('  ✓ Functional programming patterns');
console.log('  ✓ Asynchronous code handling');
console.log('  ✓ Data transformation and manipulation');
console.log('  ✓ Encapsulation and private state');
console.log('  ✓ Reusable and composable code');
console.log('  ✓ Modern JavaScript development practices');

console.log('\n%c🎓 Master these concepts to become a proficient JavaScript developer!', 'color: #ffd700; font-size: 15px; font-weight: bold;');
console.log('%c━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n', styles.divider);