/*
 * map(), filter() & reduce() Functions in JavaScript
 * 
 * These are higher-order array methods that enable functional programming patterns:
 * 
 * map() - Transforms each element in an array and returns a new array of the same length
 *   Use cases: Converting data types, extracting properties, applying calculations
 *   Example: [1, 2, 3].map(x => x * 2) → [2, 4, 6]
 * 
 * filter() - Creates a new array with elements that pass a test condition
 *   Use cases: Removing unwanted items, searching, conditional selection
 *   Example: [1, 2, 3, 4].filter(x => x > 2) → [3, 4]
 * 
 * reduce() - Reduces an array to a single value by applying a function cumulatively
 *   Use cases: Summing values, flattening arrays, grouping data, building objects
 *   Example: [1, 2, 3].reduce((sum, x) => sum + x, 0) → 6
 */