"use strict";

let numberOfRounds = 5;
let playerScore = 0;
let computerScore = 0;
let gameOver = false;
const display = document.querySelector(".displayResults");

function writeToDisplay(text) {
    const textElement = document.createElement("p");
        textElement.textContent = text;
    display.appendChild(textElement);
}

function getComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 10) % 3 + 1;
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
        writeToDisplay("❌");
        writeToDisplay(playerSelection + " versus " + computerSelection + " - That's a draw!");
        writeToDisplay("Your points: " + playerScore + " - Computer's points: " + computerScore);
        writeToDisplay("-----");
    } else if (playerSelection === "Rock") {
        switch (computerSelection) {
            case "Paper":
                computerScore++;
                writeToDisplay("✋🏼");
                writeToDisplay("Rock is beaten by paper! - The computer wins!");
                writeToDisplay("Your points: " + playerScore + " - Computer's points: " + computerScore);
                writeToDisplay("-----");
                break;
            case "Scissors":
                playerScore++;
                writeToDisplay("✌🏼");
                writeToDisplay("Rock beats scissors! - You win!");
                writeToDisplay("Your points: " + playerScore + " - Computer's points: " + computerScore);
                writeToDisplay("-----");
                break;  
            default: 
                writeToDisplay("Something went wrong here, try again!");                  
                writeToDisplay("Your points: " + playerScore + " - Computer's points: " + computerScore);
                writeToDisplay("-----");
                break;
        }
    } else if (playerSelection === "Paper") {
        switch (computerSelection) {
            case "Rock":
                playerScore++;
                writeToDisplay("✊🏼");
                writeToDisplay("Paper beats rock! - You win!");
                writeToDisplay("Your points: " + playerScore + " - Computer's points: " + computerScore);
                writeToDisplay("-----");
                break;
            case "Scissors":
                computerScore++;
                writeToDisplay("✌🏼");
                writeToDisplay("Paper is beaten by paper! - The computer wins!");
                writeToDisplay("Your points: " + playerScore + " - Computer's points: " + computerScore);
                writeToDisplay("-----");
                break;
            default: 
                writeToDisplay("Something went wrong here, try again!");                  
                writeToDisplay("Your points: " + playerScore + " - Computer's points: " + computerScore);
                writeToDisplay("-----");
                break;                  
        }                          
    } else if (playerSelection === "Scissors") {
        switch (computerSelection) {
            case "Rock":
                computerScore++;
                writeToDisplay("✊🏼");
                writeToDisplay("Scissors are beaten by rock - The computer wins!");
                writeToDisplay("Your points: " + playerScore + " - Computer's points: " + computerScore);
                writeToDisplay("-----");
                break;
            case "Paper":
                playerScore++;
                writeToDisplay("✋🏼");
                writeToDisplay("Scissors beat paper! - You win!");
                writeToDisplay("Your points: " + playerScore + " - Computer's points: " + computerScore);
                writeToDisplay("-----");
                break;                    
            default: 
                writeToDisplay("Something went wrong here, try again!");                  
                writeToDisplay("Your points: " + playerScore + " - Computer's points: " + computerScore);
                writeToDisplay("-----");
                break;    
        }        
    } else {
        writeToDisplay("Something went wrong here, try again!");
    }
}

function showResults() {
    const result = Math.sign(playerScore - computerScore);
    switch(result) {
        case -1:
            writeToDisplay("🤖");
            writeToDisplay("The computer won.");
            break;
        case 1:
            writeToDisplay("🏆");
            writeToDisplay("You win!");
            break;
        default:
            writeToDisplay("❌");
            writeToDisplay("That's a draw...");
            break;
    }
    writeToDisplay("Click above to play again.")

    numberOfRounds = 5;
    playerScore = 0;
    computerScore = 0;
    gameOver = true;
}

function playGame(e) {
    if (gameOver === true) {
        // clean up and start anew
        while (display.firstChild) {
            display.removeChild(display.firstChild);
        }
    }
    if (numberOfRounds > 0) {
        gameOver = false;
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