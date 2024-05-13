/*Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
• Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.

• Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.

• Print a message to each of the two people still on your list, letting them know they’re still invited.

• Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.*/

let guestList = ["Sir Daniyal Naghori", "Sir Ameen Alam", "Sir Zia Khan"];

let notCome = guestList["0"];

console.log(notCome , "is not coming in our dinner. he is busy.");

guestList.splice( 0 , 1 , "Sir Kamran Tessori");

console.log(" Good News! We arrange big table so we invite 3 more guests.");

guestList.unshift("Sir Hamza");

guestList.push("Ma'am Hina");

guestList.splice( 2, 0, "Sir Sufiyan" );

console.log("Updated All Guest List");

guestList.forEach(oneguest => console.log(` Asalam-O-Aleikum\n\nMr. ${oneguest}\n\nWould you like to Dinner with me.\n\nThankyou!\n\n `));

console.log("Unfortunatly, Sorry to say we can't arrange big table so we invite only two guests.\n\n");

while(guestList.length >2 ) {
let removeguest =guestList.pop();
console.log(`Sorry ${removeguest}, you can't participate our dinner." due to can't arrived big table.\n\n `);
}
 
console.log(guestList, "luckly you are still invited in our dinner.\n\n");

guestList.splice(0,2) ;
console.log("empty list:",guestList);
console.log('\nProgram is cancelled. nothing is remainning. ye to gaya program');