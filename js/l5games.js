let playGame = confirm("Shall we play rock, paper, or scissors?");
// ask if we can play a game
if (playGame){
    // play
    
    let playerChoice = prompt("Please enter either rock, paper, or scissors");
    // Engage the player

    if (playerChoice){
        // ..details 

        let playerOne = playerChoice.trim().toLowerCase();
        if (playerOne === "rock" || playerOne === "paper"|| playerOne === "scissors" ) {

            let computerChoice = Math.floor(Math.random()*3+1);
            let computer = computerChoice === 1? "rock":
        computerChoice === 2? "paper": "scissors";
        
        let result = 
        playerOne=== computer? "Tie game!": 
        playerOne === "rock" && computer === "paper"?`playerOne: ${playerOne}\nComputer: ${computer}?\nComputer wins!`:
        playerOne === "paper" && computer === "scissors"?`playerOne: ${playerOne}\nComputer: ${computer}?\nComputer wins!`:
        playerOne === "scissors" && computer === "rock"?`playerOne: ${playerOne}\nComputer: ${computer}?\nComputer wins!`:
        `playerOne: ${playerOne}\nComputer: ${computer}?\nplayerOne wins!`;

    alert(result);
    let playAgain = confirm("Play Again?");
    playAgain? location.reload(): alert("Okay, thank you for playing")
    
    }

   

     else {
        alert ("You didn't enter rock, paper, or scissors")}

    
    
} 
else{
        alert ("I guess you changed your mind. Maybe next time")
    }

 
}

else {
    alert("Thank you, lets play again next time")

    // This is from the first part of lets play a game
}

// ALTERNATIVE APPROACH 
// let playGame = confirm("Shall we play rock, paper, or scissors?");

while (playGame) {

    // Ask the player for their choice
    let playerChoice = prompt("Please enter rock, paper, or scissors.");

    // Allow the player to cancel
    if (playerChoice === null) {
        alert("Thanks for playing!");
        break;
    }

    // Clean up the input
    let playerOne = playerChoice.trim().toLowerCase();

    // Validate the player's choice
    if (
        playerOne !== "rock" &&
        playerOne !== "paper" &&
        playerOne !== "scissors"
    ) {
        playGame = confirm("Invalid choice! Would you like to try again?");
        continue;
    }

    // Generate the computer's choice
    let choices = ["rock", "paper", "scissors"];

    let computer = choices[Math.floor(Math.random() * choices.length)];

    // Determine the winner
    let result;

    if (playerOne === computer) {
        result = "It's a tie!";
    } else if (
        (playerOne === "rock" && computer === "scissors") ||
        (playerOne === "paper" && computer === "rock") ||
        (playerOne === "scissors" && computer === "paper")
    ) {
        result = "You win!";
    } else {
        result = "Computer wins!";
    }

    // Display the result
    alert(
        `Your choice: ${playerOne}\n` +
        `Computer's choice: ${computer}\n\n` +
        `${result}`
    );

    // Ask whether to play again
    playGame = confirm("Would you like to play again?");
}

alert("Thank you for playing. See you next time!");