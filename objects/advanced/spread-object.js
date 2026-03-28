/*

Topic: Spread Operator (Object Copy)

What I learned today:
- Spread operator copies object properties
*/

// Code
var user = {
  name: "Ankit",
  age: 27
};

var copyUser = { ...user };

console.log(copyUser);

// Output
// { name: "Ankit", age: 27 }

// Reason
// Spread (...) copies all key-value pairs into new object
