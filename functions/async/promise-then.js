/*

Topic: Promise .then()
*/

// Code
var promise = new Promise(function(resolve) {
  resolve("Data received");
});

promise.then(function(data) {
  console.log(data);
});

// Output
// Data received

// Reason
// .then() runs when promise is resolved
