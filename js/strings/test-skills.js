// Strings I
const quoteStart = 'Don\'t judge each day by the harvest you reap ';
const quoteEnd = 'but by the seeds that you plant.';
const finalQuote = `${quoteStart}${quoteEnd}`;

// Strings II
const quote = 'I do not like green eggs and ham. I do not like them, Sam-I-Am.';
const substring = 'green eggs and ham';

// Add your code here
const quoteLength = quote.length;
const index = quote.indexOf(substring);
let q = quote.indexOf(".");
let revisedQuote = quote.slice(0, q)

// let revisedQuote = quote.slice(0, index + substring.length)
//
// Strings III

let firstLetterUpperCased = quote[0].toUpperCase();
let quoteLowerCased = quote.slice(1).toLowerCase();
let fixedQuote = firstLetterUpperCased + quoteLowerCased.replace("green eggs and ham", "pasta");
let finalQuote = `${fixedQuote}.`

// Strings IV
const theorem = 'Pythagorean theorem';

const a = 5;
const b = 8;

const myString = `Using ${theorem}, we can work out that that if the two shortest sides of a right-angled triangle have lengths of ${a} and ${b}, the length of the hypotenuse is ${Math.sqrt(a ** 2 + b ** 2)}.`;
