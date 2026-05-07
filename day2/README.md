# Day 2: Variables & Data Types

## What I learned today

**Three ways to create a variable:**
- `let` and `const` → the modern way
- `var` → the old way (avoid it)

**The scope difference:**
- `var` only cares about functions and global space
- `let` and `const` care about blocks `{ }` too

**Data types = what kind of data a variable holds**

Two families:

| Family | Examples | Behavior |
|--------|----------|----------|
| Primitive | numbers, string, boolean, null, undefined, bigInt, symbol | Immutable → new memory location on every change |
| Non-primitive | arrays, objects, functions | Mutable → points to same memory location |

**The analogy that clicked for me:**
- Primitive = you move to a new house every time you change something
- Non-primitive = you stay in the same house but rearrange the furniture

## Mind blown moment

> `typeof null` returns `"object"`. It's a legacy bug. JavaScript was built in 10 days and that bug never got fixed.

## Code I wrote

```javascript
// Variables
let name = 'Sol';
let age = 19;
age = 20; // reassigned → new memory location

const birth = 'Jan 1';
// birth = 'Dec 31'; // ❌ can't reassign const

var hobby = 'Learning';
var hobby = 'Coding'; // var lets you redeclare (confusing, avoid it)

// Scope example
if (true) {
  let blockScoped = 'only here';
  var functionScoped = 'works outside';
}
console.log(functionScoped); // "works outside"
// console.log(blockScoped); // ❌ error

// Primitive types
let num = 10;
let str = "Just move forward!";
let isLoggedIn = true;
let notAssigned; // undefined
let empty = null; // typeof null === "object" (legacy bug)
let bigNumber = 12345678901234567890n; // bigInt
const uniqueId = Symbol('id'); // symbol

// Non-primitive types
let arr = [1, 2, 3, "sol", "Nepal"];
let obj = { name: "Sol", age: 19, grade: 12 };

// Function as a variable
let sayHi = function() {
  console.log("hi");
};
sayHi();
