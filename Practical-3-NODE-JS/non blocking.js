const fs = require('fs');

console.log(' ASYNC FILE READ EXAMPLE');
console.log('1. Program initialization...');

console.log('2. Starting file read operation (ASYNC)...');

fs.readFile('sample.txt', 'utf8', (err, fileContent) => {
    if (err) {
        console.error('File reading failed:', err.message);
        return;
    }
    
    console.log('4. File loaded successfully! (Callback executed)');
    console.log('5. Content below:');
    console.log('====================');
    console.log(fileContent);
    console.log('====================');
    console.log('6. Async operation completed!');
});

console.log('3. This executes RIGHT AWAY after file read starts');
console.log('7. Main thread execution done');
console.log('8. Note: File content will appear after this line');

setTimeout(() => {
    console.log('9. Background tasks can run while file loads!');
}, 100);


