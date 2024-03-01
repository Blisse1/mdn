// // Concatenation in context
// const button = document.querySelector("button");

// function greet() {
//     const name = prompt("What is your name?");
//     const greeting = document.querySelector("#greeting");
//     greeting.textContent = `Hello ${name}, nice to see you!`;
// }

// button.addEventListener("click", greet);

// Including expressions in strings

const song = "Fight the Youth";
const score = 9;
const highestScore = 10;
const output = `I like the song ${song}. I gave it a score of ${(score / highestScore) * 100}%.`;
console.log(output);

// Multiline strings
// Template literals respect the line breaks in the source code.

const newLine = `One day you finally knew
what you had to do, and began.`;
console.log(newLine);

// To do the same using a normal string

const secondNewLine = "One day you finally knew\n what you had to do and began.";
console.log(secondNewLine);

// Including quotes in strings

let goodQuotes1 = 'She said "I think so"';
console.log(goodQuotes1);

// Using scape

const bigMouth = "I\'ve got no right to take my place..."
console.log(bigMouth);

// Numbers vs Strings

const myName = "Alfred"
const number = 41;
console.log(myName + number);

// string + number = string;

// String to number
const myString = "123";
const myOtherNum = Number(myString);
console.log(typeof myOtherNum); // number

// Number to string
const myOtherNumber = 123;
const myOtherString = String(myOtherNumber);

console.log(typeof myOtherString)
