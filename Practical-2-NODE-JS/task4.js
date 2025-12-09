
function calculate(operation, a, b) {
  return operation(a, b);
}


function add(x, y) {
  return x + y;
}

function subtract(x, y) {
  return x - y;
}


const multiply = (x, y) => x * y;


console.log("Addition:", calculate(add, 10, 5));       
console.log("Subtraction:", calculate(subtract, 10, 5)); 
console.log("Multiplication:", calculate(multiply, 4, 5)); 


console.log("Division:", calculate((x, y) => x / y, 20, 4)); 
console.log("Exponent:", calculate((x, y) => x ** y, 2, 3)); 
