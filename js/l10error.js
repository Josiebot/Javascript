"use strict";

// myVariable = "Jossy";
// console.log(myVariable);

// // Reference error : 

// Object..create();
// // Syntax error

// const name = "Dave";
// name = "Joe"; 

// Type error - Assignment to constant variable

// Another TypeError



// const makeError =() => {
//     try{
//         // code
//         // const name = "Dave";
//         // name = "Jossy";
//         throw new customError("This is a custom error")
//     } catch (err){
//         // console.log(err);
//         // console.error(err);
//         // console.warn(err);
//         // console.table(err);
//         console.error(err.message);
//         console.error(err.name);
//         console.error(err.stack);
//         console.error(err.stack);
//         // logTheError(err.stack)


//     }
// }

// makeError(); 

// function customError(message){
//     this.message=message;
//     this.name="customError";
//     this.stack = `${this.name}: ${this.message}`;
// }

// USE A GENERIC BUILLT IN ERROR
// const makeError =() => {
//     try{
        
//         throw new Error("This is aN error")
//     } catch (err){
//         console.error(err.message);
//         console.error(err.name);
//         console.error(err.stack);
//         console.error(err.stack);
        

//     }
//     
// }

// makeError(); 
// FINALLY BLOCK

const makeError =() => {
    let i = 2
    while(i<6){

// remainder operator (%
    try{
        
        if (i%2 !==0){
            throw new Error("Odd Number")
        }
        console.log("Even Number!");
        // throw new Error("This is aN error")
    } catch (err){
        // console.error(err.message);
        // console.error(err.name);
        // console.error(err.stack);
        console.error(err.stack);
        

    }
    finally{
        console.log("....finally");
        i++;
    }
}

}
makeError(); 
