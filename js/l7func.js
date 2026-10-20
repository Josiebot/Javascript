// Fnctions
// methods are built in functions

console.log("Jossy".toUpperCase());

// Function Declaration syntax:
function sum(num1, num2){

    return num1+num2
}
console.log(sum(2,9));

function getUserNameFromEmail(email){
    return email.slice(0, email.indexOf("@"))
}

console.log(getUserNameFromEmail("user123@gmail.com"));

// // aNONYMOUS FUNCtion

// // const greet = function() {
// //     console.log("Hello!");
// // };

// // greet();
// const getUserNameFromEmail = function(email){
//     return email.slice(0, email.indexOf("@"));

// }

// console.log(getUserNameFromEmail("User12@gmail.com"))


// // ARROW FUNCTIONS
// const sum = (a, b) => {
//     return a + b;
// };

// console.log(sum(2, 3));

// const getUserNameFromEmail = (email)=> {
//     return email.slice(0, email.indexOf("@"));

// }

// console.log(getUserNameFromEmail("User12@gmail.com"))


const toProperCase = (name) =>{
    return name.charAt(2).toUpperCase()+name.slice(1).toLowerCase();
}

console.log(toProperCase("jOssy"))

// Function reusable code