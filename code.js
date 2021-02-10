



function computerPlay() {
    let rps = "";
    let rollNum = Math.random()*3+1;
    rollNum = parseInt(rollNum);
    switch (rollNum) {
        case 1:
            rps = "rock";
            break;
        case 2:
            rps = "paper";
            break;
        case 3:
            rps = "scissors";
            break;
        default:
            rps = "rock";
            break;
    }
    return rps;
}

function playRound(playerSelection, computerSelection) {
    const yourSelection = playerSelection.toLowerCase();
    let result = "";
    let winner = "";

    if (yourSelection == computerSelection) {
        result = `Tie! ${yourSelection} ties ${computerSelection}.`;
        winner = "tie";
    }
    else {
     
        switch (yourSelection) {
            
            case 'rock':
                switch(computerSelection) {
                    case 'paper':
                        result = "You lose! Paper beats Rock.";
                        winner = "com";
                        break;
                    case 'scissors':
                        result = "You win! Rock beats Scissors."
                        winner = "you";
                        break;          
                }
                break;
            case 'paper':
                switch(computerSelection) {
                    case 'scissors':
                        result = "You lose! Scissors beats Paper.";
                        winner = "com";
                        break;
                    case 'rock':
                        result = "You win! Paper beats Rock."
                        winner = "you";
                        break;          
                }
                    break;
            case 'scissors':
                switch(computerSelection) {
                    case 'rock':
                        result = "You lose! Rock beats Scissors.";
                        winner = "com";
                        break;
                    case 'paper':
                        result = "You win! Scissors beats Paper."
                        winner = "you";
                        break;          
                }
                break;
        }
    }
    console.log(result);
    return winner;
}

function game() {
    let yourWins = 0;
    let computerWins = 0;
    let ties = 0;
    let inputs = ["rock","paper","scissors"];
    for (let i = 0; i < 5; i++) {
        let playerSelection = "";
        
        while (true) {

        playerSelection = prompt().toLowerCase();
        
        if (!inputs.includes(playerSelection)) {
            alert("invalid selection, try again. (type: 'rock' , 'paper' or 'scissors')")
            continue;
        }
        break;
        
        }
        let computerSelection = computerPlay();
        
            switch (playRound(playerSelection,computerSelection)) {
                case "you":
                    yourWins++;
                    break;
                case "com":
                    computerWins++;
                    break;
                default:
                    ties++;
            }
        
    }
    if (yourWins > computerWins) {
        console.log(`Human is victorius! With the result of Human: ${yourWins} Computer: ${computerWins} Ties: ${ties}`)
    }
    if (yourWins < computerWins) {
        console.log(`Computer is victorius! With the result of Computer: ${computerWins}  Human: ${yourWins} Ties: ${ties}`)
    }
    if (yourWins == computerWins) {
        console.log(`After 5 rounds the game tied with the result of Computer: ${computerWins}  Human: ${yourWins} Ties: ${ties}, Nobody wins!`)
    }
    
}

game();
