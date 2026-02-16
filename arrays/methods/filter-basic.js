/*

Topic: Array filter()

What I learned today:
- filter() creates a new array.
- It keeps elements that match a condition.
- It does NOT modify the original array.
*/

var numbers = [1, 2, 3, 4, 5, 6];

var evenNumbers = numbers.filter(function (num) {
  return num % 2 === 0;
});

console.log("Original:", numbers);
console.log("Even Numbers:", evenNumbers);
