/*

Topic: Promise .catch()
*/

// Code
var promise = new Promise(function(resolve, reject) {
  reject("Error occurred");
});

promise
  .then(function(data) {
    console.log(data);
  })
  .catch(function(error) {
    console.log(error);
  });

// Output
// Error occurred

// Reason
// reject() triggers catch()
