let rounds = 1;
let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let computerNumber = Math.random() * 3;
    if (computerNumber < 1) {
        return "Rock";
    }
    else if (computerNumber < 2) {
        return "Paper";
    }
    else {
        return "Scissors";
    }
}

function playRound(playerSelection, computerSelection, container) {
    let playerSelectionUpper = playerSelection.toUpperCase();
    const addResult = document.createElement("div");
    if (playerSelectionUpper === "ROCK") {
        if (computerSelection === "Rock") {
            addResult.innerText = "Tie game: ROCK and ROCK";
        }
        else if (computerSelection === "PAPER") {
            addResult.innerText = "You lose! PAPER beats ROCK.";
            computerScore++;
        }
        else {
            addResult.innerText = "You win! ROCK beats SCISSORS.";
            playerScore++;
        }
    }
    else if (playerSelectionUpper === "PAPER") {
        if (computerSelection === "Rock") {
            addResult.innerText = "You win! PAPER beats ROCK.";
            playerScore++;
        }
        else if (computerSelection === "Paper") {
            addResult.innerText = "Tie game! PAPER and PAPER.";

        }
        else {
            addResult.innerText = "You lose! SCISSORS beats PAPER.";
            computerScore++;

        }
    }
    else if (playerSelectionUpper === "SCISSORS") {
        if (computerSelection === "Rock") {
            addResult.innerText = "You lose! ROCK beats SCISSORS.";
            computerScore++;

        }
        else if (computerSelection === "Paper") {
            addResult.innerText = "You win! SCISSORS beats PAPER.";
            playerScore++;

        }
        else {
            addResult.innerText = "Tie game! SCISSORS and SCISSORS.";
        }
    }

    addResult.innerText = `Round ${rounds}: ${addResult.innerText} Player score: ${playerScore}. Computer score: ${computerScore}`;
    if (playerScore >= 5) {
        addResult.innerText += ". Player has won!"
    } else if (computerScore >= 5) {
        addResult.innerText += ". Computer has won!"
    }

    container.append(addResult);
    rounds++;


}

const rockInput = document.querySelector(".Rock");
const paperInput = document.querySelector(".Paper");
const scissorsInput = document.querySelector(".Scissors");
const container = document.querySelector(".container");
console.log(rockInput);

rockInput.addEventListener("click", () => {
    if (playerScore < 5 && computerScore < 5) {
        playRound("Rock", getComputerChoice(), container)
    }
});
paperInput.addEventListener("click", () => {
    if (playerScore < 5 && computerScore < 5) {
        playRound("Paper", getComputerChoice(), container)
    }
});
scissorsInput.addEventListener("click", () => {
    if (playerScore < 5 && computerScore < 5) {
        playRound("Scissors", getComputerChoice(), container)
    }
});
