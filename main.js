"use strict";

let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let randomChoice = Math.floor(Math.random() * 10) % 3 + 1;
    switch(randomChoice) {
        case 1:
            return "Rock";
            break;
        case 2:
            return "Paper";
            break;    
        case 3:
            return "Scissors";
            break;
    }
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1).toLowerCase();

    if (playerSelection === computerSelection) {
        return playerSelection + " versus " + computerSelection + " - That's a draw!";
    } else if (playerSelection === "Rock") {
        switch (computerSelection) {
            case "Paper":
                computerScore++;
                return "Paper beats rock! - The computer wins!";
                break;
            case "Scissors":
                playerScore++;
                return "Rock beats scissors! - You win!";
                break;  
            default: 
                return "Something went wrong here, try again!";                  
                break;
        }
    } else if (playerSelection === "Paper") {
        switch (computerSelection) {
            case "Rock":
                playerScore++;
                return "Paper beats rock! - You win!";
                break;
            case "Scissors":
                computerScore++;
                return "Scissors beat paper! - The computer wins!";
                break;
            default: 
                return "Something went wrong here, try again!";                  
                break;                  
        }                          
    } else if (playerSelection === "Scissors") {
        switch (computerSelection) {
            case "Rock":
                computerScore++;
                return "Rock beats scissors - The computer wins!";
                break;
            case "Paper":
                playerScore++;
                return "Scissors beat paper! - You win!";
                break;                    
            default: 
                return "Something went wrong here, try again!";                  
                break;    
        }        
    } else {
        return "Something went wrong here, try again!";
    }
}

function playGame(numberOfRounds) {
    for (let i = 0; i < numberOfRounds; i++) {
    let playerSelection = prompt("Please enter your choice of Rock, Paper or Scissors...");
    console.log(playRound(playerSelection, getComputerChoice()));
    }
    return "End of game! Well played.";
}

function mainLoop() {
    console.log(playGame(5));
    console.log("Your score:" + playerScore + "|| The computer's score:" + computerScore);
    let result = Math.sign(playerScore - computerScore);
    switch(result) {
        case -1:
            console.log("The Computer won!");
            break;
        case 1:
            console.log("You won! Yay!");
            break;
        default:
            console.log("It's a tie!");
            break;
    }
}

mainLoop();