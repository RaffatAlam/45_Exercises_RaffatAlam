/*More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
• Tests for equality and inequality with strings

• Tests using the lower case function

• Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to

• Tests using "and" and "or" operators

• Test whether an item is in a array

• Test whether an item is not in a array*/
var myName = "Raffat Alam";
console.log(myName == "Raffat Alam"); //true
console.log(myName !== "raffat alam"); //true
var myNumber = 15;
console.log(myNumber == 15); //true
console.log(myNumber == 15); //true
console.log(myNumber > 5); //true
console.log(myNumber < 15); //false
console.log(myNumber <= 15); //false
console.log(myNumber >= 15); //true
var num1 = 20;
var num2 = 10;
console.log(num1 > 9 && num2 < 10); //false
// true state     false state
console.log(num1 > 9 || num2 < 5); //true
//true       false
var myArray = [2, 3, "Raffat ALam"];
var myString = "Alam";
console.log(Array.isArray(myArray)); //true
console.log(Array.isArray(myString)); //false
