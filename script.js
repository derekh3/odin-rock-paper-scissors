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

function playRound(playerSelection, computerSelection) {
    let playerSelectionUpper = playerSelection.toUpperCase();
    if (playerSelectionUpper === "ROCK") {
        if (computerSelection === "Rock") {
            return "Tie game! ROCK and ROCK.";
        }
        else if (computerSelection === "PAPER") {
            return "You lose! PAPER beats ROCK.";
        }
        else {
            return "You win! ROCK beats SCISSORS.";
        }
    }
    else if (playerSelectionUpper === "PAPER") {
        if (computerSelection === "Rock") {
            return "You win! PAPER beats ROCK.";
        }
        else if (computerSelection === "Paper") {
            return "Tie game! PAPER and PAPER.";
        }
        else {
            return "You lose! SCISSORS beats PAPER.";
        }
    }
    else if (playerSelectionUpper === "SCISSORS") {
        if (computerSelection === "Rock") {
            return "You lose! ROCK beats SCISSORS.";
        }
        else if (computerSelection === "Paper") {
            return "You win! SCISSORS beats PAPER.";
        }
        else {
            return "Tie game! SCISSORS and SCISSORS.";
        }
    }
    else {
        return "I don't recognize the player's choice";
    }
}

function game() {
    let playerScore = 0;
    let computerScore = 0;
    for (i = 1; i <= 5; i++) {
        let result = playRound(prompt("Rock, Paper, or Scissors?"), getComputerChoice());
        console.log(result);
        if (result.substring(0, 5) === "You w") {
            playerScore++;
        }
        else if (result.substring(0, 5) === "You l") {
            computerScore++;
        } else {

        }
        console.log(`Player score is ${playerScore} and computer score is ${computerScore}`);
    }
    if (playerScore > computerScore) {
        console.log("You win the set!")
    }
    else if (playerScore < computerScore) {
        console.log("You lose the set!")
    }
    else {
        console.log("The set is tied!")
    }
}

game();