/*

Topic: Constructor Function

What I learned today:
- Constructor is used to create multiple objects
*/

// Code
function Student(name, age) {
  this.name = name;
  this.age = age;
}

var s1 = new Student("Ankit", 27);
console.log(s1);

// Output
// { name: "Ankit", age: 27 }

// Reason
// new keyword creates a new object and assigns values using this
