let playerScore = 0;
let computerScore = 0;

choice = ['rock','paper','scissors'];

function getComputerChoice(){
    const index= Math.floor(Math.random()*choice.length)
    return choice[index]
}

function playRound(playerChoice,computerChoice){
    playerChoice = prompt("What is your choice?")
    computerChoice = getComputerChoice()
    if (playerChoice=== computerChoice) {
        alert("You are tied")
    }
    else if (playerChoice==='rock' && computerChoice==='paper' || playerChoice==='paper' && computerChoice==='scissors' || playerChoice==='scissors' && computerChoice==='rock'){
        computerScore += 1
        alert("You lost")
        
    }
    else{
        playerScore += 1
        alert("You won")
    }
}


function game() {
    for (i=1; playerScore < 3 && computerScore <3; i++){
        playRound()
    }
    
}

game()