
const obj = {
  name: "MyObject",


  normalFunc: function() {
    console.log("normalFunc this:", this);
  },

  arrowFunc: () => {
    console.log("arrowFunc this:", this);
  }
};

console.log("Calling methods as object properties:\n");
obj.normalFunc(); 
obj.arrowFunc(); 

console.log("\nCalling methods detached from object:\n");
const detachedNormal = obj.normalFunc;
const detachedArrow = obj.arrowFunc;

detachedNormal(); 
detachedArrow();  