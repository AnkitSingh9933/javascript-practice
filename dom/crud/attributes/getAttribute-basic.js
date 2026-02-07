/*

Topic: DOM getAttribute

What I learned today:
- getAttribute() reads the value of an HTML attribute.
- It returns the attribute value as a string.
*/

var title = document.getElementById("title");
var getBtn = document.getElementById("get");

getBtn.addEventListener("click", function () {
  var className = title.getAttribute("class");
  console.log(className);
});
