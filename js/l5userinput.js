


// alert("Hello World Jossy!")

// confirm("Ok===True\nCancel===False")
// let myBoolean = confirm("Ok===True\nCancel===False")
// console.log(myBoolean)


// let name = prompt("please enter your name.")
// // console.log(name)
// console.log(name ?? prompt("You didn't enter your name."))

// Loopit!

// let name = prompt("please enter your name.")
// // while (!name){
// //     console.log(name ?? prompt("You didn't enter your name."))} This creates an endless loop

// if(name){
//     console.log(name.length);
//     console.log(name.trim().length);
//     console.log(name.trim());
// } else {
//     console.log("You didn't enter your name.")
// }


let name = prompt("Please enter your name.");

while (name !== null && name.trim() === "") {
    name = prompt("You didn't enter your name. Please enter your name.");
}
// "The user has not pressed Cancel, AND the name is empty or contains only spaces."

if (name === null) {
    console.log("You cancelled.");
} else {
    console.log(`Hello, ${name.trim()}!`);
}
