console.log("....Decision Tree.....")
console.log("                ")
console.log("               ")

// Decision Tree
let playerOne ="paper";
let computer ="scissors";


if (playerOne === computer){
    console.log("tie game")
}
else if (playerOne === "rock"){
    if (computer === "paper"){
    // result = "computer wins!"
    console.log("computer wins!")
}
    
     else { 
    // result = " playerOne wins!"
    console.log("playerOne wins!")

    }
}

else if (playerOne === "paper"){
    if (computer === "scissors"){
    // result = "computer wins!"
    console.log("computer wins!")
}
    
     else { 
    // playerOne wins!
    console.log("playerOne wins!")
    }

}
else if (playerOne === "scissors"){
    if (computer === "rock"){
    // computer wins!}
    console.log("computer wins!")
    
    } else { 
    // (playerOne wins!)
    console.log("playerOne wins!")
    }
}


// TERNARY OPERATORS 

// syntax
// condition ? if true: ifFalse;

let soup = "Chicken Noodle Soup";
let isCustomerBanned = false;

let response = soup? "Yes, we have soup.": "Sorry, no soup today";

let soupAccess = isCustomerBanned? "Sorry, no soup for you": 
soup? `Here is your ${soup}` : `Sorry, no ${soup} for you today`

console.log(soupAccess);


let testScore = 9;
let myGrade = testScore> 89? A: 
testScore > 79? "B" :
testScore > 69? "C" :
testScore > 59? "D" :
"fail" ;

console.log(myGrade);
console.log("        ");

// let playerOne = "rock";
// let computer = "scissors";

let result = playerOne === computer? "Tie Game!": 
playerOne === "rock" && computer === "scissors"? "playerOne wins!":
playerOne === "scissors" && computer === "paper"? "playerOne wins!":
playerOne === "paper" && computer === "rock"? "playerOne wins!":

"computer wins!" ;

console.log(result)