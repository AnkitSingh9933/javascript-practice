/*

Topic: Object Method

What I learned today:
- Functions inside objects are called methods
*/

// Code
var person = {
  name: "Ankit",
  greet: function () {
    console.log("Hello " + this.name);
  }
};

person.greet();

// Output
// Hello Ankit

// Reason
// this refers to the object calling the method
