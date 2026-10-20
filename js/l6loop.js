// // let myNumber =0;
// // while (myNumber<10){
// //     // console.log(myNumber);
// //     // myNumber++;
// //     myNumber+=2;
// //     console.log(myNumber);
// // }

// // DO WHILE LOOP

// let myNumber = 0;
// do{
// console.log(myNumber);
// myNumber++;
// } while (myNumber < 5);


// for (let i=4; i<=10; i++){
//     console.log(i);
// }


let name = "Josephine "
// for (let i=0; i<=name.length; i++){
//     console.log(name.charAt(i))
// }

// WHILE LOOP

let counter =1;
let myLetter;
// while (true){
//     myLetter = name[counter];
//     console.log(myLetter);
//     if(myLetter === "n")
//         break;
//     counter++
// }

while (counter<name.length){
    myLetter = name[counter];
    console.log(myLetter)
    if(myLetter === "s"){
        counter+=3;
        continue;
    }
    if (myLetter ==="i") break;
    counter++
}

// console.log(counter);