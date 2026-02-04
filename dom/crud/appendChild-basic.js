/*

Topic: DOM appendChild

What I learned today:
- appendChild is used to insert a node into the DOM.
- It always adds the element at the end.
- appendChild works with nodes created using createElement.
*/

var button = document.getElementById("btn");
var list = document.getElementById("list");

button.addEventListener("click", function () {
  // Create list item
  var li = document.createElement("li");

  // Add text
  li.innerText = "New Item added using appendChild";

  // Append to ul
  list.appendChild(li);
});
