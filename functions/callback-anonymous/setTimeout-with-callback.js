/*


What I learned today:
- setTimeout uses callback function.
- Callback runs after delay is completed.
*/

function greet() {
  console.log("Hello after delay");
}

setTimeout(greet, 3000);
