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


// VAR, LET, AND CONST

// const x=1;
// x=2;

// console.log(x);

// // Global scope

var x = 1;
let y =2;
const z = 3;

console.log(`global:${x}`);
console.log(`global:${y}`);
console.log(`global:${z}`);

function myFunc(){

    var x= 10;
    const z = 5;


    {
        var x =11;
        const z =6;
    console.log(`block:${x}`);
    console.log(`block:${y}`);
    console.log(`block:${z}`);
 
    }

    console.log(`function:${x}`);
    console.log(`function:${y}`);
    console.log(`function:${z}`);
}

myFunc();

// // All these are global scopes at this point
// // local scope

// // local scope
// function myFunc(){
//     const z =5;
//     console.log(y);

//     {
//         let y = 4; 
//         console.log(y);
//     }
// }


// myFunc()


// function greet() {
//     let message = "Hello!";
//     console.log(message);
    
// }

// greet();
// // console.log(message); // ReferenceError because Why? message belongs to the greet() function's scope. Code outside the function cannot access it.


// var 

// RULES 
// Global variables can be accessed from inner scopes where they are visible.

// Function-local variables are accessible only within that function and its nested scopes.

// let and const are block-scoped.

// var is function-scoped, not block-scoped.

// Inner scopes can access enclosing scopes; enclosing scopes cannot access inner-only variables.

// A variable's scope depends on where it is declared, not where a function is called. This is the foundation of lexical scope.


// JavaScript Notes: Scope Practice — Level 2
// Question 1: Variable shadowing
// What is printed?
// let x = 5;

// function test() {
//     let x = 10;
//     console.log(x);
// }

// test();
// console.log(x);


// Answer:
// 10
// 5


// Explanation:
// - The global variable x has a value of 5.
// - Inside test(), a new variable x is declared with the value 10.
// - The local variable shadows the global variable inside the function.
// - After the function finishes, console.log(x) outside the function accesses the global variable, which is still 5.
// Key lesson: Variables with the same name can exist in different scopes without changing each other.

// Question 2: var inside a block
// What happens?
// function example() {
//     {
//         var score = 50;
//     }

//     console.log(score);
// }

// example();


// Answer:
// 50


// Explanation:
// - The inner curly braces create a block.
// - However, var is function-scoped, not block-scoped.
// - Therefore, score is accessible throughout the function example().
// Key lesson: var does not stop existing when an ordinary block ends.

// Question 3: A function inside another function
// What happens?
// function outer() {
//     let a = 1;

//     function inner() {
//         console.log(a);
//     }

//     inner();
// }

// outer();


// Answer:
// 1


// Explanation:
// - The variable a belongs to the outer() function.
// - The inner() function is defined inside outer().
// - Because of lexical scope, inner() can access variables from its enclosing scope.
// Key lesson: An inner function can access variables belonging to its outer function.

// Question 4: Accessing a variable outside its block
// What happens?
// function outer() {
//     if (true) {
//         let secret = 99;
//     }

//     console.log(secret);
// }

// outer();


// Answer:
// ReferenceError


// Explanation:
// - The variable secret is declared using let inside the if block.
// - A variable declared with let is block-scoped.
// - The console.log(secret) statement is outside that block.
// - JavaScript cannot access secret there.
// Key lesson: A function can contain a block, but variables declared inside that block do not automatically become available throughout the function.

// Question 5: Can var escape a function?
// True or false?
// In a regular JavaScript script, a var variable declared inside a function can be accessed outside that function because var is not block-scoped.
// Answer: FALSE
// Explanation:
// var is function-scoped. This means it is not limited to an inner block, but it is still limited to the function in which it is declared.
// Example:
// function test() {
//     var age = 25;
// }

// test();

// console.log(age); // ReferenceError


// Key lesson: Not being block-scoped does not mean being global.

// Question 6: Nested blocks and variable shadowing
// What is printed?
// let colour = "blue";

// {
//     let colour = "red";

//     {
//         let colour = "green";
//         console.log(colour);
//     }
// }


// Answer:
// green


// Explanation:
// There are three variables called colour, each declared in a different scope.
// - Global scope: "blue"
// - First block: "red"
// - Inner block: "green"
// The console.log() statement is inside the innermost block. JavaScript uses the nearest accessible declaration, which is "green".
// Key lesson: When variable names are repeated in nested scopes, JavaScript looks in the innermost scope first.

// Question 7: Which variables are limited to the function body?
// Question: Which declarations have a scope covering the function body rather than being restricted to the nested if block?
// function run() {
//     var a = 1;
//     let b = 2;
//     const c = 3;

//     if (true) {
//         let d = 4;
//     }
// }


// Answer: a, b, and c.
// Explanation:
// - a uses var, so it is function-scoped.
// - b uses let directly in the function body, so its scope is the function body's block.
// - c uses const directly in the function body, so its scope is also the function body's block.
// - d uses let inside the if block, so it is restricted to that inner block.
// Note that b and c are technically block-scoped, but their block is the function body's block.
// Key lesson: Both let and const are block-scoped. A function body itself is a block.

// Question 8: Lexical scope
// True or false?
// A function defined in the global scope can automatically access a local variable belonging to another function just because that other function calls it.
// Answer: FALSE
// Explanation:
// Consider this example:
// let name = "Josephine";

// function greet() {
//     console.log(name);
// }

// function anotherFunction() {
//     let name = "James";
//     greet();
// }

// anotherFunction();


// Output:
// Josephine


// Although anotherFunction() calls greet(), greet() was defined in the global scope. It therefore looks for name in its own lexical environment and finds the global variable.
// It does not automatically gain access to the local variable name belonging to anotherFunction().
// Key lesson: Lexical scope depends on where a function is defined, not where it is called.

// Question 9: var and let using the same name
// What is printed?
// function test() {
//     var n = 1;

//     if (true) {
//         let n = 2;
//         console.log(n);
//     }

//     console.log(n);
// }

// test();


// Answer:
// 2
// 1


// Explanation:
// - The function declares n with var, giving it the value 1.
// - The if block declares another n using let, with the value 2.
// - Inside the block, the inner n shadows the outer n.
// - After the block ends, the inner n is out of scope, so the final log accesses the function-scoped n, which remains 1.
// Key lesson: Declaring a new variable with the same name is different from reassigning an existing variable.

// Question 10: The temporal dead zone
// What happens?
// function test() {
//     console.log(points);
//     let points = 8;
// }

// test();


// Answer:
// ReferenceError


// Explanation:
// The variable points is declared using let, but JavaScript reaches console.log(points) before the declaration has been initialized.
// A let variable cannot be accessed before its initialization. The period between entering its scope and initializing it is called the temporal dead zone (TDZ).
// The error occurs at runtime, not because the code has invalid syntax.
// Key lesson: With let and const, declare and initialize your variables before trying to use them.

// Quick revision table
// Concept	Meaning
// Global scope	A variable can be accessed throughout its applicable global/script scope.
// Function scope	A variable declared with var inside a function is limited to that function.
// Block scope	A variable declared with let or const is limited to the block where it is declared.
// Lexical scope	A function's access to outer variables depends on where it was defined.
// Variable shadowing	An inner variable uses the same name as an outer variable, taking precedence within its scope.
// Temporal dead zone	A let or const binding cannot be accessed before initialization.
// Remember these three rules:
// 1. var is function-scoped, not block-scoped.
// 2. let and const are block-scoped.
// 3. An inner scope can access visible variables from its outer scopes, but an outer scope cannot access variables restricted to an inner scope.