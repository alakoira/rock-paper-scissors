



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
    var result = "";

    if (yourSelection == computerSelection) {
        return `Tie! ${yourSelection} ties ${computerSelection}.`;
    }
    else {
     
        switch (yourSelection) {
            
            case 'rock':
                switch(computerSelection) {
                    case 'paper':
                        result = "You lose! Paper beats Rock.";
                        break;
                    case 'scissors':
                        result = "You win! Rock beats Scissors."
                        break;          
                }
                break;
            case 'paper':
                switch(computerSelection) {
                    case 'scissors':
                        result = "You lose! Scissors beats Paper.";
                        break;
                    case 'rock':
                        result = "You win! Paper beats Rock."
                        break;          
                }
                    break;
            case 'scissors':
                switch(computerSelection) {
                    case 'rock':
                        result = "You lose! Rock beats Scissors.";
                        break;
                    case 'paper':
                        result = "You win! Scissors beats Paper."
                        break;          
                }
                break;
        }
    return result;
    }
}
const playerSelection = "rock";
const computerSelection = computerPlay();

console.log(playRound(playerSelection,computerSelection));