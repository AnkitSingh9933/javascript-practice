/*

Topic: DOM classList

What I learned today:
- classList is used to manage CSS classes.
- add() adds a class.
- remove() removes a class.
- toggle() adds/removes class automatically.
*/

var title = document.getElementById("title");

document.getElementById("add").addEventListener("click", function () {
  title.classList.add("active");
});

document.getElementById("remove").addEventListener("click", function () {
  title.classList.remove("active");
});

document.getElementById("toggle").addEventListener("click", function () {
  title.classList.toggle("active");
});
