
// SWITCH STATEMENTS

// switch (expression OR value){
//     case choice1:

//     break;

//     case choice2
//     // run
//     break;

//     default:

// }

switch (1){
    case 1:
        console.log(1)
        break;


    case 2:
        console.log(2);
        break;
    

    case 3:
        console.log(3);
        break;

    default:
        console.log("No Match")
        
}

console.log("....")

switch (Math.floor(Math.random()*5+1)){
    case 1:
        console.log(1)
        break;


    case 2:
        console.log(2);
        break;
    

    case 3:
        console.log(3);
        break;

    default:
        console.log("No Match")
        
}



console.log("....")
let playerOne = "scissors"
let computer = "paper"

switch (playerOne){
    case computer:
        console.log("Tie Game!");
        break;


    case "rock":
        if (computer === "paper"){
            console.log("computer wins")
            
        } else {
            console.log("playerOne wins")
        }
        break;

    case "paper":
        if (computer === "scissors"){
            console.log("computer wins")
            
        } else {
            console.log("playerOne wins")
        }
        break;
        
   default:
        if (computer ==="rock"){
            console.log("computer wins!")
        }
        else{
            console.log("playerOne wins!")
        }
        
}
