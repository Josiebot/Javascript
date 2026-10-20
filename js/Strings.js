 console.log("Hi Jossy")

 console.log(typeof "Jossy");
 console.log(typeof 45);
 console.log(typeof true);
 console.log(typeof false);
 


 const myVariable = "Mathematics";

 console.log(myVariable.length)
 console.log("Jossy is a good girl".length)

console.log(myVariable.charAt(1))
console.log(myVariable.indexOf("y"))
console.log(myVariable.indexOf("ati"))

// slice method
console.log(myVariable.slice(6,5))
console.log(myVariable.toLowerCase())
console.log(myVariable.includes("mat"))
console.log(myVariable.split("e"))
console.log(myVariable.split(" "))
console.log(myVariable.split(""))
console.log("Jossy, Shar, Caltim".split(","))
console.log("Jossy, Shar, Caltim".split(""))



// Lesson 2 Strings
const myNumber = 34;
const myFloat = 30.09

const myString = "34"


console.log(myString)

console.log(myNumber===myFloat);

console.log(myString+3)

console.log(Number(myString)+3);
console.log(Number(myString) === myNumber);
console.log(Number("Jossy"))
console.log(Number(true))
console.log(Number(false))


// Lesson 3 STRINGS

console.log(Number.isInteger(myString))
console.log(Number.isInteger(myNumber))

// So parseFloat() is basically saying:

// "Give me this value as a decimal number."

console.log(Number.parseFloat(myNumber))
console.log(Number.parseFloat(myFloat))
console.log(Number.parseFloat(myString))

console.log(Number.parseFloat(myString).toFixed(2));
console.log(Number.parseFloat(myFloat).toFixed(4));

console.log(Number.parseInt(myFloat));
console.log(Number.parseInt(myNumber));
// Means means try to convert 10 into a decimal number.
console.log("............");


console.log(typeof myFloat.toString());
console.log(myFloat.toString());


// CHAINING
console.log(Number.parseFloat("43.13hg").toFixed().toString())
console.log(typeof Number.parseFloat("43.13hg").toFixed().toString())


// NOTANUMBER (NAN)

console.log(Number.isNaN())
console.log(Number.isNaN("Jossy"))
console.log(Number.isNaN(NaN))




// So when do you get true?

// You get true when the value is actually NaN:

// console.log(Number.isNaN(NaN))

// Output:

// true

// For example:

// let result = Number.parseFloat("Jossy");

// console.log(result);

// This gives:

// NaN

// Then:

// console.log(Number.isNaN(result));

// gives:

// true
// Think of it like this
// Code	Result	Why
// Number.isNaN(NaN)	true	It is actually NaN
// Number.isNaN("Jossy")	false	It's a string
// Number.isNaN(25)	false	It's a number
// Number.isNaN(25.5)	false	It's a number
// Number.isNaN(undefined)	false	It's undefined
// Number.isNaN(null)	false	It's null
// ⭐ The key thing to remember

// Number.isNaN() doesn't ask whether something "looks like a bad number."

// It specifically asks:

// "Is this value the special JavaScript value NaN?"

