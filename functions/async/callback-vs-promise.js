/*
Date: Today
Topic: Callback Hell vs Promise

What I learned today:
- Callback hell is nested and messy
- Promise makes code clean and readable
*/

//////////////////////////////
// CALLBACK HELL ❌
//////////////////////////////

// Code
setTimeout(function () {
  console.log("Step 1");

  setTimeout(function () {
    console.log("Step 2");

    setTimeout(function () {
      console.log("Step 3");
    }, 1000);

  }, 1000);

}, 1000);

// Output
// Step 1
// Step 2
// Step 3

// Reason
// Nested callbacks → pyramid structure → hard to manage


//////////////////////////////
// PROMISE VERSION ✅
//////////////////////////////

function step1() {
  return new Promise(function (resolve) {
    setTimeout(function () {
      console.log("Step 1");
      resolve();
    }, 1000);
  });
}

function step2() {
  return new Promise(function (resolve) {
    setTimeout(function () {
      console.log("Step 2");
      resolve();
    }, 1000);
  });
}

function step3() {
  return new Promise(function (resolve) {
    setTimeout(function () {
      console.log("Step 3");
      resolve();
    }, 1000);
  });
}

// Code
step1()
  .then(step2)
  .then(step3);

// Output
// Step 1
// Step 2
// Step 3

// Reason
// Promise chaining removes nesting → clean flow
