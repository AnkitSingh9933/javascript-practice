/*

Topic: Rest Operator (Function)

What I learned today:
- Rest operator collects multiple arguments into array
*/

// Code
function add(...numbers) {
  console.log(numbers);
}

add(10, 20, 30);

// Output
// [10, 20, 30]

// Reason
// all arguments are collected into an array
