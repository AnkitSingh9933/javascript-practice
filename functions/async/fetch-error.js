/*

Topic: Fetch API Error Handling
*/

// Code
async function getData() {

  try {
    var response = await fetch("https://invalid-url");

    var data = await response.json();

    console.log(data);

  } catch (error) {
    console.log("Error:", error);
  }

}

getData();

// Output
// Error: TypeError

// Reason
// Invalid URL → fetch fails → catch block runs
