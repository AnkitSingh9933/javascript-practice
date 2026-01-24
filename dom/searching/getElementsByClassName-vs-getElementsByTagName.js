/*
What I learned:

- getElementsByClassName selects elements using class name.
- getElementsByTagName selects elements using tag name.
- Both return HTMLCollection (not an array).
*/

// Using getElementsByClassName
var classElements = document.getElementsByClassName("text");
console.log("Class elements:", classElements);
console.log("First class element:", classElements[0].innerText);

// Using getElementsByTagName
var tagElements = document.getElementsByTagName("p");
console.log("Tag elements:", tagElements);
console.log("First tag element:", tagElements[0].innerText);

// Changing style using loop
for (var i = 0; i < classElements.length; i++) {
  classElements[i].style.color = "blue";
}
