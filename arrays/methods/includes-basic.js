/*

Topic: Array includes()

What I learned today:
- includes() checks if an element exists in an array.
- It returns true or false.
- It does not return index.
*/

var fruits = ["Apple", "Mango", "Banana"];

var hasMango = fruits.includes("Mango");
console.log("Mango exists:", hasMango);

var hasGrapes = fruits.includes("Grapes");
console.log("Grapes exists:", hasGrapes);
