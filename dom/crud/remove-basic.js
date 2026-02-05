/*

Topic: DOM remove()

What I learned today:
- remove() directly removes an element.
- It is a modern and simple way to delete elements.
*/

var button = document.getElementById("btn");
var item = document.getElementById("removeMe");

button.addEventListener("click", function () {
  item.remove();
});
