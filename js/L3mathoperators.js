// LESSON 4 - MATH OPERATIONS

console.log(Math.PI);
console.log(Math.trunc(Math.PI));
console.log(Math.round(3.5));
console.log(Math.ceil(3.3));
console.log(Math.floor(3.5));


console.log(Math.pow(5, 2))
// pow is to the power of

console.log(Math.min(5, 2))
console.log(Math.max(5, 2))
console.log(Math.random())
console.log(Math.random())
console.log(Math.random())

// from 1 to 10
console.log(Math.floor(Math.random()*10)+1);
console.log(Math.floor(Math.random()*10));
console.log(Math.floor(Math.random()*10));

// Use floor and not ceil becaise math.ceil has a chance of returning Ero while math.floor returns numbers from 1. 

// #COCE CHALLENGES
console.log(".......")

const myVariable = "Jossy"

// random number = 
console.log(myVariable.charAt(Math.floor(Math.random(myVariable)*myVariable.length)))
console.log(myVariable.charAt(Math.floor(Math.random(myVariable)*myVariable.length)))
console.log(myVariable.charAt(Math.floor(Math.random(myVariable)*myVariable.length)))
console.log(myVariable.charAt(Math.floor(Math.random(myVariable)*myVariable.length)))
console.log(myVariable.charAt(Math.floor(Math.random(myVariable)*myVariable.length)))


// console.log(myVariable.charAt(1))
// console.log(myVariable.indexOf("y"))
// console.log(myVariable.indexOf("ati"))

console.log(".......")


for (let i = 0; i < 5; i++) {
    console.log(myVariable.charAt(Math.floor(Math.random() * myVariable.length)));
}

console.log(".......")
console.log("           ")
for (let i = 0; i < 5; i++) {
    console.log(myVariable.charAt(i))
}
