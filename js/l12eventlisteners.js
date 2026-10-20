
// 10/13/2026

// document.addEventListener("readystatechange", (event) =>{
//     if(event.target.readyState === "complete"){
//         console.log("readyState:complete");
//         initApp();
//     }

//     const initApp = () => {
//         const view3 = document.querySelector ("#view3");

//         const myForm = view3.querySelector ("#myForm");
//         myForm.addEventListener("submit", (event) => {
//             event.preventDefault();
//             console.log("submit event");
//         })
//     }
// })







// const view = document.querySelector("#view2");
// console.log(view)

// const div = view.querySelector("div");
// const h2 = div.querySelector("h2")

// syntax for event listener addEventLstener("click", function, useCapture)

// const doSomething =() => {alert("doing something")}

// h2.addEventListener("click", doSomething, false);
// h2.removeEventListener("click", doSomething, false);

// // // Adding an anonymous function

// h2.addEventListener("click",  (event) =>{
//     console.log(event.target);
//     event.target.textContent = "Clicked";

// })
// h2.addEventListener("click",  function (event) {
//     console.log(event.target);
//     event.target.textContent = "Clicked";

// })
/////////////////////////////////////
// READYSTATECHANGEEVENT//////////

// document.addEventListener("readystatechange", (event)=>{
//     if(event.target.readyState==="complete"){
//         console.log("readyState:complete");
//         initApp();
    
//     }
// });

// const initApp = () =>{
//     const view = document.querySelector("#view2");
//     const div = view.querySelector("div");
//     const h2 = div.querySelector("h2")

//     view.addEventListener("click", (event) => {
//         // event.stopPropagation();
//         // view.style.backgroundColor = "purple"
//         // event.target.style.backgroundColor = "purple"
//         // view.classList.add("purple")
//         // view.classList.remove("darkblue")
//         view.classList.toggle("purple")
//         view.classList.toggle("darkblue")
//     }); 

//     div.addEventListener("click", (event) => {
//         // div.style.backgroundColor = "blue"
//         // event.stopPropagation();
//         // event.target.style.backgroundColor = "blue"
//         view.classList.toggle("blue")
//         view.classList.toggle("purple")
//     });

//     h2.addEventListener("click", (event) => {
//         // h2.style.backgroundColor = "red"
//         //  event.stopPropagation();
//         const myText = event.target.textContent; myText==="My 2nd View"? (event.target.textContent = "Clicked"): (event.target.textContent = "My 2nd View");
//         // event.target.textContent = "Clicked";
    
//     },
// );

//  const nav = document.querySelector("nav");
//     nav.addEventListener("mouseover", (event) =>{
//         event.target.classList.add("height100");
//         // event.target.classList.toggle("height100");
        
//     })
//     nav.addEventListener("mouseout", (event) =>{
//         event.target.classList.remove("height100");
//     })

// };

// Everything changed because of event bubbling. When I click the h2 element, its click event triggers the event listener attached to the h2. The event then bubbles up to its parent div, triggering the div's click event listener, and continues bubbling up to the parent view, triggering the view's click event listener.
// As a result:
// 1. The h2 text changes to "Clicked".
// 2. The div background changes to blue.
// 3. The view background changes to purple.
// This happens because the click event propagates from the element that was clicked up through its ancestors.

// true /false
// true means the listener runs during the capturing phase.
// false means the listener runs during the bubbling phase. This is also the default if you omit the third argument.

// Capturing — true - The event travels down toward the clicked heading.  Bubbling — false - The event travels back up from the clicked heading.
// // INITAPP()///////////////////////////////////////////////////

// const initApp = () =>{
//     const view = document.querySelector("#view2");
//     const div = view.querySelector("div");
//     const h2 = div.querySelector("h2")

//     view.addEventListener("click", (event) => {
        
//         view.classList.add("purple")
//         view.classList.remove("darkblue")
//         // view.classList.toggle("purple")
//         // view.classList.toggle("darkblue")
//     }, false)

//     div.addEventListener("click", (event) => {
//         div.style.backgroundColor = "blue"
//         // event.target.style.backgroundColor = "blue"

//         // div.classList.toggle("blue")
//         // div.classList.toggle("black")
        
//     }, false)

//     h2.addEventListener("click", (event) => {
//         // h2.style.backgroundColor = "blue"
//         // event.target.textContent = "Clicked";
//         const myText = event.target.textContent;
//         myText === "My 2nd View"? event.target.textContent = "Clicked": event.target.textContent = "My 2nd View";

//         view.classList.toggle("purple")
//         view.classList.toggle("darkblue")
//     }, false);

//     const nav = document.querySelector("Nav");
//     nav.addEventListener("mouseover", (event)=>{
//         event.target.classList.add("height100")
//         // event.target.classList.toggle("height100")
//     })

//     nav.addEventListener("mouseout", (event)=>{
//         event.target.classList.remove("height100");
//     })
// }
// const view = document.querySelector("#view2");
// console.log(view)

// const div = view.querySelector("div");
// const h2 = div.querySelector("h2")

// // syntax for event listener addEventLstener("click", function, useCapture)

// const doSomething =() => {alert("doing something")}

// h2.addEventListener("click", doSomething, false);
// h2.removeEventListener("click", doSomething, false);

// // Adding an anonymous function
// h2.addEventListener("click",  (event) =>{
//     console.log(event.target);
//     event.target.textContent = "Clicked";

// })

// document.addEventListener("readystatechange", (event)=>{
//     if(event.target.readyState==="complete"){
//         console.log("readyState:complete");
//         intiApp();
    
//     }
// })


