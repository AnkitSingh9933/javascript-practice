/*

Topic: Array find()

What I learned today:
- find() returns the first element that matches a condition.
- It returns undefined if no match is found.
- It stops after finding the first match.
*/

var numbers = [5, 12, 8, 20];

var result = numbers.find(function (num) {
  return num > 10;
});

console.log("First number greater than 10:", result);
