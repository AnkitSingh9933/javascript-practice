/*

Topic: this keyword

What I learned today:
- this refers to the current object
*/

// Code
var user = {
  name: "Rahul",
  show: function () {
    console.log(this.name);
  }
};

user.show();

// Output
// Rahul

// Reason
// user object is calling the function, so this = user
