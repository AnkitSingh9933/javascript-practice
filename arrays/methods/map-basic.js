/*

Topic: Array map()

What I learned today:
- map() creates a new array.
- It runs a function for each element.
- It does NOT modify the original array.
*/

var numbers = [1, 2, 3, 4];

var doubled = numbers.map(function (num) {
  return num * 2;
});

console.log("Original:", numbers);
console.log("New Array:", doubled);
