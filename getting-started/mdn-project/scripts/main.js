const myImage = document.querySelector("img");
const myButton = document.querySelector("button");
const myHeading = document.querySelector("h1");

function setUserName() {
    const myName = prompt("Please enter your name.");
    if(!myName){
        setUserName();
    } else {
        localStorage.setItem("name", myName);
        myHeading.textContent = `Studio Ghibli is amazing, ${myName}`;
    }
}

if (!localStorage.getItem("name")){
    setUserName();
} else {
    const storedName = localStorage.getItem("name");
    myHeading.textContent = `Studio Ghibli is amazing, ${storedName}`;
}

myImage.onclick = () => {
    const mySrc = myImage.getAttribute("src");   
    if(mySrc === "images/ghibli.png"){
        myImage.setAttribute("src", "images/images.jpeg");
        myImage.setAttribute("width", "400px");
    } else {
        myImage.setAttribute("src", "images/ghibli.png");
        myImage.removeAttribute("width");
    }
};

myButton.onclick = function() {
    setUserName();
};
