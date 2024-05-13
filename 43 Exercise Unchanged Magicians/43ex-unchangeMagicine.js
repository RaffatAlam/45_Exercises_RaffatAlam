/*43.Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name*/
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var magicians = ['Harry Poter', 'Hermione Granger', 'Ron weasley', 'Albus dumbledore'];
function copyOfArray(cArray) {
    return __spreadArray([], cArray, true);
}
function make_great(arraymagician) {
    for (var i = 0; i < arraymagician.length; i++) {
        arraymagician[i] = 'The great ' + arraymagician[i];
    }
}
function show_magicians(magician) {
    magician.forEach(function (jadugar) {
        console.log(jadugar);
    });
}
var copyArray = copyOfArray(magicians);
make_great(copyArray);
console.log("\nThis is my orignal Array.");
show_magicians(magicians);
console.log("\n\nThis is my modified copy of Array.");
show_magicians(copyArray);
