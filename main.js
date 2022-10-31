// This program first calls the startGame function.
// It Gets three event listeners for four buttons.
// First three buttons (rock, paper, scissors) calls playRound when clicked.
// playRound compares the player choice (one of the three buttons), with the
// computer choice, which is received from getComputerChoice.
// playRound passes the result of the round to the results function.
// The results function takes the argument and iterates on the global
// variables. It also calls the reset function when the global constant for the
// NUMBER_OF_ROUNDS has been reached.
// The results function also calls the updateDOM function to update the
// HTML DOM so the player can see the results of the round.
// When the gameCount reaches the same number as NUMBER_OF_ROUNDS, it calls
// the handleWinner function, which displays who won.
// The reset function can be pressed at any time to reset the score and game count.

const ROCK = "Rock";
const PAPER = "Paper";
const SCISSORS = "Scissors";
const NUMBER_OF_ROUNDS = 5;

let playerScore = 0;
let computerScore = 0;
let drawCount = 0;
let gameCount = 0;

startGame();

// Listen for click event on each button, then the game continues.
function startGame()
{
    const rock = document.querySelector("#rock"); // get button element (from id)
    const paper = document.querySelector("#paper");
    const scissors = document.querySelector("#scissors");
    const resetBtn = document.querySelector("#reset");

    // Listen for a click event at each button.
    // Second parameter needs to be wrapped around a function to work, otherwise
    // the second parameter is the return value, rather than a function.
    rock.addEventListener('click', () => playRound(ROCK, getComputerChoice())); 
    paper.addEventListener('click', () => playRound(PAPER, getComputerChoice()));
    scissors.addEventListener('click',() => playRound(SCISSORS, getComputerChoice()));
    resetBtn.addEventListener('click', () => reset());

}

// function gets a random value and returns it
function getComputerChoice()
{
    // Returns a random integer from 1 to 3
    let choice = Math.floor(Math.random() * 3) + 1;
    
    if(choice == 1)
        return PAPER;
    else if(choice == 2)
        return ROCK;
    else
        return SCISSORS;
}

// function determines who the winner of the round is
function playRound(player, computer)
{
   // console.log(`You have chosen ${player}.\tThe computer chose ${computer}.`)

    if(player == PAPER)
    {
        if(computer == PAPER)
        {
            results("Draw"); // call results function and pass the result of the round
        }
        else if(computer == ROCK)
        {
            results("Win");
        }
        else
        {
            results("Loss");
        }
    }
    else if(player == ROCK)
    {
        if(computer == PAPER)
        {
            results("Loss");
        }
        else if(computer == ROCK)
        {
            results("Draw");
        }
        else
        {
            results("Win");
        }
    }
    else // Player chose "Scissors"
    {
        if(computer == PAPER)
        {
            results("Win");
        }
        else if(computer == ROCK)
        {
            results("Loss");
        }
        else
        {
            results("Draw");
        }
    }
}

// The results function iterates on the global win, loss, draw, and game count
// values. Calls the reset function when the game ends.
function results(res)
{
    // if we have finished the last game and the player clicks again, reset global values
    if(gameCount == NUMBER_OF_ROUNDS) 
    {
        reset();
    }

    gameCount += 1;

    if(res == "Win"){
        playerScore += 1;
    }

    if(res == "Loss"){
        computerScore += 1;
    }

    if(res == "Draw"){
        drawCount += 1;
    }

    updateDOM();
}

// Resets the scores, game count, and removes the last winner.
function reset()
{
    gameCount = 0;
    playerScore = 0;
    computerScore = 0;
    drawCount = 0;
    updateDOM();
    handleWinner();
}

// The updateDom function is responsible for updating the DOM with the global
// scores.
function updateDOM()
{
    const wins = document.querySelector("#wins");
    const losses = document.querySelector("#losses");
    const draws = document.querySelector("#draws");
    const games = document.querySelector("#games");

    wins.textContent = 'Player score: ' + playerScore.toString();
    losses.textContent = 'Computer score: ' + computerScore.toString();
    draws.textContent = 'Draws: ' + drawCount.toString();
    games.textContent = 'Round: ' + gameCount.toString();

    if(gameCount == NUMBER_OF_ROUNDS) // final round
    {
        handleWinner();
    }
}

// Shows who won.
function handleWinner()
{
    const winnerPara = document.querySelector("#winner"); // get element

    if(gameCount == NUMBER_OF_ROUNDS) 
    {
        let whoWon = "";

        if(playerScore > computerScore)
        {
            whoWon = "The Player Wins";
        }
        else if(computerScore > playerScore)
        {
            whoWon = "The Computer Wins";
        }
        else
        {
            whoWon = "No One Wins"
        }
        
        winnerPara.textContent = whoWon.toString(); // display who won
    }
    else
        winnerPara.textContent = ""; // reset
}