//get player choice (done)
//computer makes random choice (done)
//compare computer and placer choice
//decide winner

//Validate user input?

const choice = ["rock","paper","scissors"]
let playerChoice

function getPlayerChoice() {
    return selection = (prompt("Rock, paper or scissors?")).toLowerCase(); //obtains a selection from the user and converts it to lower case.
}

function getComputerChoice() {
    let rand = Math.floor(Math.random() * 3);    //rolls a random number between 0 and 2
    return choice[rand];    //returns the item at location (rand) from the array.
}

console.log(getPlayerChoice());