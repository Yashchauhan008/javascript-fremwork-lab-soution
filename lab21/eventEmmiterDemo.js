// learn this module




const EventEmitter = require('events');

// Create a class that extends EventEmitter
class MyEmitter extends EventEmitter {}

// Create an instance of the class
const myEmitter = new MyEmitter();

// Add an event listener for the 'greet' event
myEmitter.on('greet', (name) => {
    console.log(`Hello, ${name}!`);
});

// Add another event listener for the 'greet' event
myEmitter.on('greet', (name) => {
    console.log(`Welcome, ${name}!`);
});

// Add an event listener for the 'error' event
myEmitter.on('error', (err) => {
    console.error(`Error: ${err.message}`);
});

// Emit the 'greet' event
myEmitter.emit('greet', 'Alice');

// Emit the 'error' event
myEmitter.emit('error', new Error('Something went wrong!'));

// Emit an event after a delay
setTimeout(() => {
    myEmitter.emit('greet', 'Bob');
}, 2000);
