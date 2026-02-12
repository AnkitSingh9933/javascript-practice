// Select input and output elements
const inputBox = document.getElementById("username");
const outputText = document.getElementById("output");

// Add input event listener
inputBox.addEventListener("input", function () {
  outputText.textContent = inputBox.value;
});
