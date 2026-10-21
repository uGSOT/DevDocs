# Modern JavaScript (ES6+) — A Beginner's Guide

Modern JavaScript makes everyday tasks such as working with data, writing functions, and handling asynchronous operations easier to read and maintain. **ES6** refers to ECMAScript 2015; **ES6+** also includes later additions such as `async`/`await` (ES2017).

**Before you start:** You can run most examples in your browser's Developer Tools console or in a JavaScript file with Node.js. Module examples need separate files and a local web server when used in the browser.

## 1. `let`, `const`, and template literals

Use `let` for a variable you plan to reassign and `const` when its binding should not be reassigned. Both are **block-scoped**, unlike `var`.

```js
let points = 5;
points += 2;
const player = 'Asha';

console.log(`${player} has ${points} points.`); // Asha has 7 points.
```

Backticks (`` ` ``) create **template literals**; `${...}` inserts an expression into the string. A `const` object or array can still have its contents changed—the variable itself cannot be reassigned.

```js
const profile = { city: 'Pune' };
profile.city = 'Bengaluru'; // Allowed
// profile = {};           // TypeError if executed
```

## 2. Arrow functions

Arrow functions offer a concise way to write functions, especially callbacks.

```js
const square = number => number * number;
const add = (a, b) => a + b;
const greet = () => 'Hello!';

console.log(square(4)); // 16
console.log(add(2, 3)); // 5
console.log(greet()); // Hello!
```

For a single-expression function, the value is returned implicitly. Use braces and `return` for a function body with multiple statements. Unlike traditional functions, arrow functions do not create their own `this`, so they are not a drop-in replacement for every object method.

## 3. Destructuring arrays and objects

**Destructuring** extracts values from an array or properties from an object into variables.

```js
const languages = ['JavaScript', 'Python', 'Go'];
const [first, second] = languages;

const student = { name: 'Riya', score: 92 };
const { name, score } = student;

console.log(first, second); // JavaScript Python
console.log(name, score); // Riya 92
```

You can also provide a fallback for missing object properties: `const { level = 'beginner' } = student;`.

## 4. Spread and rest operators (`...`)

The **spread** syntax expands values into an array, object, or function arguments. It is useful for creating updated copies without changing the original.

```js
const original = [1, 2];
const extended = [...original, 3];
const settings = { theme: 'light', fontSize: 14 };
const updated = { ...settings, theme: 'dark' };

console.log(extended); // [1, 2, 3]
console.log(updated.theme); // dark
```

The **rest** syntax collects remaining arguments or elements into a single array.

```js
function sum(...numbers) {
  return numbers.reduce((total, number) => total + number, 0);
}

console.log(sum(2, 3, 5)); // 10
```

Spread copies are **shallow**: nested objects are still shared unless you copy them separately.

## 5. `map()`, `filter()`, and `reduce()`

These array methods handle common data-processing tasks without manually building results with loops.

```js
const numbers = [1, 2, 3, 4, 5];

const doubled = numbers.map(number => number * 2);
const even = numbers.filter(number => number % 2 === 0);
const total = numbers.reduce((sum, number) => sum + number, 0);

console.log(doubled); // [2, 4, 6, 8, 10]
console.log(even); // [2, 4]
console.log(total); // 15
```

- **`map()`** transforms each element into a new array.
- **`filter()`** keeps the elements that satisfy a condition.
- **`reduce()`** combines array elements into one result. The `0` above is its initial accumulator value.

All three methods return a result without changing the original `numbers` array in this example.

## 6. Promises and `async` / `await`

A **Promise** represents an operation that may succeed later (**fulfilled**) or fail (**rejected**). `.then()` handles the result, while `.catch()` handles errors.

```js
const result = Promise.resolve('Data loaded');

result
  .then(message => console.log(message)) // Data loaded
  .catch(error => console.error(error));
```

`async` / `await` lets you write Promise-based operations in a more sequential style. Use `try` / `catch` to handle failures.

```js
async function loadMessage() {
  try {
    const message = await Promise.resolve('Hello from async code');
    console.log(message);
  } catch (error) {
    console.error('Loading failed:', error);
  }
}

loadMessage(); // Hello from async code
```

`await` suspends **the async function**, not the entire JavaScript program. An `async` function always returns a Promise.

## 7. JavaScript modules: `export` and `import`

Modules let you split code into reusable files. In `math.js`, export a function:

```js
// math.js
export function add(a, b) {
  return a + b;
}
```

Import it in another file:

```js
// main.js
import { add } from './math.js';

console.log(add(3, 4)); // 7
```

To run `main.js` in a web page, load it as a module:

```html
<!-- index.html -->
<script type="module" src="./main.js"></script>
```

Serve these files over HTTP (for example, `python3 -m http.server 8000`) and open the page in your browser. Module imports are resolved relative to the importing file. A normal `file://` page may be blocked by browser security rules.

## Practice

Try these on your own:

1. Write an arrow function that converts Celsius to Fahrenheit: `F = C * 9 / 5 + 32`.
2. Given `[3, 6, 9, 12]`, use `filter()` to keep numbers greater than 6 and `map()` to double them.
3. Destructure `const user = { username: 'dev', role: 'reader' }` into two variables.
4. Create an async function that awaits `Promise.resolve(42)` and logs the answer.

## Further reading

- [MDN: JavaScript Guide](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide)
- [MDN: JavaScript reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference)
- [MDN: Using promises](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_promises)
- [MDN: JavaScript modules](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules)
