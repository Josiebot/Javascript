const view1=document.getElementById("view1");
console.log(view1);

const view2 = document.querySelector("#view2")
console.log(view2)

view1.style.display = "flex"; 
view2.style.display = "none"; 

const views = document.getElementsByClassName("view")
console.log(views)

const sameViews = document.querySelectorAll('.view');
console.log(sameViews)





console.log(views.length);
console.log(sameViews.length);

const divs = view1.querySelectorAll("div");
console.log(divs)
const SameDivs = view1.getElementsByTagName("div")
console.log(SameDivs)

const evenDivs = view1.querySelectorAll("div:nth-of-type(2n");
console.log(evenDivs);

for (let i = 0; i<evenDivs.length; i++){
    evenDivs[i].style.backgroundColor = "darkblue";
    // evenDivs[i].style.width = "200px";
    // evenDivs[i].style.height = "200px";

}

const navText = document.querySelector("nav h1");
console.log(navText);
navText.textContent = "Hello World";
// navText.style.backgroundColor = "maroon"
const navbar = document.querySelector("nav");
navbar.innerHTML = `<h1>Hello!<h1> <p> Align right`

console.log(navbar)
navbar.style.justifyContent = "space-between";

// NAVIGATING THE DOM TREE

// console.log(evenDivs[0].style.backgroundColor="yellow");
console.log(evenDivs[0]);
console.log(evenDivs[0].parentElement);
console.log(evenDivs[0].parentElement.children);
console.log(evenDivs[0].parentElement.childNodes);
console.log(evenDivs[0].parentElement.hasChildNodes());
console.log(evenDivs[0].parentElement.lastChild);
console.log(evenDivs[0].parentElement.firstChild);
console.log(evenDivs[0].parentElement.children[1].tagName);
console.log(evenDivs[0].parentElement.children[0].tagName);
console.log(evenDivs[0].parentElement.firstElementChild.tagName);
console.log(evenDivs[0].parentElement.lastElementChild.tagName);

console.log(evenDivs[1].nextSibling);
console.log(evenDivs[1]);
console.log(evenDivs[0].nextElementSibling);
console.log(evenDivs[2].nextSibling);

console.log(evenDivs[1].nextElementSibling);
console.log(evenDivs[1].nextElementSibling.nextElementSibling);
// .nextSibling selects the next node, while .nextElementSibling selects the next HTML element.
// nextSibling gets the next node. It could be text (including whitespace), an element, or a comment.
// .nextElementSibling gets the next HTML element, such as a p, div, or h1. It skips text and comment nodes.

console.log(evenDivs[3].previousSibling);
console.log(evenDivs[3].previousElementSibling);



// The key difference
// The difference is that querySelectorAll() returns a NodeList, whereas getElementsByClassName() returns an HTMLCollectio

// getElementsByClassName("view")
// Returns a live HTMLCollection. If elements are added or removed from the page, the collection updates automatically.




// querySelectorAll(".view")
// Returns a static NodeList. It does not automatically update when matching elements are later added or removed.
// Spaces, tabs, and line breaks in your HTML can be represented as text nodes.

// ADDING TO OR REMOVING FROM THE DOM
view1.style.display = "none";
view2.style.display = "flex";
view2.style.flexDirection = "row";
view2.style.flexWrap = "wrap";
view2.style.margin = "100px";

while (view2.lastChild){
    view2.lastChild.remove()
}

const createDivs = (parent, iter) => {
    const newDiv = document.createElement("div");
    newDiv.textContent = iter;
    newDiv.style.backgroundColor = "#000";
    newDiv.style.width = "100px";
    newDiv.style.height = "100px";
    newDiv.style.margin = "10px";
    newDiv.style.display = "flex";
    newDiv.style.justifyContent = "center";
    newDiv.style.alignItems = "center";
    parent.append(newDiv);

}
// createDivs(view2, 10);

for (let i=1; i<=12; i++){
    createDivs(view2, i);
}