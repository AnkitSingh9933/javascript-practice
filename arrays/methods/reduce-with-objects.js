/*

Topic: reduce() with array of objects

What I learned today:
- reduce() can extract and combine object properties.
*/

var cart = [
  { item: "Book", price: 200 },
  { item: "Pen", price: 50 },
  { item: "Bag", price: 500 }
];

var totalPrice = cart.reduce(function (acc, product) {
  return acc + product.price;
}, 0);

console.log("Total Price:", totalPrice);
