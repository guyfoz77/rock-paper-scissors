//get player choice (done)
//computer makes random choice (done)
//compare computer and placer choice
//decide winner

//Validate user input?

const choice = ["rock","paper","scissors"];
let victory;

function getPlayerChoice() {
    return selection = (prompt("Rock, paper or scissors?")).toLowerCase(); //obtains a selection from the user and converts it to lower case.
}

function getComputerChoice() {
    let rand = Math.floor(Math.random() * 3);    //rolls a random number between 0 and 2
    return choice[rand];    //returns the item at location (rand) from the array.
}

function checkVictory(playerChoice, computerChoice) {
    if (playerChoice == computerChoice) {   //checks for a draw
        victory = "draw"
    } else if (computerChoice == "rock") {      //these else if statements check each computerChoice against player choice and...
        switch(playerChoice) {                      // ...determines a victor.
            case "paper": victory = "win";
            break;
            case "scissors": victory = "lose";
            break;
            default: victory = "invalidSelection";      //these default selections fire if an invalid input is passed by the user.
        }   
    } else if (computerChoice == "paper") {
        switch(playerChoice) {
            case "scissors": victory = "win";
            break;
            case "rock": victory = "lose";
            break;
            default: victory = "invalidSelection";
        } 
    } else if (computerChoice == "scissors") {
        switch(playerChoice) {
            case "rock": victory = "win";
            break;
            case "paper": victory = "lose";
            break;
            default: victory = "invalidSelection";
        } 
    }
    return victory;
}

let computerChoice = getComputerChoice();
let playerChoice = getPlayerChoice();
console.log(`computer ${computerChoice}`);
console.log(`player ${playerChoice}`);
console.log(checkVictory(playerChoice, computerChoice));