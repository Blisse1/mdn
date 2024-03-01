// Math I
let myFavNumber = 7;
let covidEra = 2020;
let pambeleTitle = 1972;
let yearOfBirth = 2002;

let sumFavNumCovid = myFavNumber + covidEra;
let subPambeleBirth = yearOfBirth - pambeleTitle;
let finalResult = sumFavNumCovid * subPambeleBirth;

let evenOrOdd = finalResult % 2; // 0 for even, 1 for odd
console.log(evenOrOdd);

// Math II

let result = 7 + 13 / 9 + 7;
let result2 = 100 / 2 * 6;
result *= result2
let finalResult1 = +result.toFixed(2);
let finalNumber = finalResult1;


// Math III
// Statement 1: The elephant weighs less than the mouse
const eleWeight = 1000;
const mouseWeight = 2;

// Statement 2: The Ostrich is taller than the duck
const ostrichHeight = 2;
const duckHeight = 0.3;

// Statement 3: The two passwords match
const pwd1 = 'stromboli';
const pwd2 = 'stROmBoLi';

// Add your code here
let weightComparison = eleWeight < mouseWeight;
let heightComparison = ostrichHeight > duckHeight;
let pwdMatch = pwd1 === pwd2;
