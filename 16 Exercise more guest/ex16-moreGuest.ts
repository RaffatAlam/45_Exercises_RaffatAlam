/*More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
• Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.

• Add one new guest to the beginning of your array.

• Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.*/

let guestList = ["Sir Ameen", "Sir Daniyal", "Sir Zia"];

let notCome = guestList["0"];

console.log(notCome , "is not coming in tonight dinner, he is busy.");

guestList.splice( 0 , 1 , "Sir Kamran Tessori");

console.log(" Good News! We arrange big table so we invite 3 more guests.");

guestList.unshift("Sir Hamza");

guestList.push("Ma'am Hina");

guestList.splice( 2, 0, "Assitant of Sir Zia" );

console.log("Updated All Guest List");

guestList.forEach(oneguest => console.log(` Assalam-O-Aleikum, how are you all,\n\nMr. ${oneguest}\n\nWould you like to Dinner tonight with me.\n\n, I hope you will consider it. Thankyou!\n\n `));