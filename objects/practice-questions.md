# JavaScript Objects Practice Questions

Here are some practice exercises to test your understanding of JavaScript objects. Try to solve them using only console/Node.js JavaScript syntax!

---

## Beginner Level

**Question 1: Create a Movie Object**
Create an object called `movie` with the following properties:
- title: "The Black Panther"
- director: "Ryan Coogler"
- year: 2018
- rating: 7.3

Then log the movie's title to the console.

---

**Question 2: Add and Modify Properties**
Start with this object:
```javascript
const laptop = {
  brand: "HP",
  ram: "8GB"
};
```
Add a `processor` property with value "Intel i5", change the `ram` to "16GB", and then log the entire object.

---

**Question 3: Access Properties Dynamically**
Given this object:
```javascript
const user = {
  firstName: "Ada",
  lastName: "Lovelace",
  age: 36
};
```
Create a variable called `propertyName` with the value "lastName", then use bracket notation to log the user's last name.

---

## Intermediate Level

**Question 4: Create a Shopping Cart**
Create an object called `shoppingCart` with:
- A property `items` that is an array containing at least 3 product names
- A property `total` with a number value
- A method called `addItem` that takes a product name and adds it to the items array
- A method called `getItemCount` that returns the number of items in the cart

Test both methods.

---

**Question 5: Temperature Converter**
Create an object called `tempConverter` with two methods:
- `celsiusToFahrenheit(celsius)` - converts Celsius to Fahrenheit using the formula: (C × 9/5) + 32
- `fahrenheitToCelsius(fahrenheit)` - converts Fahrenheit to Celsius using the formula: (F - 32) × 5/9

Test both methods with different values.

---

**Question 6: Iterate and Filter**
Given this object:
```javascript
const scores = {
  math: 85,
  english: 92,
  science: 78,
  history: 88,
  art: 95
};
```
Write code to:
- Loop through all the properties and log each subject with its score
- Find and log all subjects where the score is above 90

---

## Advanced Level

**Question 7: Library System**
Create an object called `library` with:
- A property `books` that is an array of book objects. Each book should have: title, author, and isAvailable (boolean)
- A method `addBook(title, author)` that adds a new book to the array with isAvailable set to true
- A method `borrowBook(title)` that finds a book by title and sets its isAvailable to false (if it exists and is available)
- A method `returnBook(title)` that sets a book's isAvailable back to true
- A method `listAvailableBooks()` that logs all available book titles

Initialize it with at least 2 books and test all methods.

---

**Question 8: Bank Account with Validation**
Create an object called `bankAccount` with:
- Properties: `accountNumber`, `balance`, `owner`
- A method `deposit(amount)` that adds to the balance only if amount is positive, otherwise log an error
- A method `withdraw(amount)` that subtracts from balance only if: amount is positive AND amount doesn't exceed balance, otherwise log appropriate error messages
- A method `getBalance()` that returns the current balance
- A method `transfer(amount, targetAccount)` that withdraws from this account and deposits to another account object

Test all scenarios including error cases.

---

**Question 9: Nested Object Navigation**
Given this object:
```javascript
const company = {
  name: "TechCorp",
  departments: {
    engineering: {
      employees: ["Alice", "Bob", "Charlie"],
      budget: 500000
    },
    marketing: {
      employees: ["Diana", "Eve"],
      budget: 300000
    },
    hr: {
      employees: ["Frank"],
      budget: 150000
    }
  }
};
```
Write code to:
- Log the number of employees in engineering
- Calculate and log the total budget across all departments
- Add a new employee "Grace" to the marketing department
- Log all employee names from all departments in a single array

---

**Question 10: Object Comparison**
Create a function called `compareObjects` that takes two objects as parameters and returns `true` if they have the same properties with the same values, `false` otherwise.

Test it with:
```javascript
const obj1 = { name: "John", age: 30 };
const obj2 = { name: "John", age: 30 };
const obj3 = { name: "John", age: 25 };
```

(Hint: Use `Object.keys()` and compare lengths and values)

---

## Bonus Challenge

**Question 11: Create a Student Gradebook**
Create an object called `gradebook` that:
- Has a property `students` (an array of student objects, each with: name and grades array)
- Has a method `addStudent(name)` that adds a new student with an empty grades array
- Has a method `addGrade(studentName, grade)` that adds a grade to a specific student's grades array
- Has a method `getAverage(studentName)` that calculates and returns a student's average grade
- Has a method `getClassAverage()` that returns the average of all students' averages
- Has a method `getTopStudent()` that returns the name of the student with the highest average

Build it from scratch and test with at least 3 students with multiple grades each.

---

Good luck! Try to solve these without looking back at the examples. The best way to learn is by doing!