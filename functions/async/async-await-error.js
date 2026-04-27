/*

Topic: Async Await Error Handling

What I learned today:
- try/catch is used to handle errors in async/await
*/

function getError() {
  return new Promise(function (resolve, reject) {
    reject("Something went wrong");
  });
}

async function fetchData() {
  try {
    var result = await getError();
    console.log(result);
  } catch (error) {
    console.log(error);
  }
}

fetchData();

// Output
// Something went wrong

// Reason
// reject() is handled using catch block
