/*


What I learned today:
- Arrow function is a shorter syntax of normal function.
- Arrow functions do not have their own `this`.
*/

// Normal Function
function add(a, b) {
  return a + b;
}
console.log(add(2, 3));

// Arrow Function
const addArrow = (a, b) => {
  return a + b;
};
console.log(addArrow(2, 3));
