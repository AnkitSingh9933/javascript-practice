/*
Date: Today
Topic: Fetch API (POST)
*/

// Code
async function createUser() {

  var response = await fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      title: "Hello",
      body: "This is a test",
      userId: 1
    })
  });

  var data = await response.json();

  console.log(data);
}

createUser();

// Output
// Created object with id

// Reason
// POST sends data → server returns created object
