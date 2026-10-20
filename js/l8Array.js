// // const myArray = [];

// // myArray[0] = "Jossy";
// // myArray[1] = "1001";
// // myArray[2] = "False";

// console.log(myArray)
// console.log(myArray.length)
// console.log(myArray.length-1)
// console.log(myArray[0])

// // Adding more data TO the END
// myArray.push("School")
// console.log(myArray)

// // UNSHFT (aDD TO THE FRONT)
// myArray.unshift(42);
// console.log(myArray)

// // REMOVE the last
// const lastItem = myArray.pop();
// console.log(myArray)
// console.log(lastItem)
// // REMOVE the front
// const firstItem = myArray.shift();
// console.log(myArray)
// console.log(firstItem)
// console.log(myArray[0]);

// // DELETE This is not adviced as it leaves an empty position
// // delete myArray[1];
// // console.log(myArray)

// SPLICE
// myArray.splice(0, 2, 67, "Jossy"); 
// console.log(myArray)



const myArray = ["A","B", "C", "D", "E" ]

myArray.reverse()
console.log(myArray);

myArray.join();
const newString =myArray.join();
console.log(newString);

const newArray = newString.split(",");
console.log(newArray);



///////////////////////////
const myArrayA = ["A","B", "C"];
const myArrayB = ["D", "E" ];

const myArraynew = myArrayB.concat(myArrayA);
console.log(myArraynew);
const myArraynewb = myArrayA.concat(myArrayB);
console.log(myArraynewb);
console.log("....");

/////////////////////////////////////

// SPREAD OPERATOR

const nArray = [...myArrayA, ...myArrayB];
console.log(nArray);


const equipShelfA = ["basketball", "football", "volleyball"];
const equipShelfB = ["basketball", "golf ball", "tennis ball"];
const clothesShelfA = ["tank tops", "t-shirts", "jerseys"];
const clothesShelfB= ["sweat tops", "sweat pants", "hoodies"];

console.log(equipShelfA.concat(equipShelfB))
newShelvesArray = [...equipShelfA, ...equipShelfB]
console.log(newShelvesArray)

console.log(equipShelfA[1])

const equipDept = [equipShelfA, equipShelfB];
const clothesDept = [clothesShelfA, clothesShelfB];

console.log(equipDept[1][2])
console.log(clothesDept[0][0])

const sportsStore = [equipDept, clothesDept];
console.log(sportsStore[1][0][2]);