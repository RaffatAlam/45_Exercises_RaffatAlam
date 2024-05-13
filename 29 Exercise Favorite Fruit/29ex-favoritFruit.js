/*Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements that check for certain fruits in your array.
• Make a array of your three favorite fruits and call it favorite_fruits.

• Write five if statements. Each should check whether a certain kind of fruit is in your array. If the fruit is in your array, the if block should print a statement, such as You really like bananas!*/
var favoriteFruits = ["Mango", "AOrange", "Graps"];
if (favoriteFruits.includes("Mango")) {
    console.log("I like so much Mango");
}
else if (favoriteFruits.includes("Orange")) {
    console.log("I like so much Orange");
}
else if (favoriteFruits.includes("Graps")) {
    console.log("I like so much Graps");
}
else {
    console.log("fruits are not available!!!!!!!");
}
