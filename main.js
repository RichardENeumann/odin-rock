"use strict";

const playerSelection = "rOcK";

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
                return "Paper beats rock! - The computer wins!";
                break;
            case "Scissors":
                return "Rock beats scissors! - You win!";
                break;  
            default: 
                return "Something went wrong here, try again!";                  
                break;
        }
    } else if (playerSelection === "Paper") {
        switch (computerSelection) {
            case "Rock":
                return "Paper beats rock! - You win!";
                break;
            case "Scissors":
                return "Scissors beat paper! - The computer wins!";
                break;
            default: 
                return "Something went wrong here, try again!";                  
                break;                  
        }                          
    } else if (playerSelection === "Scissors") {
        switch (computerSelection) {
            case "Rock":
                return "Rock beats scissors - The computer wins!";
                break;
            case "Paper":
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