
playerScore = 0;
computerScore = 0;

choice = ['rock','paper','scissors'];

function getComputerChoice(){
    const index= Math.floor(Math.random()*choice.length)
    return choice[index]
}

    document.getElementById('play-button').addEventListener("click", function() {
        const buttons = document.getElementsByClassName('button');
        for (let i = 0; i < buttons.length; i++) {
            buttons[i].classList.remove('disabled');
        }
        document.getElementById('play-button').style.display = "none";
        const scoreline = document.querySelector(".scoreline");
        scoreline.classList.remove("hidden");
    });

//Game logic

document.getElementsByClassName('button')[0].addEventListener("click", function(){
    const playerChoice = this.id
    const machineChoice = getComputerChoice()
    if (playerChoice === machineChoice){
        ;
    }
    if (playerChoice === 'rock' && machineChoice === 'paper' || playerChoice === 'paper' && machineChoice === 'scissors'|| playerChoice === 'scissors' && machineChoice === 'rock'){
        computerScore += 1
        document.getElementById('machine-score').textContent = computerScore
    }
    else{
        playerScore += 1
        document.getElementById('human-score').textContent = playerScore
    }
    if (parseInt(document.getElementById('machine-score').textContent) === 3 || parseInt(document.getElementById('human-score').textContent) === 3){
        if (parseInt(document.getElementById('machine-score').textContent) === 3){
            document.querySelector(".scoreline").classList.add("hidden")
            playerScore = 0
            computerScore = 0
            document.querySelector(".lose").classList.remove('hidden')
        }
        else{
            document.querySelector(".scoreline").classList.add("hidden")
            playerScore = 0
            computerScore = 0
            document.querySelector(".win").classList.remove('hidden')
        }
    }
})

//Restart the game

document.querySelectorAll(".retry").forEach(function(button) {
    button.addEventListener("click", function() {
        playerScore = 0;
        computerScore = 0;

        document.getElementById('human-score').textContent = playerScore;
        document.getElementById('machine-score').textContent = computerScore;

        const winElement = document.querySelector(".win");
        const loseElement = document.querySelector(".lose");

        if (!winElement.classList.contains('hidden')) {
            winElement.classList.add('hidden');
        }

        if (!loseElement.classList.contains('hidden')) {
            loseElement.classList.add('hidden');
        }

        document.querySelector(".scoreline").classList.remove("hidden");
    });
});






