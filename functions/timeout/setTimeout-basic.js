/*

Topic: setTimeout (Basic)

What I learned today:
- setTimeout runs code after a given time delay.
- Delay time is in milliseconds.
- setTimeout does NOT block the execution.
*/

console.log("Start");

setTimeout(function () {
  console.log("This runs after 2 seconds");
}, 2000);

console.log("End");
