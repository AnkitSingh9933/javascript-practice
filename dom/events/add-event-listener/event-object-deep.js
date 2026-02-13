/*

Topic: Event Object (event.target vs this)

What I learned today:
- The event object contains information about the event.
- event.target gives the exact element that was clicked.
- this refers to the element that the event listener is attached to.
*/

var buttons = document.querySelectorAll(".btn");

buttons.forEach(function (btn) {

  btn.addEventListener("click", function (event) {

    console.log("event.target:", event.target);
    console.log("this:", this);

    console.log("Button Text:", event.target.innerText);

  });

});
