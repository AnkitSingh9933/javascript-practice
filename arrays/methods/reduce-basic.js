/*

Topic: Array reduce()

What I learned today:
- reduce() reduces an array to a single value.
- It takes a callback function.
- It uses an accumulator and current value.
*/

var numbers = [1, 2, 3, 4];

var sum = numbers.reduce(function (accumulator, currentValue) {
  return accumulator + currentValue;
}, 0);

console.log("Sum:", sum);
