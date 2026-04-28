/*

Topic: Fetch API (GET)

What I learned today:
- fetch() is used to get data from API
- response.json() converts data into object
*/

// Code
async function getUsers() {

  console.log("Fetching data...");

  var response = await fetch("https://jsonplaceholder.typicode.com/users");

  var data = await response.json();

  console.log(data);

}

getUsers();

// Output
// Array of user objects

// Reason
// fetch() gets data → json() converts it → console shows object
