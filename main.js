const NUMBER_OF_ROUNDS = 5;

// function gets a random value and returns it
function getComputerChoice()
{
    // Returns a random integer from 1 to 3
    let choice = Math.floor(Math.random() * 3) + 1;
    
    if(choice == 1)
        return "Paper";
    else if(choice == 2)
        return "Rock";
    else
        return "Scissors";
}

// function gets player input and returns it
function getPlayerChoice()
{
   let choice = prompt("Rock, Paper, or Scissors?");

    if(choice === null) // if the game was cancelled
    {
        return ""; // returns empty string
    }

   if(choice.toUpperCase() == "PAPER")
   {
        return "Paper";
   }
   else if(choice.toUpperCase() == "ROCK")
   {
        return "Rock";
   }
   else if(choice.toUpperCase() == "SCISSORS")
   {
        return "Scissors";
   }
   else
   {
        alert("Not valid, try again.");
        getPlayerChoice();
   }
}


// function determines who the winner of the round is
function playRound(player, computer)
{
    if(player == "")
        return;

    console.log(`You have chosen ${player}.\tThe computer chose ${computer}.`)

    if(player == "Paper")
    {
        if(computer == "Paper")
        {
            return "Draw";
        }
        else if(computer == "Rock")
        {
            return "Win";
        }
        else
        {
            return "Loss";
        }
    }
    else if(player == "Rock")
    {
        if(computer == "Paper")
        {
            return "Loss";
        }
        else if(computer == "Rock")
        {
            return "Draw";
        }
        else
        {
            return "Win";
        }
    }
    else // Player chose "Scissors"
    {
        if(computer == "Paper")
        {
            return "Win";
        }
        else if(computer == "Rock")
        {
            return "Loss";
        }
        else
        {
            return "Draw";
        }
    }
}

// plays a best of 5
function game()
{
    let wins = 0;
    let draws = 0;
    let losses = 0;
    let cancel = 0;

    for(i = 1; i <= NUMBER_OF_ROUNDS; i++)
    {
        player = getPlayerChoice();
        if(player == "") // test to see if cancelled
        {
            cancel = 1;
            break; // breaks out of the loop
        }

        let round = playRound(player, getComputerChoice());

        if(round == "Win")
        {
            wins += 1;
            console.log(`You have won round ${i}!`);
        }
        else if(round == "Draw")
        {
            draws += 1;
            console.log(`Round ${i} is a tie!`);
        }
        else
        {
            losses += 1;
            console.log(`You have lost round ${i}!`);
        }
    }

    let results;

    if(cancel == 1) // if player cancelled the event return an array with -1
        results = [-1]; 
    else // otherwise return an array containing the wins, draws, losses
        results = [wins, draws, losses];
    
    return results;
}

function result()
{
   let gameArr = game(); // an array containing the results of the game

   if(gameArr[0] == -1) // if -1 is the first value, the game was cancelled
   {
        alert("The game has been cancelled.");
        return;
   }
   else
   {
        console.log(`Wins: ${gameArr[0]}\tDraws: ${gameArr[1]}\tLosses: ${gameArr[2]}`);

        if(gameArr[0] > gameArr[2])
            console.log("You win the game!");
        else if(gameArr[2] > gameArr[0])
            console.log("You lose the game!");
        else
            console.log("The game ended in a tie!");
   }
}

// calls result(), which calls game(), which calls playRound()
// 5 times, playRound() is passed the values from
// getPlayerChoice() and getComputerChoice() during each iteration. If
// the prompt is cancelled, the game is cancelled and the loop is terminated.
result(); 

function setRounds()
{

}