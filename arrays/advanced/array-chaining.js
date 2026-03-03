/*

Topic: Array Chaining (map + filter + reduce)

What I learned today:
- Multiple array methods can be chained together.
- filter() selects data.
- map() transforms data.
- reduce() combines data into single value.
*/

var numbers = [5, 10, 15, 20, 25];

// Step 1: Filter numbers greater than 10
// Step 2: Multiply each by 2
// Step 3: Add all results

var result = numbers
  .filter(function (num) {
    return num > 10;
  })
  .map(function (num) {
    return num * 2;
  })
  .reduce(function (acc, curr) {
    return acc + curr;
  }, 0);

console.log("Final Result:", result);
