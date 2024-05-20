const link = document.querySelector("a");
// Creating and placing new nodes
const section = document.querySelector("section");
const para = document.createElement("p");
link.textContent = "Mozilla Developer Network";
link.href = "https://developer.mozilla.org";

para.textContent = "We hope you enjoyed the ride."
section.appendChild(para); // append the para at the end of the sect

const text = document.createTextNode(
    " — the premier source for web development knowledge.",
)

const linkPara = document.querySelector("p");
linkPara.appendChild(text);

// Moving and removing elements
// section.appendChild(linkPara);  This moves de para down to the bottom of the section
// Removing a Node
// section.removeChild(linkPara)
// .remove()
// When you want to remove a node based on a reference to itself
// which is fairly common, you can use Element.remove() (no support older browsers)
// or linkPara.parentNode.removeChild(linkPara)
// linkPara.remove();
//

// Manipulating styles
// Adding inline styles directly onto elements you want to dynamically style
// This is done with the HTMLElement.style property:
// para.style.color = "white";
// para.style.backgroundColor = "black";
// para.style.padding = "10px";
// para.style.width = "250px";
// para.style.textAlign = "center";
// backgroundColor in JS, background-color in CSS

// Element.setAttribute()
para.setAttribute("class", "highlight");
