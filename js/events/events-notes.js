/*
/* They recommend using addEventListener to register event handlers
/* However there are other ways of registering event handlers
/* event handler properties and inline event properties
*/

// Event handler properties

btn.onclick = () => {
    const rndCol = `rgb(${random(255)} ${random(255)} ${random(255)})`
    document.body.style.backgroundColor = rndCol;
}

// also setted to a named function
btn.onclick = bgChange;

// Using event handler properties you can't add more than one handler for a single event
element1 = function1;
element1 = function2;

/*
/* Inline event handlers (don't use these)
/* <button onclick="bgChange()">Press Me</button>
/* you should never use the HTML event handler attributes.
*/

// Add an event handler function to all buttons on a page
const buttons = document.querySelectorAll("button");

for(const button of buttons){
    button.addEventListener("click", bgChange);
}

// Event Objects
// Sometimes, inside an event handling function, you'll see a parameter
// specified with a name such as event, evt, or e. 
// This is called event object, and it is automatically passed to event handlers
// to provide extra features and information

const btn = document.querySelector("button");

function random(number){
    return Math.floor(Math.random() * (number + 1));
}

function bgChange(e){
    const rndCol = `rgb(${random(255)} ${random(255)} ${random(255)})`;
    e.target.style.backgroundColor = rndCol;
    // the target property of the event object is always a reference to the element
    // the event ocurred upon. We're setting a random background color on the button
    // not the page.
    console.log(e);
}

btn.addEventListener("click", bgChange);

/*
/* Extra properties of event objects
/* keydown event fires when the user presses a key. Its event object
/* is a keyboardevent, which is a specialized Event object with a key property
/* that tells you which key was pressed
*/

// html
// <input id="textBox" type="text">
// <div id="output"></div>

const textBox = document.querySelector("#textBox");
const output = document.querySelector("#output");

textBox.addEventListener("keydown", (e) => {
   output.textContent = `You pressed "${e.key}"` ;
})

// Preventing default behavior
// the submit event is fired on a form when it is submitted
//
// Event bubbling

// The event object has a function available on it called stopPropagation()
// which, when called inside an event handler, prevents the event from bubbling up
// to any other elements.

// Sabemos que el video es el que está presentando el comportamiento de bubbling
// porque al darle click para reproducirlo, también lo encondemos.
// Esto pasa porque el elemento video está dentro de un div con class hidden
// Así que al darle click para reproducirlo, lo escondemos debido al bubbling.

const btn = document.querySelector("button");
const box = document.querySelector("div");
const video = document.querySelector("video");

btn.addEventListener("click", () => box.classList.remove("hidden"));
video.addEventListener("click", () => video.play());
box.addEventListener("click", () => box.classList.add("hidden"));

// La clave está en usar el evento del elemento que está causando el bubbling
// y llamar la función stopPropagation() para evitar que suba y afecte otros elementos.

video.addEventListener("click", (e) => {
    e.stopPropagation();
    video.play();
})

// Event capture
// An alternative form of event propagation is event capture. 
// This is like event bubbling but the order is reversed.
// The event fires on the least nested element and then on successively
// more nested elements, until the target is reached.

// Buble example order:
document.body.addEventListener("click", handleClick); 
container.addEventListener("click", handleClick);
button.addEventListener("click", handleClick);

// You clicked on a BUTTON element
// You clicked on a DIV element
// You clicked on a BODY element

// Example with event capture
document.body.addEventListener("click", handleClick, {capture: true});
container.body.addEventListener("click", handleClick, {capture: true});
button.body.addEventListener("click", handleClick);

// You clicked on a BODY element
// You clicked on a DIV element
// You clicked on a BUTTON element

// By default almost all event handlers are registered in the bubbling phase.

// Event delegation

/* Event bubbling enables event delegation
/* In this practice, when we want some code to run when the user interacts
/* with any one of a large number of child elements, we set the event listener
/* on their parent and have events that happen on them bubble up to their parent element
/* rather than having to set the event listener on every child individually.
*/


