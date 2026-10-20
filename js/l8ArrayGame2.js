
// let playGame = confirm("Shall we play rock, paper, or scissors?");
// // ask if we can play a game
// while (playGame){
//     // play
    
//     const playerChoice = prompt("Please enter either rock, paper, or scissors");
//     // Engage the player

    
//         // ..details 

//         const playerOne = playerChoice.trim().toLowerCase();
//         if (
//             playerOne === "rock" || 
//             playerOne === "paper"|| 
//             playerOne === "scissors" ) {

//             const computerChoice = Math.floor(Math.random()*3);
//             const rpsArray = ["rock", "paper", "scissors"];
//             const computer = rpsArray[computerChoice]
//         const result = 
//         playerOne=== computer? "Tie game!": 
//         playerOne === "rock" && computer === "paper"?`playerOne: ${playerOne}\nComputer: ${computer}?\nComputer wins!`:
//         playerOne === "paper" && computer === "scissors"?`playerOne: ${playerOne}\nComputer: ${computer}?\nComputer wins!`:
//         playerOne === "scissors" && computer === "rock"?`playerOne: ${playerOne}\nComputer: ${computer}?\nComputer wins!`:
//         `playerOne: ${playerOne}\nComputer: ${computer}?\nplayerOne wins!`;

//     alert(result);
//     const playAgain = confirm("Play Again?");
//     if (playAgain) alert ("Ok, let's play:-) again");
//     continue; 

// } else {alert ("Thank you, lets play again next time"); 
//         break;
//     }
// //     } else {alert 
// //         ("I guess you changed your mind. Maybe next time");
// //     break;}

// //     }
    
// // else  
    
// // {
// //     alert("Thank you, lets play again next time")

// //     // This is from the first part of consts play a game
// // }
// }


// Functions


let playGame = confirm("Shall we play rock, paper, or scissors?");
// ask if we can play a game
while (playGame){
    // play
    
    const playerChoice = prompt("Please enter either rock, paper, or scissors");
    // Engage the player

    
        // ..details 

        const playerOne = playerChoice.trim().toLowerCase();
        if (
            playerOne === "rock" || 
            playerOne === "paper"|| 
            playerOne === "scissors" ) {

            const computerChoice = Math.floor(Math.random()*3);
            const rpsArray = ["rock", "paper", "scissors"];
            const computer = rpsArray[computerChoice]
        const result = 
        playerOne=== computer? "Tie game!": 
        playerOne === "rock" && computer === "paper"?`playerOne: ${playerOne}\nComputer: ${computer}?\nComputer wins!`:
        playerOne === "paper" && computer === "scissors"?`playerOne: ${playerOne}\nComputer: ${computer}?\nComputer wins!`:
        playerOne === "scissors" && computer === "rock"?`playerOne: ${playerOne}\nComputer: ${computer}?\nComputer wins!`:
        `playerOne: ${playerOne}\nComputer: ${computer}?\nplayerOne wins!`;

    alert(result);
    const playAgain = confirm("Play Again?");
    if (playAgain) alert ("Ok, let's play:-) again");
    continue; 

} else {alert ("Thank you, lets play again next time"); 
        break;
    }
//     } else {alert 
//         ("I guess you changed your mind. Maybe next time");
//     break;}

//     }
    
// else  
    
// {
//     alert("Thank you, lets play again next time")

//     // This is from the first part of consts play a game
// }
}