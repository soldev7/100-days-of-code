# Day 2: Variables & Data Types

<img width="1254" height="1254" alt="ChatGPT Image May 7, 2026, 12_03_32 PM" src="https://github.com/user-attachments/assets/3c3aec2a-a665-4d54-acac-b2e098073f92" />

## What I learned

Three ways to create a variable in JavaScript:

- `let` and `const` – modern way
- `var` – old way, trying to avoid it

**Scope differences:**
- `var` only respects function scope and global scope
- `let` and `const` respect block scope `{ }`

**Data types** = what kind of data a variable holds.

Two categories:

| Type | Examples | Behavior |
|------|----------|----------|
| Primitive | numbers, string, boolean, null, undefined, bigInt, symbol | Immutable → new memory location on each change |
| Non-primitive | arrays, objects, functions | Mutable → same memory reference |

**How I visualize it:**
- Primitive = moving to a new house every time something changes
- Non-primitive = staying in the same house, just rearranging things

## What surprised me

`typeof null` returns `"object"`. It's a bug from 1995. JavaScript was built in 10 days and the bug never got fixed.
