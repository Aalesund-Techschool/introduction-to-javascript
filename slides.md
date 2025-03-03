---
# You can also start simply with 'default'
theme: apple-basic
# using a subtle coding background
# some information about your slides
title: Introduction to JavaScript
info: |
  ## Introduction to JavaScript
  A 20-minute overview of JavaScript history and fundamentals.
# apply unocss classes to the current slide
class: text-center
# https://sli.dev/features/drawing
drawings:
  persist: false
# slide transition: https://sli.dev/guide/animations.html#slide-transitions
transition: slide-left
# enable MDC Syntax: https://sli.dev/features/mdc
mdc: true
layout: intro-image
image: https://bairesdev.mo.cloudinary.net/blog/2023/08/What-Is-JavaScript-Used-For.jpg?tx=w_1920,q_auto
---

<div class="absolute bottom-10 right-10 text-align-right">
  <p class="font-700">Steffen Holanger,Boitano</p>
  <p class="font-700">Christoffer Træen, Twoday</p>
  <p class="font-700">Chris Årdal, Tings</p>
</div>

<!--
Welcome to this introduction to JavaScript!
-->

---
transition: slide-left
---

# What is JavaScript?

JavaScript is a high-level, interpreted programming language primarily used for:

<v-clicks>

- Creating interactive web pages
- Client-side web development
- Server-side applications (Node.js)
- Mobile applications
- Game development
- Desktop applications

</v-clicks>

<div v-click class="mt-10 text-center text-orange-400">
<carbon-warning class="inline-block mr-1"/> Not to be confused with Java - they're completely different languages!
</div>

<!--
JavaScript is everywhere - from websites to servers to mobile apps
-->

---
layout: two-cols
layoutClass: gap-4
---

# A Brief History

<v-clicks>

- **1995**: Created by Brendan Eich at Netscape in just 10 days
- **1996**: Submitted to ECMA International for standardization
- **1997**: ECMAScript 1 released (official standard)
- **2005**: AJAX popularized (asynchronous JS)
- **2009**: ECMAScript 5 with important improvements
- **2015**: ECMAScript 2015 (ES6) - major update
- **Now**: Yearly updates (ES2022, ES2023, etc.)

</v-clicks>

::right::

<div v-click="1" class="mt-12 ml-6">
  <img src="https://cdn.facesofopensource.com/wp-content/uploads/2017/07/23193713/brendaneich25607.web_.jpg" class="h-80 rounded shadow" />
  <p class="text-sm mt-1">Brendan Eich, creator of JavaScript</p>
</div>

---
transition: slide-up
layout: intro-image-right
image: https://live.staticflickr.com/4066/4704268314_ec32216ccf_h.jpg
backgroundSize: contain

---

# Growing pains

**ES6 Revolution (2015):** Added classes, arrow functions, let/const, modules, promises, and more.

---

# Where JavaScript Runs

<div class="grid grid-cols-2 gap-x-4 mt-4">
<div v-click>

### Browser

- Client-side execution
- DOM manipulation
- Interactivity
- Limited access to system resources

```html
<script>
  document
    .getElementById('demo')
    .innerHTML = 'Hello JavaScript!'
</script>
```

</div>
<div v-click>

### Node.js

- Server-side execution
- File system access
- Network operations
- System resource access

```js
const http = require('http')
const server = http.createServer((req, res) => {
  res.end('Hello from Node.js!')
})
server.listen(3000)
```

</div>
</div>

---

<div class="mt-8">

### Other Environments

- Deno, Bun (newer runtimes)
- Embedded systems
- Mobile frameworks (React Native)
- Desktop apps (Electron)

</div>

---

# JavaScript Basics: Syntax

By convention `camelCase` is being used for all variables.

## Variables

```js {all|1|2|3|all}
var oldWay = 'Avoid using var' // Function-scoped
let mutable = 'Can be changed' // Block-scoped
const immutable = "Can't change*" // Block-scoped
```

---
layout: full
---

## Data Types

```js {all|1-4|5-8|10-12|all}
// Primitive types
let name = 'John' // String
let age = 30 // Number (double-precision 64 bit)
let isActive = true // Boolean

// Special primitives
let empty = null // Null
let notDefined // Undefined

// Complex types
let person = { name, age } // Object
let colors = ['red', 'blue'] // Array
```

---

## Functions

```js {all|1-4|6-9|11-12|all}
// Traditional function
function greet(name) {
  return `Hello, ${name}!`
}

// Arrow function
const greet = (name) => {
  return `Hello, ${name}!`
}

// One-liner arrow function
const greet = (name) => `Hello, ${name}!`
```

<div v-click >Functions are first class citizens in javascript

</div>

---

## Control Flow

```js {all|1-4|6-12|14-16|18-20|all}
// Conditionals
if (age >= 18) {
  console.log('Adult')
}

// Loops
for (let i = 0; i < 5; i++) {
  console.log(i)
}
colors.forEach((color) => {
  console.log(color)
})

while(timeIsPassing) {
  console.log("Keep living")
}

do {
  console.log("Learn to code")
} while (youCan)
```

---
layout: two-cols
layoutClass: gap-4
---

# JavaScript in Action: DOM Manipulation

```js
// This would select elements in a real webpage
console.log('Simulating DOM manipulation...')
const element = document.getElementById('demo')

// Simulating element selection
console.log('Initial element:', element)

// Changing content
element.innerHTML = 'Hello, JavaScript!'
console.log('After setting innerHTML:', element)

// Simulating adding an event listener
console.log('Adding click event listener...')
element.addEventListener('click', (event) => {
  console.log('Clicking target', event.target)
  })

element.innerHTML = 'You clicked me!'
console.log('Final element state:', element)
```

::right::

# Real DOM Example

```html
<!DOCTYPE html>
<html>
  <body>
    <!-- Element to manipulate -->
    <h2 id="demo">A Heading</h2>
    <button id="btn">Click me</button>

    <script>
      // Get element references
      const demo = document.getElementById('demo')
      const btn = document.getElementById('btn')

      // Change content immediately
      demo.innerHTML = 'Hello JavaScript!'

      // Add event listener to button
      btn.addEventListener('click', function () {
        demo.style.color = 'red'
        demo.innerHTML = 'Text changed!'
      })
    </script>
  </body>
</html>
```

---
transition: fade-out
---

# Working with Data

## Objects

```js {all|1-5|7-10|11|all}
// Creating an object
const person = {
  name: 'Sarah',
  age: 28,
  isEmployed: true,
}

// Accessing properties
console.log(person.name) // "Sarah"
console.log(person['age']) // 28
person.location = 'New York' // Adding property
```

---
layout: two-cols
layoutClass: gap-4
---

## Arrays

```js {all|1-2|4-5|7-10|all}
// Creating an array
const fruits = ['Apple', 'Banana', 'Cherry']

// Accessing elements
console.log(fruits[0]) // "Apple"

// Array methods
fruits.push('Date') // Add to end
fruits.pop() // Remove from end
const citrus = fruits.slice(1, 2) // Extract
fruits.forEach((f) => console.log(f)) // Iterate
```

::right::

<div v-click>

## Modern Array Methods

```js {monaco-run}
const numbers = [1, 2, 3, 4, 5]

// map: transform each element
const doubled = numbers.map((x) => x * 2)
console.log('Doubled:', doubled)

// filter: keep elements that pass a test
const evenNumbers = numbers.filter((x) => x % 2 === 0)
console.log('Even numbers:', evenNumbers)

// reduce: accumulate values
const sum = numbers.reduce((acc, curr) => acc + curr, 0)
console.log('Sum:', sum)

// find: get first matching element
const found = numbers.find((x) => x > 3)
console.log('First number > 3:', found)
```
</div >

---
layout: two-cols
layoutClass: gap-4
---

# Asynchronous JavaScript

JavaScript handles async operations with:

<v-clicks>

- Callbacks (traditional)
- Promises (ES6)
- Async/await (modern)

</v-clicks>

<div v-click class="mt-4">

## Callbacks

```js
function fetchData(callback) {
  setTimeout(() => {
    callback('Data received')
  }, 1000)
}

fetchData(function (data) {
  console.log(data) // After 1 second: "Data received"
})
```

</div>

::right::

<v-clicks>
<div>

## Promises

```js
function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Data received')
    }, 1000)
  })
}

fetchData()
  .then((data) => console.log(data))
  .catch((error) => console.error(error))
```
</div>

<div>

## Async/Await

```js
async function getData() {
  try {
    const data = await fetchData()
    console.log(data)
  } catch (error) {
    console.error(error)
  }
}

getData()
```
</div>

</v-clicks>

---
layout: two-cols
layoutClass: gap-4
---

# Common Use Cases

<div v-click>

## Form Validation

```js
document.querySelector('form')
  .addEventListener('submit', (event) => {
    const emailInput = document.getElementById('email')
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

    if (!emailRegex.test(emailInput.value)) {
      event.preventDefault()
      showError('Please enter a valid email')
    }
})
```

</div>

::right::

<div v-click>

## API Requests

```js
async function getUsers() {
  try {
    const response = 
    await fetch('https://api.example.com/users')

    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`)
    }

    const users = await response.json()
    displayUsers(users)
  } catch (error) {
    console.error('Fetch error:', error)
  }
}
```

</div>

---
layout: two-cols
layoutClass: gap-4
---

<div >

## DOM Updates

```js
function updateCounter() {
  const counterElement = document
    .getElementById('counter')

  let count = parseInt(counterElement.textContent)
  counterElement.textContent = count + 1

  if (count >= 10) {
    counterElement.style.color = 'red'
  }
}
```

</div>

::right::

<div v-click>

## Local Storage

```js
// Save data
function saveSettings(settings) {
  localStorage
    .setItem('userSettings', JSON.stringify(settings))
}

// Load data
function loadSettings() {
  const data = localStorage.getItem('userSettings')
  return data ? JSON.parse(data) : defaultSettings
}
```

</div>

---
level: 2
---

# JavaScript Best Practices

<div class="grid grid-cols-2 gap-4">
<div>

<v-clicks>

- Use `const` and `let` instead of `var`
- Prefer strict equality (`===`) over loose equality (`==`)
- Avoid global variables
- Use meaningful variable and function names
- Comment your code (but make it self-documenting)
- Handle errors properly

</v-clicks>

</div>
<div>

<v-clicks>

- Use modern ES6+ features
- Follow a style guide (Airbnb, Google, Standard)
- Break code into small, reusable functions
- Use linters (ESLint) and formatters (Prettier)
- Test your code
- Consider using TypeScript for large projects

</v-clicks>

</div>
</div>

---

## Bad vs Good Code Example

```js magic-move {lines: true}
// Bad code
var x = function (y) {
  if (y == null) y = 42
  var z = y + 5
  return z
}

// Good code
const addFive = (number = 42) => {
  return number + 5
}
```

<!-- Example is not limited to javascript but is valid for all programming -->

---

# Modern JavaScript Ecosystem

<div class="mt-6 grid grid-cols-3 gap-4">
<div v-click>

## Frameworks & Libraries

- React
- Vue
- Angular
- Svelte
- Express (Node.js)
- NestJs (Node.js)

</div>
<div v-click>

## Build Tools

- Webpack
- Vite
- ESBuild
- Rollup
- Parcel

</div>
<div v-click>

## Testing

- Jest
- Mocha
- Cypress
- Playwright
- Vitest

</div>
<div v-click>

## Package Management

- npm
- yarn
- pnpm

</div>
<div v-click>

## TypeScript

- Static typing
- Better tooling
- Enhanced IDE support
- Improved maintainability

</div>
<div v-click>

## Modern Runtimes

- Node.js
- Deno
- Bun
- Cloudflare Workers

</div>
</div>

---
layout: center
class: text-center
---

# Resources for Learning

<div class="grid grid-cols-3 gap-8 mt-10">
<div>
  <h3 class="font-bold">For Beginners</h3>
  <ul class="mt-2 text-left">
    <li>freeCodeCamp</li>
    <li>JavaScript.info</li>
    <li>MDN Web Docs</li>
    <li>Codecademy</li>
  </ul>
</div>

<div>
  <h3 class="font-bold">For Practice</h3>
  <ul class="mt-2 text-left">
    <li>Exercism.io</li>
    <li>CodeWars</li>
    <li>LeetCode</li>
    <li>Frontend Mentor</li>
  </ul>
</div>

<div>
  <h3 class="font-bold">Advanced Topics</h3>
  <ul class="mt-2 text-left">
    <li>You Don't Know JS (book series)</li>
    <li>Eloquent JavaScript (book)</li>
    <li>JavaScript: The Good Parts (book)</li>
    <li>Frontend Masters (courses)</li>
  </ul>
</div>
</div>

---
layout: center
class: text-center
---

# Thank You!

Start writing JavaScript today!

<div class="mt-10">
  <img src="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png" class="h-40 mx-auto">
</div>

<div class="mt-10 text-sm">
  <p>Questions? Let's discuss!</p>
  <p class="mt-2 text-gray-400">This presentation was made with Slidev - https://sli.dev</p>
</div>

<!-- There is a lot we did not cover
- Classes
- Functional programming
- How references are handled
- Factory functions
- Type coercion
 -->