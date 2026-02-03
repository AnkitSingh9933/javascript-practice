/*

Topic: DOM createElement

What I learned today:
- createElement is used to create a new HTML element using JavaScript.
- The element is created in memory first.
- appendChild is used to add the element into the DOM.
*/

var button = document.getElementById("btn");

button.addEventListener("click", function () {
  // Create new element
  var para = document.createElement("p");

  // Add text to element
  para.innerText = "This paragraph is created using createElement";

  // Add element to body
  document.body.appendChild(para);
});
