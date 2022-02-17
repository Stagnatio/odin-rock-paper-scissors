const rockBtn = document.getElementById('rockBtn');
const paperBtn = document.getElementById('paperBtn');
const scissorsBtn = document.getElementById('scissorsBtn');

rockBtn.addEventListener('click', () => handleClick('rock'));
paperBtn.addEventListener('click', () => handleClick('paper'));
scissorsBtn.addEventListener('click', () => handleClick('scissors'));

function computerPlay() {
    const choice = Math.floor(Math.random() * 3);
    if (choice === 0) return "rock";
    else if (choice === 1) return "paper";
    else if (choice === 2) return "scissors";
}

function playRound(playerSelection, computerSelection) {
    while (playerSelection === computerSelection) {
        console.log("Same choice, trying again.");
        computerSelection = computerPlay();
    }

    if (playerSelection === "rock") {
        if (computerSelection === "paper") return "Paper beats rock, computer wins!";
        if (computerSelection === "scissors") return "Rock beats scissors, player wins!";
    }

    if (playerSelection === "paper") {
        if (computerSelection === "rock") return "Paper beats rock, player wins!";
        if (computerSelection === "scissors") return "Scissors beats paper, computer wins!";
    }

    if (playerSelection === "scissors") {
        if (computerSelection === "paper") return "Scissors beats paper, player wins!";
        if (computerSelection === "rock") return "Rock beats scissors, computer wins!";
    }
}

function handleClick(playerSelection) {
    const computerSelection = computerPlay();
    playRound(playerSelection, computerSelection);
    console.log(playerSelection);
    console.log(playRound(playerSelection,computerSelection));
}