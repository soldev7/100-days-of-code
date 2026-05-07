// Variables

// Ways to create variable in JS
// let and const = new way
// var = old way

let name = 'Sol';
let age = 19;
age = 20; // reassigned — points to new memory location

// const can't be reassigned
const birth = 'Jan 1';
// birth = 'Dec 31'; // ❌ error

// var can be redeclared (bad)
var hobby = 'Learning';
var hobby = 'Coding'; // no error

// Scope
if (true) {
  let a = 'only inside block';
  var b = 'works outside too';
}
// console.log(a); // ❌ error
console.log(b); // ✅ works

// Data types

// Primitive
let num = 10;
let str = "Just move forward!";
let hasPassed = true;
let undefinedVar; // undefined
let empty = null; // null (bug: typeof null = object)
let big = 12345678901234567890n; // bigInt
const id = Symbol('id'); // unique

// Non-primitive
let arr = [1, 2, 3, "sol", "Nepal"];
let obj = { name: "Sol", age: 19, grade: 12 };

// Function stored in variable
let sayHi = function() {
  console.log("hi");
};
sayHi();