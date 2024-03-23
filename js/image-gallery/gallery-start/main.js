const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */

const imgFilenames = ["pic1.jpg", "pic2.jpg", "pic3.jpg", "pic4.jpg", "pic5.jpg"];

/* Declaring the alternative text for each image file */

const altText = {
    a: "this is an alt text for pic1",
    b: "this is an alt text for pic2",
    c: "this is an alt text for pic3",
    d: "this is an alt text for pic4",
    f: "this is an alt text for pic5"
}

const altKeys = Object.values(altText); // todos los valores de un objeto en una array
console.log(altKeys)
/* Looping through images */
for(let i = 0; i < imgFilenames.length; i++){
    const newImage = document.createElement('img');
    const altKeys = Object.values(altText); // todos los valores
    console.log(altKeys[i]);
    newImage.setAttribute('src', `images/${imgFilenames[i]}`);
    newImage.setAttribute('alt', `${altKeys[i]}`);
    thumbBar.appendChild(newImage);
}

thumbBar.addEventListener("click", (e) => {
    displayedImage.setAttribute("src", e.target.attributes.src.nodeValue);
    displayedImage.setAttribute("alt", e.target.attributes.alt.nodeValue);
})


/* Wiring up the Darken/Lighten button */
