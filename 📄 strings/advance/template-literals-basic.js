/*

Topic: Template Literals (Basic)

What I learned today:
- Template literals use backticks (` `)
- Variables can be inserted using ${}
*/

// Code
var name = "Ankit";
var age = 27;

var message = `My name is ${name} and I am ${age} years old`;

console.log(message);

// Output
// My name is Ankit and I am 27 years old

// Reason
// ${} injects variable values inside string
