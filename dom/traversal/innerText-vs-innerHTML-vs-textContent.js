/*
What I learned:

- innerText:
  Returns only the visible text.
  It respects CSS (hidden text is ignored).

- textContent:
  Returns all text inside an element.
  Includes hidden text and extra spaces.

- innerHTML:
  Returns HTML + text.
  Includes tags.
*/

var box = document.getElementById("box");

console.log("innerText:", box.innerText);
console.log("textContent:", box.textContent);
console.log("innerHTML:", box.innerHTML);
