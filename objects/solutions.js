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
    let count = 0; // Initialize count
    for (let i = 0; i < this.items.length; i++) {
      // Iterate n times
      count++; // Increment count
    }
    console.log(`No. of items: ${count}`);
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
    { title: "Gates of Fire", author: "Steven Pressfield", isAvailable: true } // war
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
      if (book.title === title) { // Book is found
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
    let availableBooks = this.books.filter(book => book.isAvailable === true);

    // Edge Case: All books aren't available
    if (availableBooks.length === 0) {
        console.log("[No books are currently available]");
        return;
    }

    console.log("Available Books in Library");
    console.log("---------------------------")
    availableBooks.forEach(book => {
        console.log(`- ${book.title} by ${book.author}`);
    });
  }
};

library.listAvailableBooks();

// 2. Borrow a book
library.borrowBook("Art of War"); // should succeed
library.borrowBook("War and Peace"); // already borrowed
library.borrowBook("Nonexistent Book"); // not in library

// 3. Return a book
library.returnBook("War and Peace"); // return a borrowed book
library.returnBook("The Prince");    // not borrowed yet

// 4. Add a new book
library.addBook("The Book of Five Rings", "Miyamoto Musashi"); // power & combat

// 5. List available books again
library.listAvailableBooks();

// Question 8: Bank Account with Validation
