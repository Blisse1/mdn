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


// Exiting loops with break
// A break statement will immediately exit the loop and make the browser
// move on to any code that follows it

const contacts = [
    "Chris:123",
    "Sarah:456",
    "Bill:789",
    "Mary:999",
    "Dianne:888",
];

const para = document.querySelector("p");
const input = document.querySelector("input");
const btn = document.querySelector("button");

btn.addEventListener("click", () => {
    const searchName = input.value.toLowerCase();
    input.value = "";
    input.focus();
    para.textContent = "";

    for(const contact of contacts){
        const splitContact = contact.split(":");
        if(splitContact[0].toLowerCase() === searchName){
            para.textContent  = `${splitContact[0]}'s number is ${splitContact[1]}`
            break;
        }
    }
    if(para.textContent  === ""){
        para.textContent = "Contact not found.";
    }
});


// Skiping iterations with continue

for(let i = 1; i <= num; i++){
    let sqRoot = Math.sqrt(i);
    if(Math.floor(sqRoot) !== sqRoot){
        continue;
    }
    para.textContent += `${i} `;
}

// If the square root and rounded down square root do not equal one another
// it means that the square root is not an integer, so we are not interested on it.
// in such a case, we use continue statement to skip on the next loop iteration
// without recording the number anywhere
// But if it is square root, we skip past the if completely so the continue
// statement is not executed. instead we concatenate the current i value plus a space
// at the end of the paragraph content

// while and do while
//
// while loop structure
//
// initializer
// while(condition){
    // final-expression
// }

// do while
// initializer
// do{
// final-expression
//}while(condition)

// The main difference between a do...while and a while loop is that
// the code inside a do while loop is always executed at least once
// In while and for loops the check comes first so the code might never be
// executed
//
// You must make sure that the initializer is incremented or decremented
// so the condition becomes eventually false. 

// Which loop should you use?
// If you're iterating through an array or some other object that supports it
// and don't need to access the index position of each item, then the for...of
// is the best choice. 

// For other uses, for, while and do...while loops are largely interchangeable
// depends on your personal preference. And mdn recommends the for.
