// A promise in JS is an object returned by an asynchoronous function, which represents
// the current state of the operation. At the time the promise is returned to the caller
// the operation often isn't finished, but the promise object provides methods to handle
// the eventual success or failure of the operation
//

// With an promise-based API, the async function starts the operation and returns
// a Promise object. You can then attach handlers to this promise object, and this handlers
// will be executed when the operation has succeeded or failed

// fetch() API is the modern, promise-based replacement for XMLHttpRequest

const fetchPromise = fetch("https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json");
console.log(fetchPromise);
// fetchPromise.then((response) => {console.log(`Received response: ${response.status}`)});
console.log("Started request...");

// Chaining promises
// With the fetch() API, once you get a response object, you need to call another function
// to get the response data. In this case, we want to get the response data as JSON
// so we would call the json() method of the Response object. json() is also async

// fetchPromise.then((response) => {
//     const jsonPromise = response.json();
//         console.log(data[0].name);
//     jsonPromise.then((data) => {
//     })
// });

// the elegant feature of promises is that then() itself returns a promise
// which will be completed with the result of the function passed to it
// This means that we can (and certainly should) rewrite the above code like this:
//
// fetchPromise
//     .then((response) => response.json())
//     .then((data) => {
//         console.log(data[0].name);
//     });
//
    // instead of calling the second then() inside the handler for the first then()
// we can return the promise returned by json() and call the second then()
// on that return value
// This is called promise chaining and means we can avoid ever-increasing
// levels of indentation when we need to make consecutive asynchoronous function calls

// We need to check that the server accepted and was able to handle the request
// before we try to read it
//

    fetchPromise
    .then((response) => {
        if(!response.ok){
            throw new Error(`HTTP error: ${response.status}`);
        }
        return response.json();
    }) 
    .then((data) => {
        console.log(data[0].name);
    });

/* To support error handling, Promise objects provide a catch() method
/* This is a lot like then(): you call it and pass in a handler function.
/* However, while the handler passed to then() is called when the operation
/* succeeds, the handler passed to catch is called when the async function operation
fails
*/ 

    const fetchPromise5 = fetch(
        "bad-scheme://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json",
    );

fetchPromise5
    .then((response) => {
        if (!response.ok) {
            throw new Error(`HTTP error: ${response.status}`);
        }
        return response.json();
    })
    .then((data) => {
        console.log(data[0].name);
    })
    .catch((err) => { 
        console.error(`Couldn't not get products 5: ${err}`);
    })

/*
/* if you add catch() to the end of a promise chain, then it will be called
/* when any of the async function calls fail
/* So you can implement an operation as several consecutive async function calls
/* and have a single place to handle all errors
*/

// Promise terminology
// States of a promise
// A promise can be in two states
//
// Pending: the promise has been created, and the asynchronous function
// it's associated with has not succeeded or failed yet. This is the state
// your promise is in when it's returned from a call to fetch() and the request
// is still being made

// Fulfilled: the async function has succeeded. When a promise is fulfilled
// it's then() handler is created.

// Rejected: the async function has failed. When a promise is rejected
// it's catch() handler is called.

// Note that succeeded or failed means here is up to the API in question
// For example, fetch() rejects and returns promise if (among other reasons)
// a network error prevented the request being sent, but fulfills the promise
// if the server sent a response even if the response was an error like 404 Not Found

// Sometimes, we use the term settled to cover both fulfilled and rejected
// A promise is resolved if it is settled, or if it has been locked in to follow the state
// of another promise

// Combining multiple promises
// The promise chain is what you need when your operation consists of several async functions
// and you need each one to complete before starting the next one.

// Sometimes, you need all the promises to be fulfilled, but they don't depend on each other
// In a case like that, it's much more efficient to start them all off together, then be
// notified when they have all fulfilled. The Promise.all() method is what you need here
// It takes an array of promises and returns a single promise

// The promise returned by Promise.all() is
// fulfilled when and if all the promises in the array are fulfilled. In this case, the then()
// handler is called with an array of all responses, in the same order that the promises
// were passed into all()

// rejected when if any of the promises in the array are rejected. In this case, the catch()
// handler is called with the error thrown by the promise that was rejected

/* For example */

    const fetchPromise1 = fetch(
        "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json"
    );

const fetchPromise2 = fetch(
    "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/not-found"
);

const fetchPromise3 = fetch(
    "https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json"
);

Promise.all([fetchPromise1, fetchPromise2, fetchPromise3])
    .then((responses) => {
        for(const response of responses){
            console.log(`${response.url} ${response.status}`)
        }
    })
    .catch((err) => {
        console.error(`Failed to fetch: ${err}`);
    });
// If it is bad formatter the catch will be triggered. If it's ok but the resource couldnt
// be found we'll get a response from the server
// For example this one will trigger the catch:

// const fetchPromise3 = fetch(
//     "bad-scheme://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json"
// );

// Sometimes you might need any one of a set of promises to be fulfilled and don't care which one
// In that case, you want Promise.any()
// We can't predict which fetch request will complete first
//

// async and await
// The async keyword gives you a simpler way to work with async promise-based code.
// Adding async at the start of a function makes it an async function

async function myFunction(){
    
}

// Inside an async function, you can use await keyword before a call to a function
// that returns a promise. This makes the code wait at that point until the promise is
// settled, at which point the fulfilled value of the promise is treated as a return value
// or the rejected value is thrown

// This enables you to write code that uses async functions 
// but looks like sync code.

    async function fetchProducts() {
        try{
            // after this line, our function will wait for the fetch() call to be settled
            // the fetch() call will either return a Response or throw an error
            const response = await fetch(
               "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json" 
            );
            if(!response.ok){
               throw new Error(`HTTP Error: ${response.status}`);
            }
            // after this line, our function will wait for the response.json() call to be settled
            // the response.json() all will either return the parsed json object or throw an error

            const data = await response.json();
            console.log(data)
        } catch(err){
            console.error(`Couldn't not get products: ${err}`);
        }
    }
fetchProducts();

// Here, we are calling await fetch() and instead of getting a Promise, our caller gets back a 
// fully complete Response object, just as if fetch() were a sync function.

const promise = fetchProducts();
console.log(promise[0].name)
// You can't do something like because "promise" is a promise object

const promise2 = fetchProducts();
promise2.then((data) => console.log(data[0].name))
// Instead you'd need to do something like this:

// You can only use await inside an async function, unless your script is in a
// JS module
// You'll probably use async functions a lot where you might otherwise use promise chains
// and they make working with promises so much more intuitive
// Keep in mind that just like a promise chain, await forces asynchronous operations to be completed in series.
// This is necessary if the result of the next operation depends on the result of the last one,
// but if that's not the case then something like Promise.all() will be more performant.
