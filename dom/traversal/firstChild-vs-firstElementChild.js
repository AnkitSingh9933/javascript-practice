/*
What I learned from this example:

- firstChild:
  Returns the first child node of an element.
  It can be a text node (spaces, new lines),
  comments, or an element.

- firstElementChild:
  Returns only the first HTML element.
  It ignores text nodes, spaces, and comments.

Conclusion:
firstElementChild is more reliable when we want
actual HTML elements.
*/

var box = document.getElementById("box");

// firstChild includes text nodes (spaces, new lines)
console.log("firstChild:", box.firstChild);

// firstElementChild returns only the first HTML element
console.log("firstElementChild:", box.firstElementChild);
