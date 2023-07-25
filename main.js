"use strict";

let numberOfRounds = 5;
let playerScore = 0;
let computerScore = 0;

function writeToDisplay(text) {
    console.log(text);
}

function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 10) % 3 + 1;
    switch(randomNumber) {
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
    if (playerSelection === computerSelection) {
        writeToDisplay(playerSelection + " versus " + computerSelection + " - That's a draw!");
        writeToDisplay("Your points: " + playerScore + " - Computer's points: " + computerScore);
    } else if (playerSelection === "Rock") {
        switch (computerSelection) {
            case "Paper":
                computerScore++;
                writeToDisplay("Paper beats rock! - The computer wins!");
                writeToDisplay("Your points: " + playerScore + " - Computer's points: " + computerScore);
                break;
            case "Scissors":
                playerScore++;
                writeToDisplay("Rock beats scissors! - You win!");
                writeToDisplay("Your points: " + playerScore + " - Computer's points: " + computerScore);
                break;  
            default: 
                writeToDisplay("Something went wrong here, try again!");                  
                writeToDisplay("Your points: " + playerScore + " - Computer's points: " + computerScore);
                break;
        }
    } else if (playerSelection === "Paper") {
        switch (computerSelection) {
            case "Rock":
                playerScore++;
                writeToDisplay("Paper beats rock! - You win!");
                writeToDisplay("Your points: " + playerScore + " - Computer's points: " + computerScore);
                break;
            case "Scissors":
                computerScore++;
                writeToDisplay("Scissors beat paper! - The computer wins!");
                writeToDisplay("Your points: " + playerScore + " - Computer's points: " + computerScore);
                break;
            default: 
                writeToDisplay("Something went wrong here, try again!");                  
                writeToDisplay("Your points: " + playerScore + " - Computer's points: " + computerScore);
                break;                  
        }                          
    } else if (playerSelection === "Scissors") {
        switch (computerSelection) {
            case "Rock":
                computerScore++;
                writeToDisplay("Rock beats scissors - The computer wins!");
                writeToDisplay("Your points: " + playerScore + " - Computer's points: " + computerScore);
                break;
            case "Paper":
                playerScore++;
                writeToDisplay("Scissors beat paper! - You win!");
                writeToDisplay("Your points: " + playerScore + " - Computer's points: " + computerScore);
                break;                    
            default: 
                writeToDisplay("Something went wrong here, try again!");                  
                writeToDisplay("Your points: " + playerScore + " - Computer's points: " + computerScore);
                break;    
        }        
    } else {
        writeToDisplay("Something went wrong here, try again!");
    }
}

function showResults() {
    let result = Math.sign(playerScore - computerScore);
    switch(result) {
        case -1:
            writeToDisplay("The computer won.");
            break;
        case 1:
            writeToDisplay("You win!");
            break;
        default:
            writeToDisplay("That's a draw...");
            break;
    }
    numberOfRounds = 5;
    playerScore = 0;
    computerScore = 0;
}

function playGame(e) {
    if (numberOfRounds > 0) {
        playRound(e.target.id, getComputerChoice());   
        numberOfRounds--; 
    }
    if (numberOfRounds === 0) showResults(); 
}



const rockButton = document.querySelector("#Rock");
    rockButton.addEventListener("click", playGame); 
const scissorsButton = document.querySelector("#Scissors");
    scissorsButton.addEventListener("click", playGame); 
const paperButton = document.querySelector("#Paper");
    paperButton.addEventListener("click", playGame);