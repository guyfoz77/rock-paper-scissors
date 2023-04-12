//clicking a button should make it smaller temporarily. 

const choice = ["rock","paper","scissors"];
let victory;    //this is used to store a string which will say wether the player wins, loses, draws or has input an invalid choice.
let playerScore = 0;
let computerScore = 0;

const buttons = document.querySelectorAll('.button');
const playerScoreElement = document.querySelector('#playerScore');
const compScoreElement = document.querySelector('#compScore');
const commentary = document.querySelector('.commentary');
const endScreenElement = document.querySelector('.endScreen');
const mainContainer = document.querySelector('.mainContainer');
const victoryText = document.querySelector('.victoryText');
const restarButton = document.querySelector('.restartButton');


buttons.forEach(button => {
    button.addEventListener('click', (e) => playGame(e.target.id))
});

restarButton.addEventListener('click', () => location.reload());


function getComputerChoice() {
    let rand = Math.floor(Math.random() * 3);    //rolls a random number between 0 and 2
    return choice[rand];    //returns the item at location (rand) from the array.
}

function checkVictory(playerChoice, computerChoice) {
    if (playerChoice == computerChoice) {   //checks for a draw
        victory = "It's a draw."
    } else if (computerChoice == "rock") {      //these else if statements check each computerChoice against player choice and...
        switch(playerChoice) {                      // ...determines a victor. It will also update the player/computer score accordingly.
            case "paper": {
                victory = "You win!";
                playerScore += 1; } 
            break;
            case "scissors": {
                victory = "You lose!";
                computerScore += 1; }
            break;
            default: victory = "invalidSelection";      //these default selections fire if an invalid input is passed by the user.
        }   
    } else if (computerChoice == "paper") {
        switch(playerChoice) {
            case "scissors": {
                victory = "You win!";
                playerScore += 1; }
            break;
            case "rock": {
                victory = "You lose!";
                computerScore += 1; }
            break;
            default: victory = "invalidSelection";
        } 
    } else if (computerChoice == "scissors") {
        switch(playerChoice) {
            case "rock": {
                victory = "You win!";
                playerScore += 1; }
            break;
            case "paper": {
                victory = "You lose!";
                computerScore += 1; }
            break;
            default: victory = "invalidSelection";
        } 
    }
    //put the score update code here

    playerScoreElement.textContent = `Player Score: ${playerScore}`;
    compScoreElement.textContent = `Computer Score: ${computerScore}`;
    
    if (computerScore >= 5) {
        endScreenElement.style.display = 'flex';
        mainContainer.style.display= 'none';
        victoryText.textContent = `You Lose! The final score is:
        Computer: ${computerScore}
        Player: ${playerScore}`;
    } else if (playerScore >= 5) {
        endScreenElement.style.display = 'flex';
        mainContainer.style.display= 'none';
        victoryText.textContent = `You Win! The final score is:
        Computer: ${computerScore}
        Player: ${playerScore}`;
    } else return victory;

}

function playGame(playerChoice) {      //This will play a game, and output the result of the game to the console.
    let computerChoice = getComputerChoice();
    commentary.textContent = `The computer chose ${computerChoice}, you chose ${playerChoice}, ${checkVictory(playerChoice, computerChoice)}`
}


let finalScore = `Computer:${computerScore} - Player:${playerScore}.`   //stores the scoreline after the games are played.
if (computerScore == playerScore) {     //this section will print the final result to the console.
    console.log("It's a draw! " + finalScore);
} else if (computerScore > playerScore) {
    console.log("You lose! " + finalScore);
} else {
    console.log("You win! " + finalScore);
}


