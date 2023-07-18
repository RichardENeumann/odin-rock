"use strict";

const playerSelection = "Rock";
const computerSelection = getComputerChoice();

function getComputerChoice() {
    let randomSeed = Math.floor(Math.random() * 10) % 3 + 1;
    switch(randomSeed) {
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

}