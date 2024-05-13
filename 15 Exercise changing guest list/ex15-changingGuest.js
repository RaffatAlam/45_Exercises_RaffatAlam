/*Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.

• Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.

• Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.

• Print a second set of invitation messages, one for each person who is still in your list.

More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
• Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.*/
var guestList = ["Sir Zia", "Sir Ameen Alam", "Sir Daniyal", "Sir Aukasha"];
var dontCome = guestList[0];
console.log(dontCome, "is not coming on tonight dinner");
guestList.splice(0, 1, "Sir Kamran"); //for remove Sir Zia and add kamran tessori
guestList.forEach(function (guest) { return console.log("Assalam o Aleikum, Welcome to \n\nMr. ".concat(guest, "\n\nWould you like to Dinner tonight with me.\n\nI hope you will accept it, Thank you. ")); });
