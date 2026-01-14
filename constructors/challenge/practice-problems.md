# JavaScript Constructor Practice Problems

## Beginner Level

### Problem 1: Basic Constructor
Create a constructor function `Student` that takes `name` and `grade` as parameters. Create two student objects and log their properties.

**Expected Output:**
```
Student: Alice, Grade: 10
Student: Bob, Grade: 11
```

---

### Problem 2: Constructor with Method
Create a `Rectangle` constructor that takes `width` and `height`. Add a method `getArea()` that returns the area of the rectangle.

**Expected Output:**
```
Area: 50
Area: 24
```

---

### Problem 3: Default Values
Create a `Product` constructor that takes `name` and `price`. If no price is provided, set it to 0. Add a method `displayInfo()` that logs the product details.

**Expected Output:**
```
Product: Laptop, Price: $999
Product: Mouse, Price: $0
```

---

## Intermediate Level

### Problem 4: Prototype Methods
Create a `Circle` constructor that takes `radius`. Add methods `getArea()` and `getCircumference()` to the prototype. Use `Math.PI` for calculations.

**Expected Output:**
```
Circle with radius 5:
Area: 78.54
Circumference: 31.42
```

---

### Problem 5: Counter Object
Create a `Counter` constructor that initializes a count at 0. Add prototype methods: `increment()`, `decrement()`, `reset()`, and `getValue()`. 

**Expected Output:**
```
Count: 0
Count: 3
Count: 2
Count: 0
```

---

### Problem 6: Shopping Cart
Create a `ShoppingCart` constructor that initializes an empty array of items. Add methods:
- `addItem(name, price)` - adds an item object to the cart
- `removeItem(name)` - removes an item by name
- `getTotal()` - returns the total price of all items

**Expected Output:**
```
Total: $35
Total after removing milk: $30
```

---

## Advanced Level

### Problem 7: Task Manager
Create a `Task` constructor with properties: `title`, `description`, `completed` (default false), and `createdAt` (current date). Add methods to mark as complete and check if overdue (tasks created more than 7 days ago).

**Expected Output:**
```
Task: Complete assignment
Status: Incomplete
Is Overdue: false

Task: Complete assignment
Status: Complete
```

---

### Problem 8: Inheritance Pattern
Create a `Vehicle` constructor with `make` and `year`. Then create a `Motorcycle` constructor that inherits from `Vehicle` and adds a `type` property. Use `call()` for inheritance and set up the prototype chain properly.

**Expected Output:**
```
2020 Harley-Davidson Sport
2022 Honda Cruiser
```

---

### Problem 9: Private Variables
Create a `BankAccount` constructor that uses closures to keep the balance private. Provide methods `deposit()`, `withdraw()`, and `getBalance()`. The balance should not be directly accessible or modifiable.

**Expected Output:**
```
Current Balance: $1000
Deposited $500
Current Balance: $1500
Withdrew $300
Current Balance: $1200
Direct access to balance: undefined
```

---

### Problem 10: Factory with Validation
Create a `User` constructor that validates the email format and age (must be 13+). If validation fails, throw an error. Add a prototype method `isAdult()` that returns true if age >= 18.

**Expected Output:**
```
User created: john@example.com
Error: Invalid email format
Error: Age must be at least 13
Is adult: true
Is adult: false
```

---