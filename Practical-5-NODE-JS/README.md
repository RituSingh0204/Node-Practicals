# Practical-5-NODE-JS
# Node.js Projects: Event Emitter & MongoDB 

- Event Emitter: Demonstrates how to create and listen to custom events in Node.js.
- MongoDB : Demonstrates connecting to MongoDB server and inserting a user record.

Files Included:
- Eventemitter.js → Event Emitter program
- mongopart.js → MongoDB In-Memory program

How to Run:
1. Open terminal in the project folder and run:
   npm init -y
   npm install mongodb mongodb-memory-server

2. Run Event Emitter:
   node Eventemitter.js
   Expected output:
   Hello there, Ritu!

3. Run MongoDB Demo:
   node mongopart.js
   Expected output (example):
    Connected to MongoDB
   Inserted user with ID: 6512abcd1234ef5678
   All users: [ { _id: ..., name: 'Ritu Singh', age: 22, email: 'ritu@example.com' } ]
   Stopped MongoDB

Author-Ritu Singh (Roll No. Gf202346594) for Node.js subject (3rd Year).
