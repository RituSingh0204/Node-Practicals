# Practical-3-NODE-JS
Node.js File Operations and Modules - Practical Assignment

Author: Ritu Singh
Student ID: GF202346594
Course: BCA - Final Year

Project Description

Node.js practical demonstrating:
1. Module system (require/exports)
2. Blocking file operations
3. Non-blocking file operations
4. Asynchronous programming with setTimeout

Requirements

- Node.js installed
- sample.txt file in same directory

How to Run

Module Demo:
node app.js

Math Module (imported by app.js):
Contains add and subtract functions

Blocking File Read:
node Blocking.js

Non-Blocking File Read:
node non-blocking.js

Async Programming Demo:
node P3.js

What Each File Shows

app.js:
- Imports math functions from math.js
- Demonstrates module.exports and require()
- Shows math operations with different numbers

math.js:
- Exports reusable add() and subtract() functions
- Shows how to create custom modules

Blocking.js:
- Synchronous file reading with fs.readFileSync()
- Program waits for file to load completely
- Sequential execution with try-catch error handling

non-blocking.js:
- Asynchronous file reading with fs.readFile()
- Program continues while file loads in background
- Callback function executes when file is ready
- Shows concurrent execution

sample.txt:
- Sample student data file used by both file reading examples

P3.js:
- setTimeout demonstration
- Simulates loading person information with delay
- Shows asynchronous callback execution

Expected Output

app.js: Math calculations using imported functions
Blocking.js: File content displayed in sequence 
non-blocking.js: File content appears after other messages
P3.js: Person info loaded after 2 second delay

Key Concepts

- Node.js module system
- Blocking vs non-blocking operations
- File system operations
- Asynchronous programming
- Error handling

Files

- app.js: Module import demo
- math.js: Custom math module
- Blocking.js: Sync file reading
- non-blocking.js: Async file reading  
- sample.txt: Data file
- P3.js: setTimeout demo

Testing

Run each file to see different Node.js concepts.
Make sure sample.txt exists for file reading examples.
