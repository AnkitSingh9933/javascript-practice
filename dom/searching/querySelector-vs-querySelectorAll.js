/*
What I learned:

- querySelector returns the FIRST matching element.
- querySelectorAll returns ALL matching elements as a NodeList.
- NodeList can be looped using forEach.
*/

// querySelector (first match only)
var firstPara = document.querySelector(".text");
console.log("querySelector:", firstPara.innerText);

// querySelectorAll (all matches)
var allParas = document.querySelectorAll(".text");
console.log("querySelectorAll:", allParas);
console.log("Total elements:", allParas.length);

// Loop through NodeList
allParas.forEach(function (para, index) {
  para.style.color = "blue";
  para.innerText = "Paragraph " + (index + 1) + " updated";
});

// Single element example
var button = document.querySelector("#btn");
button.addEventListener("click", function () {
  alert("Button clicked");
});
