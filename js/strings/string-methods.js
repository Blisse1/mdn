const string = "This is my string";
// Your variable becomes a string object instance.

// Length of an array; .length
const browserType = "mozilla";
browserType.length;

// Retrieve the last character of any string
browserType[browserType.length - 1];

// Test if a string contains a substring; .includes()

if(browserType.includes("zilla")){
    console.log("Found zilla!");
}else {
    console.log("No zilla here");
}

// If a string starts or ends with a particular substring; startsWith(), endsWith()

if(browserType.startsWith("zilla")){
    console.log("Found zilla!");
}else {
    console.log("No zilla here");
}

if(browserType.endsWith("zilla")){
    console.log("Found zilla!");
}else {
    console.log("No zilla here");
}

// Finding the position of a substring in a string; indexOf()
// returns -1 if the substring is not present in the string

const tagLine = "MDN - Resources for developers by developers";
console.log(tagLine.indexOf("x"));

// How to find subsequent ocurrences

const firstOccurrence = tagLine.indexOf("developers");
const secondOccurrence = tagLine.indexOf("developers", firstOccurrence + 1);
console.log(firstOccurrence);
console.log(secondOccurrence);

// Extracting a substring from a string; slice()

const browserType2 = "mozilla";
console.log(browserType2.slice(1, 4));

// extract all the remaining characters in a string after a certain character
// remember that slice doesnt count the last character but the first one

console.log(browserType2.slice(2)) // zilla

// Changing the case; toLowerCase(), toUpperCase()

const radData = "My NaMe is mUD";
console.log(radData.toLowerCase());
console.log(radData.toUpperCase());

// Updating parts of a string; replace()
// You can replace one substring inside a string with another substring
// Replace doesnt change the string it was called on but returns a new string

let myBrowser = "chrome";
let updated = myBrowser.replace("chrome", "firefox");

console.log(updated);
console.log(myBrowser);

// If you want to update the original myBrowser type variable:

myBrowser = updated;
console.log(myBrowser);

// Replace only changes the first occurrence of the substring
// If you want to change all occurrences, you can use; replaceAll()

let quote = "To be or not to be";
quote = quote.replaceAll("be", "code");

console.log(quote)
