/*42.Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified*/
var magicians = ['Harray Poter', 'Hermione Granger', 'Ron weasley', 'Albus dumbledore'];
function make_magicians(arraymagician) {
    for (var i = 0; i < arraymagician.length; i++) {
        magicians[i] = 'The great ' + arraymagician[i];
    }
}
function show_magicians(magician) {
    magicians.forEach(function (jadugar) {
        console.log(jadugar);
    });
}
make_magicians(magicians);
show_magicians(magicians);
