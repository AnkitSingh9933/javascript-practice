/*


What I learned today:
- Function inside an object is called a method.
- Methods define the behavior of an object.
*/

var bellboy = {
  name: "Ankit",
  age: 27,
  pickUpBag: function () {
    console.log("Bag picked up");
  }
};

// Calling object method
bellboy.pickUpBag();
