// Looping through a collection

// for ... of (arrays)

const cats = ["Leopard", "Serval", "Jaguar", "Tiger"];

for(const cat of cats){
   console.log(cat);
}

// map() and filter()

/* map()
/*
/* You can use map() to do something to each item in a collection
/* and create a **new** collection containing the changed items
/*
*/

function toUpper(string){
    return string.toUpperCase();
}

const cats2 = ["Leopard", "Serval", "Jaguar", "Tiger", "Caracal", "Lion"];

const upperCats = cats2.map(toUpper);

console.log(upperCats);

/* filter()
/*
/* You can use filter() to test each item in a collection, and
/* create a new collection containing only items that match
/*
*/

function lCat(cat){
    return cat.startsWith("L");
}

const cats3 = ["Leopard", "Serval", "Jaguar", "Tiger", "Caracal", "Lion"];

const filtered = cats3.filter(lCat);

console.log(filtered)

/*
/* This looks a lot like map(), except the function we pass in returns a boolean
/* if it returns true, then the item is included in the new array.
*/

/*
/* Both map() and filter() are often used with function expressions.
*/

const cats6 = ["Leopard", "Serval", "Jaguar", "Tiger", "Caracal", "Lion"];

const filtered2 = cats.filter((cat) => cat.startsWith("L"));

// Standard for loop
// When you want just to run the same code x times you could use for loop

for(let i = 1; i < 10; i++) {
    const newResult = `${i} x ${i} = ${i * i}`;
    console.log(newResult);
}

// Looping through collections

for(let i = 0; i < cats.length; i++){
    console.log(cats[i]);
}

// However it offers more chances to introduce bugs into your code
// It's usually best to use for...of

