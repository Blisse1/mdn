// declaring variables - undefined value
let age;
let name;

// declaring and initializing
let myAge = 14;
myAge = 15;

// var - error-prone. You can declare a variable after you initialized it
// This is because of hoisting
// var declarations, wherever they occur in a script, are processed before any code within the script is executed. 
// Declaring a variable anywhere in the code is equivalent to declaring it at the top.
// declaring a variable after you initialize it results in confusing, harder to understand code.
    //
// Don't forget, comparison returns boolean
myName = "Chris"

function logName() {
    console.log(myName);
}
logName();
var myName;

// Objects

const bird = { species: "Kestrel" };
console.log(bird.species);

// You can add, remove or update properties of an object declared using const
// because even though the content of the object has changed, the constant is still
// pointing to the same object

bird.species = "Striated Caracara";


// When to use let and when to use const
// Use const when you can and use let when you have to
// If you can initialize a variable when you declare it and dont need to reassign it later
// make it a constant.
