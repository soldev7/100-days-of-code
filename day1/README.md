# Day 1: Intro to JavaScript

## Things I Learned Today

1. **Why JavaScript was created** — At the time, most programming languages had complex syntax. Web developers only knew HTML and CSS, and learning resources were very limited. JS was made to be easy and forgiving.

2. **Security issue with C++** — Web devs didn't use C++ because it could access the system without permission. It could read private files or delete folders. JavaScript was created to run inside a safe "sandbox" with limited access (only keyboard and mouse — everything else needs permission).

3. **Hardware limitations** — Computers in the 1990s had only 4–6 MB of RAM. Other languages needed heavy compilers and runtimes. JS was made lightweight for the web.

4. **How JavaScript runs** — Browsers have C++ code inside them (called engines) that take JavaScript as input and show output on screen. Google's engine is called V8. It's already compiled to machine code, so JS doesn't need a separate compiler. Different systems have different machine code, but the engine handles that.

5. **Running JS outside the browser** — JS only runs in browsers because of engines like V8. To run JS in editors like VS Code, we need Node.js — an open-source, cross-platform runtime that lets JS run outside the browser.

## 1 Thing That Blew My Mind

> JavaScript was created because C++ had security issues — but JS itself runs on a C++ engine (V8). They used C++ to make a safe sandbox that takes JS as input and gives output. That's genius.

## Code I Wrote

```javascript
console.log('Hello World!');
