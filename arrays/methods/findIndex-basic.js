/*

Topic: Array findIndex()

What I learned today:
- findIndex() returns the index of the first element that matches condition.
- If no match is found, it returns -1.
*/

var numbers = [5, 12, 8, 20];

var index = numbers.findIndex(function (num) {
  return num > 10;
});

console.log("Index of first number > 10:", index);
