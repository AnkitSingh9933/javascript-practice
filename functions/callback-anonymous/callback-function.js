/*
What I learned today:
- A callback function is a function passed as an argument.
- Callback runs after another function finishes its work.
*/

// Normal function
function greet(name) {
  console.log("Hello " + name);
}

// Function that accepts callback
function processUser(callback) {
  var userName = "Ankit";
  callback(userName);
}

// Passing function as callback
processUser(greet);
