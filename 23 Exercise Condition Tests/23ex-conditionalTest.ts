/*Conditional Tests: Write a series of conditional tests. Print a statement describing each test and your prediction for the results of each test. Your code should look something like this:

let car = 'subaru';

console.log("Is car == 'subaru'? I predict True.")

console.log(car == 'subaru')

• Look closely at your results, and make sure you understand why each line evaluates to True or False.

• Create at least 10 tests. Have at least 5 tests evaluate to True and another 5 tests evaluate to False.*/

// Write a series of conditional

//test NO: 1
let car : string = 'subaru'
console.log('car == "subaru"? i predict true.');
console.log(car == 'subaru');

//test No: 2
console.log('car === "subaru"? i predict true.');
console.log(car === 'subaru');

//test No:3
console.log('car != "bus"? i predict true.');
console.log(car != 'bus');

//test No: 4
console.log('car != "cycle"? i predict true.');
console.log(car != 'cycle');

//test No: 5
console.log('car greater then "motor cycle"? i predict true.');
console.log(car > 'motor cycle');

//test No: 6
console.log('car less then "motor cycle"? i predict false.');
console.log(car < 'motor cycle');

//test No: 7
console.log('car equal "motor cycle"? i predict false.');
console.log(car == 'motor cycle');

//test No:8
let motorCycle :string = "motorCycle"
console.log('motorcycle greater then "car"? i predict false.');
console.log(motorCycle == 'car');

//test No: 9
console.log('car equal "train"? i predict false.');
console.log(car == 'train');

//test No: 10
console.log('car equal "car"? i predict false.');
console.log(car == 'car');