#! /usr/bin/env node
import randomInteger from "random-int";
import figlet from "figlet";
import chalk from "chalk";
import inquirer from "inquirer";

const select = async()=>{
    const moree = await inquirer.prompt([
        {
            type:"number",
            name: "feedback",
            message: "Enter 1 for playing once more otherwise 2:",
        },
    ])
    if(moree.feedback == 1){
        welcome()
    }
    else{
        console.log(chalk.bgMagentaBright("Goodbye!, See you next time."));
        
    }
}

const welcome = async () => {
    const input = await inquirer.prompt([
        {
            type:"list",
            name: "userChoice",
            message: "Select your operation",
            choices:["rock","paper","scissors"],
        },
])
let choices = ["rock", "paper", "scissors"]
let compChoice = randomInteger(0,2);
const computerChoice = choices[compChoice]
let outcome;
if(computerChoice === input.userChoice){
    outcome = "Draw";
}
else if(computerChoice === "rock" && input.userChoice === "paper"){
    outcome = "Player Wins!"
}
else if(computerChoice === "rock" && input.userChoice === "scissors"){
    outcome = "Computer Wins!"
}
else if(computerChoice === "paper" && input.userChoice === "rock"){
    outcome = "Computer Wins!"
}
else if(computerChoice === "paper" && input.userChoice === "scissors"){
    outcome = "Player Wins!"
}
else if(computerChoice === "scissors" && input.userChoice === "rock"){
    outcome = "Player Wins!"
}
else if(computerChoice === "scissors" && input.userChoice === "paper"){
    outcome = "Computer Wins!"
}
console.log("Computer chooses: "+computerChoice);
console.log("Player chooses: "+input.userChoice);
console.log(outcome);
select()
}
await welcome()