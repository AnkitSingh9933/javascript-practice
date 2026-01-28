/*


What I learned today:
- Constructor function is used to create multiple objects.
- 'new' keyword creates a new object.
- 'this' refers to the current object being created.
*/

// Constructor Function
function Student(name, age) {
  this.name = name;
  this.age = age;
}

// Creating objects using constructor
var student1 = new Student("Ankit", 27);
var student2 = new Student("Rahul", 25);

// Output
console.log(student1);
console.log(student2);
