const rockBtn = document.getElementById('rockBtn');
const paperBtn = document.getElementById('paperBtn');
const scissorsBtn = document.getElementById('scissorsBtn');

rockBtn.addEventListener('click', () => handleClick('rock'));
paperBtn.addEventListener('click', () => handleClick('paper'));
scissorsBtn.addEventListener('click', () => handleClick('scissors'));

let playerScore = 0;
let computerScore = 0;
let roundCount = 0;

const para = document.createElement("p");
para.setAttribute("id", "p1");
const node = document.createTextNode(
    `Player Score: ${playerScore} Computer Score: ${computerScore}`);
para.appendChild(node);
const element = document.getElementById("score");
element.appendChild(para);

function computerPlay() {
    const choice = Math.floor(Math.random() * 3);
    if (choice === 0) return "rock";
    else if (choice === 1) return "paper";
    else if (choice === 2) return "scissors";
}

function updateScore(winner) {
    if (winner === 'player') playerScore ++;
    else if (winner === 'computer') computerScore ++;
    else console.log('error');
}

function playRound(playerSelection, computerSelection) {
    while (playerSelection === computerSelection) {
        console.log("Same choice, trying again.");
        computerSelection = computerPlay();
    }

    if (playerSelection === "rock") {
        if (computerSelection === "paper") {
            updateScore('computer');
            return "Paper beats rock, computer wins!";
        }
            
        if (computerSelection === "scissors") {
            updateScore('player');
            return "Rock beats scissors, player wins!";
        }
    }

    if (playerSelection === "paper") {
        if (computerSelection === "rock") {
            updateScore('player');
            return "Paper beats rock, player wins!";
        }
            
        if (computerSelection === "scissors") {
            updateScore('computer');
            return "Scissors beats paper, computer wins!";
        }
    }

    if (playerSelection === "scissors") {
        if (computerSelection === "paper") {
            updateScore('player');
            return "Scissors beats paper, player wins!";
        }
            
        if (computerSelection === "rock") {
            updateScore('computer');
            return "Rock beats scissors, computer wins!";
        }
    }
}

function handleClick(playerSelection) {
    if (roundCount === 5) return;
    const computerSelection = computerPlay();

    const para = document.createElement("p");
    const node = document.createTextNode
        (playRound(playerSelection,computerSelection));
    para.appendChild(node);
    const messages = document.getElementById("messages");
    messages.appendChild(para);
    
    const pscore = document.getElementById("p1");
    pscore.textContent = 
        `Player Score: ${playerScore} Computer Score: ${computerScore}`;

    roundCount += 1;
    console.log(roundCount);
    const pfinish = document.createElement("p");
    const nfinish = document.createTextNode(``);
    pfinish.appendChild(nfinish);
    messages.appendChild(pfinish);
    if (roundCount === 5) {
        if (playerScore > computerScore) nfinish.textContent = `Player Wins!`;
        else nfinish.textContent = `Computer Wins!`;
    }
}

