/*
What I learned:

- getElementById selects an element using its unique id.
- It returns a single element (not a collection).
- It is one of the fastest DOM searching methods.
*/

// Selecting elements by id
var heading = document.getElementById("heading");
var para = document.getElementById("para");
var button = document.getElementById("btn");

// Accessing content
console.log(heading.innerText);
console.log(para.innerText);

// Changing content
heading.innerText = "DOM Searching with getElementById";

// Adding event
button.addEventListener("click", function () {
  para.innerText = "Button was clicked!";
});
