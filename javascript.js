//get player choice
//computer makes random choice (done)
//compare computer and placer choice
//decide winner
const choice = ["rock","paper","scissors"]

function getComputerSelection() {
    let rand = Math.floor(Math.random() * 3);    //rolls a random number between 0 and 2
    return choice[rand];    //returns the item at location (rand) from the array.
}

console.log(getComputerSelection());