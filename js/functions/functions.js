// Functions that are part of objects are called methods.

// Default parameters
function hello(name = "Chris"){
    console.log(`Hello ${name}!`);
}

// Anonymous functions and arrow functions
(function (){
    alert("Hello!");
});

/* 
/* You'll often see anonymous functions when a function expects to receive
/* another function as a parameter. In this case, the function parameter
/* is often passed as an anonymous function.
*/
    
/*
/* This form of creating a function is also called function expression. And 
/* they're not hoisted.
*/

// Anonymous function example
function lowKey(event){
    console.log(`You pressed ${event}`);
}

textBox.addEventListener("keydown", lowKey);

/* Instead of defining a separate logKey() function, you can pass an anonymous function
/* into addEventListener()
*/ 

textBox.addEventListener("keydown", function (event){
    console.log(`You pressed ${event}`);
})

// Arrow functions
/*
/* If you pass an anonymous function like this, there's an alternative
/* you can use, called an arrow function. Insted of function(event), you write
/* (event) =>
*/
textBox.addEventListener("keydown", (event) => {
    console.log(`You pressed ${event}`);
})

/*
/* If the function only takes one parameter, you can omit the parentheses
/* around the parameter.
*/
textBox.addEventListener("keydown", event => {
    console.log(`You pressed ${event}`);
})

/*
/* If your function contains only one line that's a return statement,
/* you can also omit the braces and the return keyword and implicitly
/* return the expression
*/

const originals = [1, 2, 3];
const doubled = originals.map(item => item * 2);

/* The map() method takes each item in the array in turn, 
/* passing into the given function. It then takes the value 
/* returned by that function and adds it to a new array
*/













