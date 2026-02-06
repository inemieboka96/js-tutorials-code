# JavaScript Tutorials & Mini Projects

This repository is a curated collection of small, browser-based JavaScript tutorials and mini-projects designed for learning core language features, common patterns, and practical exercises. Each folder contains a focused example (HTML, CSS, and JavaScript) that you can open in a browser or run locally with a lightweight dev server.

**Quick Tip:** Install the `Live Server` extension in VS Code and click **Go Live** to view examples in the browser with automatic reloads.

**How this README is organized:**
- **Project Overview:** purpose and prerequisites
- **Run & Test:** how to open examples locally
- **Folder Index:** short descriptions and key files for every topic
- **Contributing / License / Credits**

**Project Overview**
- **Purpose:** Learn and practice JavaScript fundamentals and patterns with runnable examples and short mini-projects. Each example logs explanations to the browser console and/or manipulates the DOM so you can inspect behavior interactively.
- **Audience:** Beginner → intermediate JavaScript learners and anyone building small web demos.
- **Tech:** Plain HTML, CSS, and vanilla JavaScript (ES6+). No build tools required.

**Run & Test**
- **Open in browser:** Double-click any folder's `index.html` (for example, [arrays/index.html](arrays/index.html)).
- **Recommended (Live reload):** Use VS Code `Live Server` to serve the project root or an individual folder.
- **Inspect outputs:** Open DevTools (F12) and check the Console to see annotated logs produced by the examples.

**Folder Index (what's inside & why)**
- **arrays:** Indexed examples for array basics, mutation (`splice`), iterators (`map`, `filter`, `reduce`) and utilities. Key files: [arrays/index.html](arrays/index.html), `script.js`.
- **callbacks:** Explanation and DOM demo for callback patterns, timers, and array callbacks. Key files: [callbacks/index.html](callbacks/index.html), `callback.js`.
- **constructors:** Demonstrates constructor functions and ES6 `class` syntax with real-world use cases (BankAccount, Car, Book). Key files: [constructors/index.html](constructors/index.html), `constructors.js`.
- **for-each:** Focused guide on `forEach()` usage and common patterns. Key file: `foreach.js`.
- **function-expressions:** Deep-dive showing function expressions, arrow functions, closures, higher-order functions, debounce/memoize examples and module patterns. Key file: `func-expression.js`.
- **inheritance:** Examples of prototype-based and class-based inheritance, overrides, and use-cases (UI components, game characters). Key file: `inherit.js`.
- **map-filter-reduce:** Focused examples and notes for `map()`, `filter()`, and `reduce()` with common patterns like grouping and flattening. Key files: [map-filter-reduce/index.html](map-filter-reduce/index.html), `mfr.js`.
- **mini-projects:** Small browser applications with DOM interactions.
	- `dice-roller-program` — roll N dice and display images; see `dice.js`.
	- `random-password-generator` — configurable password generator with copy-to-clipboard; see `generatePass.js`.
- **objects:** Tutorial and exercises covering object creation patterns, `this`, nested objects, and practical solutions (library, bank account, grade book). Key files: [objects/index.html](objects/index.html), `object.js`, `solutions.js`.
- **rest-parameter:** Demonstrations of the rest parameter (`...args`), function aggregation, and examples. Key file: `rest.js`.
- **spread-operator:** Examples showing the spread operator for arrays, strings and merging. Key file: `spread.js`.
- **static-keyword:** Demonstrates `static` class members, factory methods, counters, and utilities. Key file: `static.js`.

**Notes & Tips**
- Each interactive folder includes console logs that explain what the code is doing—open DevTools Console to follow along.
- Where a page manipulates the DOM (mini-projects, callbacks), you can interact with page controls and view results in the page and console.
- Files labeled `challenge` contain practice prompts and solutions—use them to test your knowledge.

---
Happy learning! Open a folder's `index.html` and press F12 to explore the examples.
Tip: In VS Code, install the "Live Server" extension and click "Go Live" to serve files quickly.

Tutorial link: https://youtu.be/lfmg-EJ8gm4
