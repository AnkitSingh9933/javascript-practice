/*

Topic: Callback Hell

What I learned today:
- Callback hell happens when callbacks are nested deeply
- Code becomes hard to read and maintain
*/

// Code
setTimeout(function () {
  console.log("Step 1");

  setTimeout(function () {
    console.log("Step 2");

    setTimeout(function () {
      console.log("Step 3");

      setTimeout(function () {
        console.log("Step 4");
      }, 1000);

    }, 1000);

  }, 1000);

}, 1000);

// Output
// Step 1
// Step 2
// Step 3
// Step 4

// Reason
// Each step waits for previous step → nested callbacks
