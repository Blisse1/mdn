// To support error handling, Promise objects provide a catch() method
// This is a lot like then(): you call it and pass in a handler function.
// However, while the handler passed to then() is called when the operation
// succeeds, the handler passed to catch is called when the async function operation
// fails.
const fetchPromise = fetch(
  "bad-scheme://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json",
);

fetchPromise
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
    console.error(`Couldn't not get products: ${err}`);
  })

// if you add catch() to the end of a promise chain, then it will be called
// when any of the async function calls fail
// So you can implement an operation as several consecutive async function calls
// and have a single place to handle all errors

// Promise terminology
