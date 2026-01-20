/*
What I learned:

- nextElementSibling:
  Returns the next HTML element at the same level.
  It ignores text nodes and spaces.

- previousElementSibling:
  Returns the previous HTML element at the same level.
  It ignores text nodes and spaces.
*/

var middlePara = document.getElementById("middle");

// Next element
console.log("nextElementSibling:", middlePara.nextElementSibling);

// Previous element
console.log("previousElementSibling:", middlePara.previousElementSibling);
