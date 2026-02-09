/*

Topic: addEventListener (click)

What I learned today:
- addEventListener listens to user actions.
- click event runs when user clicks an element.
*/

var btn = document.getElementById("btn");

btn.addEventListener("click", function () {
  console.log("Button clicked");
});
