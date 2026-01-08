// ============================================
// REST PARAMETER IN JAVASCRIPT
// ============================================
// Rest Parameter --> Bundles separate elements into an array
// Syntax: ...parameterName
// ============================================

console.log("%c┌─────────────────────────────────────────────────────┐", "color: #667eea; font-weight: bold;");
console.log("%c│   REST PARAMETERS - JAVASCRIPT DEMONSTRATION        │", "color: #667eea; font-weight: bold;");
console.log("%c└─────────────────────────────────────────────────────┘", "color: #667eea; font-weight: bold;");
console.log("\n");

// ============================================
// FUNCTION DEFINITIONS
// ============================================

function openFridge(...foods) { 
    // Takes in multiple variables and combines them into an array
    console.log("%c📦 FUNCTION: openFridge(...foods)", "color: #764ba2; font-weight: bold; font-size: 14px;");
    console.log("%c   Purpose: Collect all food items into a single array", "color: #4a5568;");
    console.log("%c   Input Type: Multiple individual arguments", "color: #4a5568;");
    console.log("%c   Output Type: Array", "color: #4a5568;");
    console.log("   Result:", foods);
    console.log(`   Array Length: ${foods.length} items`);
    console.log("\n");
}

function getFood(...foods) {
    console.log("%c🔄 FUNCTION: getFood(...foods)", "color: #764ba2; font-weight: bold; font-size: 14px;");
    console.log("%c   Purpose: Return all food items as an array", "color: #4a5568;");
    console.log("   Collected Foods:", foods);
    console.log("\n");
    return foods;
}

function combineNames(...names) {
    console.log("%c👤 FUNCTION: combineNames(...names)", "color: #764ba2; font-weight: bold; font-size: 14px;");
    console.log("%c   Purpose: Join multiple name parts into a full name", "color: #4a5568;");
    console.log("   Individual Names:", names);
    console.log("   Method Used: Array.join(' ')");
    const fullName = names.join(" ");
    console.log(`   Combined Result: "${fullName}"`);
    console.log("\n");
    return fullName;
}

function sum(...nums) {
    console.log("%c➕ FUNCTION: sum(...nums)", "color: #764ba2; font-weight: bold; font-size: 14px;");
    console.log("%c   Purpose: Add unlimited numbers together", "color: #4a5568;");
    console.log("   Numbers Received:", nums);
    console.log(`   Count: ${nums.length} numbers`);
    
    let result = 0;
    for(let num of nums) {
        result += num;
    }
    
    console.log(`   Calculation: ${nums.join(' + ')} = ${result}`);
    console.log("\n");
    return result;
}

function calculateAverage(...nums) {
    console.log("%c📊 FUNCTION: calculateAverage(...nums)", "color: #764ba2; font-weight: bold; font-size: 14px;");
    console.log("%c   Purpose: Calculate average of any quantity of numbers", "color: #4a5568;");
    console.log("   Numbers:", nums);
    console.log(`   Count: ${nums.length} numbers`);
    
    // Sum up all the numbers in the array
    const result = nums.reduce((total, sum) => total + sum, 0);
    const average = result / nums.length;
    
    console.log(`   Sum: ${result}`);
    console.log(`   Average: ${result} ÷ ${nums.length} = ${average.toFixed(2)}`);
    console.log("\n");
    return average;
}

// ============================================
// DATA
// ============================================

console.log("%c═══════════════════════════════════════════════════════", "color: #667eea;");
console.log("%c EXAMPLE 1: Food Storage", "color: #667eea; font-weight: bold; font-size: 16px;");
console.log("%c═══════════════════════════════════════════════════════", "color: #667eea;");
console.log("\n");

const food1 = "Pizza";
const food2 = "Donut";
const food3 = "Shawarma";
const food4 = "Rice";
const food5 = "Beans";

console.log("%c🥘 Individual Food Variables:", "color: #19547b; font-weight: bold;");
console.log(`   food1 = "${food1}"`);
console.log(`   food2 = "${food2}"`);
console.log(`   food3 = "${food3}"`);
console.log(`   food4 = "${food4}"`);
console.log(`   food5 = "${food5}"`);
console.log("\n");

openFridge(food1, food2, food3, food4, food5);

const foods = getFood(food1, food2, food3, food4, food5);
console.log("%c✅ RESULT:", "color: #10b981; font-weight: bold;");
console.log(`   Stored Foods Array: [${foods.map(f => `"${f}"`).join(', ')}]`);
console.log(`   Access Example: foods[0] = "${foods[0]}"`);
console.log("\n\n");

// ============================================
// EXAMPLE 2: Sum Calculation
// ============================================

console.log("%c═══════════════════════════════════════════════════════", "color: #667eea;");
console.log("%c EXAMPLE 2: Sum Calculation", "color: #667eea; font-weight: bold; font-size: 16px;");
console.log("%c═══════════════════════════════════════════════════════", "color: #667eea;");
console.log("\n");

const total = sum(1, 2, 3, 4, 5, 6, 7);
console.log("%c✅ RESULT:", "color: #10b981; font-weight: bold;");
console.log(`   Total Sum: $${total}`);
console.log("%c   💡 Key Point: We passed 7 arguments, rest parameter collected them all!", "color: #f59e0b;");
console.log("\n\n");

// ============================================
// EXAMPLE 3: Average Calculation
// ============================================

console.log("%c═══════════════════════════════════════════════════════", "color: #667eea;");
console.log("%c EXAMPLE 3: Average of Test Scores", "color: #667eea; font-weight: bold; font-size: 16px;");
console.log("%c═══════════════════════════════════════════════════════", "color: #667eea;");
console.log("\n");

const avg = calculateAverage(78, 96, 66, 88, 91, 74, 84);
console.log("%c✅ RESULT:", "color: #10b981; font-weight: bold;");
console.log(`   Average Score: ${avg.toFixed(1)}%`);

if (avg >= 80) {
    console.log("%c   🎉 Grade: Excellent!", "color: #10b981; font-weight: bold;");
} else if (avg >= 70) {
    console.log("%c   👍 Grade: Good!", "color: #3b82f6; font-weight: bold;");
} else {
    console.log("%c   📚 Grade: Needs Improvement", "color: #ef4444; font-weight: bold;");
}
console.log("\n\n");

// ============================================
// EXAMPLE 4: Name Combination
// ============================================

console.log("%c═══════════════════════════════════════════════════════", "color: #667eea;");
console.log("%c EXAMPLE 4: Combining Names", "color: #667eea; font-weight: bold; font-size: 16px;");
console.log("%c═══════════════════════════════════════════════════════", "color: #667eea;");
console.log("\n");

const fullName = combineNames("Ikubie", "Alfred", "Nemieboka");
console.log("%c✅ RESULT:", "color: #10b981; font-weight: bold;");
console.log(`   Full Name: ${fullName}`);
console.log("\n\n");

// ============================================
// BONUS: Demonstrating Flexibility
// ============================================

console.log("%c═══════════════════════════════════════════════════════", "color: #667eea;");
console.log("%c BONUS: Flexibility Demonstration", "color: #667eea; font-weight: bold; font-size: 16px;");
console.log("%c═══════════════════════════════════════════════════════", "color: #667eea;");
console.log("\n");

console.log("%c🔥 The Power of Rest Parameters:", "color: #764ba2; font-weight: bold; font-size: 14px;");
console.log("%c   Same function, different argument counts!", "color: #4a5568;");
console.log("\n");

console.log("   sum(5, 10) =", sum(5, 10));
console.log("   sum(1, 2, 3) =", sum(1, 2, 3));
console.log("   sum(10, 20, 30, 40, 50) =", sum(10, 20, 30, 40, 50));
console.log("\n");

console.log("   combineNames('John') =", `"${combineNames('John')}"`);
console.log("   combineNames('John', 'Doe') =", `"${combineNames('John', 'Doe')}"`);
console.log("   combineNames('John', 'Michael', 'Doe', 'Jr.') =", `"${combineNames('John', 'Michael', 'Doe', 'Jr.')}"`);
console.log("\n");

// ============================================
// KEY TAKEAWAYS
// ============================================

console.log("%c╔═════════════════════════════════════════════════════════════════╗", "color: #10b981; font-weight: bold;");
console.log("%c║                       KEY TAKEAWAYS                             ║", "color: #10b981; font-weight: bold;");
console.log("%c╚═════════════════════════════════════════════════════════════════╝", "color: #10b981; font-weight: bold;");
console.log("\n");
console.log("%c✓ Rest parameters use the '...' syntax", "color: #10b981; font-weight: bold;");
console.log("%c✓ They bundle multiple arguments into a single array", "color: #10b981; font-weight: bold;");
console.log("%c✓ Must be the last parameter in the function", "color: #10b981; font-weight: bold;");
console.log("%c✓ Allow functions to accept unlimited arguments", "color: #10b981; font-weight: bold;");
console.log("%c✓ Create a true array with all array methods available", "color: #10b981; font-weight: bold;");
console.log("\n");
console.log("%c🎓 You now understand rest parameters! Check the webpage for more details.", "color: #667eea; font-weight: bold; font-size: 14px;");
console.log("\n");