/*

Topic: Promise Basic

What I learned today:
- Promise has 3 states: pending, resolved, rejected
*/

// Code
var myPromise = new Promise(function(resolve, reject) {

  var success = true;

  if (success) {
    resolve("Promise Resolved");
  } else {
    reject("Promise Rejected");
  }

});

console.log(myPromise);

// Output
// Promise { fulfilled: "Promise Resolved" }

// Reason
// success = true → resolve() called → promise fulfilled
