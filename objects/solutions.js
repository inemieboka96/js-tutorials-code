// Problem set solutions

// ---------- Beginner ----------

// Question 1: Create a Movie Object
const movie = {
  title: "Black Panther",
  director: "Ryan Coogler",
  year: 2018,
  rating: 7.3,
};

console.log(`Movie Title: ${movie.title}`);

// Question 2: Add and Modify Properties
const laptop = {
  brand: "HP",
  ram: "8GB",
};

// Adding & Modifying properties
laptop.processor = "Intel i5";
laptop.ram = "16GB";

console.log(`Laptop: ${JSON.stringify(laptop, null, 2)}`);

// Question 3: Accessing Properties Dynamically
const user = {
  firstName: "Ada",
  lastName: "Lovelace",
  age: 36, // RIP💀
};

const propertyName = "lastName";
console.log(`User's last Name: ${user[propertyName]}`);

// ---------- Intermediate ----------

// Question 4: Create a shoppingCart Object
const shoppingCart = {
  items: ["Pineapple", "Bread", "Fish"],
  total: 20,
  addItem(product) {
    // Edge Case: non-strings
    if (typeof product !== "string")
      throw new Error(`${product} is invalid input`);
    shoppingCart.items.push(product); // Add product to shopping cart
    console.log(`${product} has been added to the shopping cart`);
  },
  getItemCount() {
    // Simplified the logic
    console.log(`No. of items: ${this.items.length}`);
  },
};
// Console logs
shoppingCart.addItem("Potatoes");
console.log(shoppingCart.items);

shoppingCart.getItemCount(); // Returns 4

// Question 5: Temperature Converter
const tempConverter = {
  celsiusToFahrenheit(celsius) {
    return celsius * (9 / 5) + 32;
  },
  fahrenheitToCelsius(fahrenheit) {
    return (fahrenheit - 32) * (5 / 9);
  },
};

// Question 6: Iterate & Filter
const scores = {
  math: 85,
  english: 92,
  science: 78,
  history: 88,
  art: 95,
};
// Loop through all the properties and log each subject with its score
console.log("Scores");
for (let key in scores) {
  console.log(`${key}: ${scores[key]}`);
}

// Find and log all subjects where the score is above 90
let highScores = []; // Initialize empty arr
for (let key in scores) {
  // Iterate through obj
  let score = scores[key]; // Store key value in a var
  if (score > 90) {
    highScores.push(score); // Add to arr
  }
}
console.log(`High Scores: ${highScores}`);

// ---------- Advanced ----------

// Question 7: Library System
const library = {
  books: [
    { title: "Art of War", author: "Sun Tzu", isAvailable: true }, // books[0]
    { title: "War and Peace", author: "Leo Tolstoy", isAvailable: false },
    { title: "The Prince", author: "Niccolò Machiavelli", isAvailable: true }, // power
    { title: "On Combat", author: "Lt. Col. Dave Grossman", isAvailable: true }, // physical strength & war
    { title: "Gates of Fire", author: "Steven Pressfield", isAvailable: true }, // war
  ],
  addBook(title, author) {
    let newBook = { title: title, author: author, isAvailable: true };
    this.books.push(newBook);
    console.log(`${newBook.title} is now available at the library`);
  },
  borrowBook(title) {
    for (const book of this.books) {
      if (book.title === title) {
        if (book.isAvailable === false) {
          console.log(`[ ${title} has already been borrowed ]`);
          return;
        }
        book.isAvailable = false;
        console.log(`[ ${title} has been borrowed ]`);
        return;
      }
    }
    console.log(`[ ${title} isn't in the library ]`);
  },
  returnBook(title) {
    for (const book of this.books) {
      if (book.title === title) {
        // Book is found
        // Edge Case: Book is already available
        if (book.isAvailable === true) {
          console.log(`[ ${title} hasn't been borrowed ]`);
          return;
        }
        book.isAvailable = true;
        console.log(`[ ${title} has been returned ]`);
        return;
      }
    }
    // Edge Case: book not in lib
    console.log(`[ ${title} isn't in the library ]`);
  },
  listAvailableBooks() {
    // Filter the available books out of books arr
    let availableBooks = this.books.filter((book) => book.isAvailable === true);

    // Edge Case: All books aren't available
    if (availableBooks.length === 0) {
      console.log("[No books are currently available]");
      return;
    }

    console.log("Available Books in Library");
    console.log("---------------------------");
    availableBooks.forEach((book) => {
      console.log(`- ${book.title} by ${book.author}`);
    });
  },
};

library.listAvailableBooks();

// 2. Borrow a book
library.borrowBook("Art of War"); // should succeed
library.borrowBook("War and Peace"); // already borrowed
library.borrowBook("Nonexistent Book"); // not in library

// 3. Return a book
library.returnBook("War and Peace"); // return a borrowed book
library.returnBook("The Prince"); // not borrowed yet

// 4. Add a new book
library.addBook("The Book of Five Rings", "Miyamoto Musashi"); // power & combat

// 5. List available books again
library.listAvailableBooks();

// Question 8: Bank Account with Validation

// Currency Formatter
const USDollar = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});

const bankAccount = {
  accountNumber: "3849338166",
  balance: 8000, // $8,000
  owner: "John Doe",
  deposit(amount) {
    // Edge Case: invalid input
    if (typeof amount !== "number" || !Number.isFinite(amount)) {
      throw new TypeError("Amount must be a valid number");
    }
    // Edge Case: negative numbers
    if (amount <= 0)
      throw new Error("Deposit amount must be greater than zero");
    // Edge Case: Invalid balance
    if (typeof this.balance !== "number") this.balance = 0;

    // handle cents safely
    this.balance = Math.round((this.balance + amount) * 100) / 100;
    return USDollar.format(this.balance);
  },
  withdraw(amount) {
    // Edge Case: NaN or negative numbers
    if (typeof amount !== "number" || amount <= 0) {
      return "Invalid withdrawal amount";
    }
    // Edge Case: amount greater than balance
    if (amount > this.balance) {
      return "Insufficient funds.";
    }
    this.balance = Math.round((this.balance - amount) * 100) / 100; // updated deduction formula
    return `${USDollar.format(
      amount
    )} has been deducted. Current balance: ${USDollar.format(this.balance)}`;
  },
  getBalance() {
    return USDollar.format(this.balance);
  },
  transfer(amount, targetAccount) {
    // Edge Case: Invalid object
    if (
      !targetAccount ||
      typeof targetAccount.deposit !== "function" ||
      typeof targetAccount !== "object"
    ) {
      throw new Error("Invalid target account.");
    }

    // Edge Case: Self-Transfer
    if (targetAccount === this) {
      throw new Error("Cannot transfer money to the same account.");
    }

    // Edge Case: Negative numbers
    if (amount <= 0) {
      throw new Error("Transfer amount must be greater than zero.");
    }

    //Wrap in a try catch
    try {
      this.withdraw(amount); // Deduct amount from current balance
      targetAccount.deposit(amount);
      return `${USDollar.format(amount)} has been transferred to ${
        targetAccount.owner
      }'s account`;
    } catch (error) {
      throw new Error(`Transfer FAILED: ${error.message}`);
    }
  },
};

// Question 9: Nested Object Navigation
const company = {
  name: "TechCorp",
  departments: {
    // Object of arr properties
    engineering: {
      // Sub object of dept
      employees: ["Alice", "Bob", "Charlie"],
      budget: 500000,
    },
    marketing: {
      employees: ["Diana", "Eve"],
      budget: 300000,
    },
    hr: {
      employees: ["Frank"],
      budget: 150000,
    },
  },
};

// Log the number of employees in engineering
console.log(
  `No. of employees in Engineering: ${company.departments.engineering.employees.length}`
);

// Calculate and log the total budget across all departments
let totalBudget = 0;
const depts = company.departments; // departments objects
for (let key in depts) {
  // Iterate through all departments
  let dept = depts[key]; // Specific department
  totalBudget += dept.budget;
}

console.log(
  `Total Budget for all Departments: ${USDollar.format(totalBudget)}`
);

// Add a new employee "Grace" to the marketing department
let newMarketingEmployee = "Grace";
company.departments.marketing.employees.push(newMarketingEmployee);
console.log(
  `${newMarketingEmployee} has been added to the ${
    Object.keys(company.departments)[1]
  } department`
);
console.log(
  `${company.name}'s marketing employees: ${company.departments.marketing.employees}`
);

// Log all employee names from all departments in a single array
let totalCompanyEmployees = []; // FIXED: Added missing let keyword

for (let key in depts) {
  let dept = depts[key];
  totalCompanyEmployees.push(...dept.employees); // FIXED: No longer a nested array by using the spread operator
}

console.log(`Total Company Employees: ${totalCompanyEmployees}`);

// Question 10: Comparison
const obj1 = { name: "John", age: 30 };
const obj2 = { name: "John", age: 30 };
const obj3 = { name: "John", age: 25 };

function compareObjects(obj1, obj2) {
  // Store obj arrays in variables
  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);

  // Check if their no. of properties match
  if(keys1.length !== keys2.length) return false;

  for (let key of keys1) {
    // Loop through the first arr
    if (obj1[key] !== obj2[key]) { // if any values don't match
      return false;
    }
  }

  return true; // If they do
}

console.log(compareObjects(obj1, obj2));

// Question 11: Student GradeBook
const gradeBook = {
  students: [
    { name: "Peter", grades: [87, 66, 74] },
    { name: "Sarah", grades: [92, 81, 88] },
    { name: "John", grades: [75, 70, 68] },
    { name: "Emily", grades: [90, 94, 89] },
    { name: "Michael", grades: [65, 72, 70] },
    { name: "Anna", grades: [85, 88, 91] },
  ],
  addStudent(name) {
    const newStudent = { name: name, grades: [] };
    this.students.push(newStudent);
    console.log(`${newStudent.name} has been added to the student's list`);
  },
  addGrade(name, grade) {
    const student = this.students.find((student) => student.name === name); // Find student's record
    // Edge Case: Student Not Found
    if (!student) {
      console.log("[ Student NOT FOUND ]");
      return;
    }
    student.grades.push(grade);
    console.log(`[ Grade has been added to ${name}'s record ]`);
  },
  getAverage(studentName) {
    const student = this.students.find(
      (student) => student.name === studentName
    );

    if (!student) {
      console.log(`[ ${studentName} NOT FOUND ]`);
      return;
    }

    const gradeSum = student.grades.reduce((acc, current) => acc + current, 0); // Calc sum
    const avg = gradeSum / student.grades.length;
    return parseFloat(avg.toFixed(1));
  },
  getClassAverage() {
    // Loop over all the student's and calculate their individual average
    const studentAvgs = this.students.map(
      (student) =>
        student.grades.reduce((sum, grade) => sum + grade, 0) /
        student.grades.length
    ); // Output: [1st student's avg, 2nd student's avg,...]
    const classAvg =
      studentAvgs.reduce((a, b) => a + b, 0) / studentAvgs.length;
    return parseFloat(classAvg.toFixed(1));
  },

  getTopStudent() {
    // Edge Case: no students
    if (!this.students || this.students.length === 0) {
      return "[ There are no student's records present in the grade book ]";
    }

    // Initialize top student variables
    let topStudent = "";
    let topStudentAvg = 0; // Start lower than any valid average

    for (const student of this.students) {
      // Ignore students with no grades
      if (!student.grades || student.grades.length === 0) continue;

      // Calculate the student's average
      const studentAvg =
        student.grades.reduce((sum, grade) => sum + grade, 0) /
        student.grades.length;

      // Update top student if this one is higher
      if (studentAvg > topStudentAvg) {
        topStudentAvg = studentAvg;
        topStudent = student.name;
      }
    }
    return `Top Student: ${topStudent} | Grade Average: ${parseFloat(topStudentAvg.toFixed(1))}`;
  },
};

// --- Test ---
// Add a new student
gradeBook.addStudent("David");

// Add grades
gradeBook.addGrade("David", 95);
gradeBook.addGrade("David", 88);

// Get a student's average
console.log("David's Average:", gradeBook.getAverage("David"));

// Get class average
console.log("Class Average:", gradeBook.getClassAverage());

// Get top student
console.log(gradeBook.getTopStudent());
