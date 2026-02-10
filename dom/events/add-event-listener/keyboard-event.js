/*

Topic: addEventListener (keydown)

What I learned today:
- keydown detects keyboard press.
- event.key gives the pressed key.
*/

document.addEventListener("keydown", function (event) {
  console.log("Key pressed:", event.key);
});
