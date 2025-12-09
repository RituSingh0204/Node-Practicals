
const { EventEmitter } = require('events'); 


const myEmitter = new EventEmitter();


function greetListener(person) {
  console.log('Hello there, ' + person + '!');
}
myEmitter.on('greet', greetListener);


myEmitter.emit('greet', 'Ritu');
