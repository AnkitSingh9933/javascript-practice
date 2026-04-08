/*

Topic: Rest Operator (Object)

What I learned today:
- Rest operator collects remaining properties
*/

// Code
var user = {
  name: "Ankit",
  age: 27,
  city: "Kolkata"
};

var { name, ...restData } = user;

console.log(name);
console.log(restData);

// Output
// Ankit
// { age: 27, city: "Kolkata" }

// Reason
// name extracted separately
// remaining properties collected into restData
