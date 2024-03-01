// JS has only one type for numbers, Number and BigInt.
// Number is an object
//
const myInt = 5;
const myFloat = 6.667;

console.log(typeof myInt);
console.log(typeof myFloat);

const lotsOfDecimal = 1.766584958675746364;

const twoDecimalPlaces = lotsOfDecimal.toFixed(2); 
// toFixed turns the number into a string

console.log(typeof twoDecimalPlaces + twoDecimalPlaces);

// Be cautious with data that is entered into a form input
// and the input type is text
//
let myNumber = "74";
myNumber = Number(myNumber) + 3;

console.log(myNumber)

// Exponent
// Math.pow() is older

let myExponent = 5 ** 2;
console.log(myExponent);

// Operator precedence
// Multiply and divide and divide always first
// then add and substract, from left to right
//
// To override operator precedence
// you can put parentheses around the parts
// that you want to be explicitly deal with first

// let example = (num2 + num1) / (8 + 2);

// Increment and decrement operators

let num1 = 4;
num1++;
console.log(num1);

// This operation will return 4. Because the browser
// returns the current value and then increments the value

// remember that comparison returns boolean
