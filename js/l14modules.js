import * as Guitars from "./guitars.js";

import User from "./user.js";


// import playGuitar from "./guitars.js";
// import { shredding as shred, plucking as fingerpicking } from "./guitars.js";
// console.log(playGuitar());
// console.log(shred());
// console.log(fingerpicking());


const me = new User("emailemail@gmail,com", "Jossy")

console.log(me)
console.log(me.greeting())

console.log(Guitars.default());
console.log(Guitars.shredding());
console.log(Guitars.plucking());