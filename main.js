"use strict";

let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
    switch(Math.floor(Math.random() * 10) % 3 + 1) {
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
    console.log(playerSelection, computerSelection);

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

const rockButton = document.querySelector("#Rock");
    rockButton.addEventListener("click", (e) => { 
        playRound(e.target.id, getComputerChoice()); 
    });
const scissorsButton = document.querySelector("#Scissors");
    scissorsButton.addEventListener("click", (e) => { 
        playRound(e.target.id, getComputerChoice()); 
    });
const paperButton = document.querySelector("#Paper");
    paperButton.addEventListener("click", (e) => { 
        playRound(e.target.id, getComputerChoice()); 
    });

function mainLoop() {
    let finalMessage;
    switch(Math.sign(playerScore - computerScore)) {
        case -1:
            finalMessage = "Der Computer hat gewonnen.";
            break;
        case 1:
            finalMessage = "Du hast gewonnen!";
            break;
        default:
            finalMessage = "Unentschieden...";
            break;
    }
}

