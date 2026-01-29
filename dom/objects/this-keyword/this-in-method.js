/*
What I learned today:
- When a function is inside an object, 'this' refers to that object.
- 'this' helps access object properties.
*/

var student = {
  name: "Ankit",
  age: 27,
  showDetails: function () {
    console.log(this.name);
    console.log(this.age);
  }
};

// Calling method
student.showDetails();
