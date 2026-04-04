/*

Topic: Object Destructuring

What I learned today:
- Destructuring extracts values from object into variables
*/

// Code
var user = {
  name: "Ankit",
  age: 27,
  city: "Kolkata"
};

var { name, age } = user;

console.log(name);
console.log(age);

// Output
// Ankit
// 27

// Reason
// name and age properties are extracted directly into variables
