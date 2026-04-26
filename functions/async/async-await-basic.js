/*

Topic: Async Await (Basic)

What I learned today:
- async function always returns a promise
- await pauses execution until promise resolves
*/

// Promise function
function getData() {
  return new Promise(function (resolve) {
    setTimeout(function () {
      resolve("Data received");
    }, 2000);
  });
}

// Async function
async function fetchData() {

  console.log("Start");

  var result = await getData();

  console.log(result);

  console.log("End");
}

fetchData();

// Output
// Start
// Data received
// End

// Reason
// await pauses execution until promise resolves
