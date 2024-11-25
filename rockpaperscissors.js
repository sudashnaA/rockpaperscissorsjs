let container = document.querySelector('#container');
let choices = document.querySelector('#choicebuttons');
let pscoreelement = document.querySelector('#pscore');
let cscoreelement = document.querySelector('#cscore');
let roundactions = document.querySelector('#roundactions');
let roundresult = document.querySelector('#roundresult');

playerscore = 0;
computerscore = 0;

choices.addEventListener('click', (event) => {
    let target = event.target;
    let computerChoice = getComputerChoice();
    switch(target.id) {
        case 'rock':
            playRound(target.id,computerChoice);
            break;
        case 'paper':
            playRound(target.id,computerChoice);
            break;
        case 'scissors': 
            playRound(target.id,computerChoice);
            break;
    }
});

function getComputerChoice(){
    let choice = Math.floor(Math.random() * (3 - 1 + 1)) + 1;
    if (choice === 1){
        return "rock";
    }
    else if (choice === 2){
        return "paper";
    }
    else{
        return "scissors";
    }
}

function playRound(humanChoice, computerChoice){
    console.log("Your choice: " + humanChoice);
    console.log("Computer choice: " + computerChoice);
    let actionsmsg = `Player choice: ${humanChoice} Computer choice: ${computerChoice}`;
    let result;

    if (humanChoice == computerChoice){
        result = "Tie";
    }
    else if (humanChoice == "rock" && computerChoice == "scissors" 
        || humanChoice == "paper" && computerChoice == "rock" 
        || humanChoice == "scissors" && computerChoice == "paper"){
        result = "Player Wins";
        playerscore++;
    }
    else{
        result = "Computer Wins";
        computerscore++;
    }
    roundactions.textContent = actionsmsg;
    roundresult.textContent = result;
    pscoreelement.textContent = playerscore;
    cscoreelement.textContent = computerscore;

    if (playerscore === 5 || computerscore === 5){
        endGame();
    }
}

function endGame(){
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
    let msg;
    if (playerscore > computerscore){
        msg = "Player Wins";
    }
    else{
        msg = "Computer Wins"
    }
    let endscore = document.createElement("h1");
    let endmsg = document.createElement("h2"); 

    container.appendChild(endscore);
    container.appendChild(endmsg);

    endscore.textContent = `Player Score: ${playerscore} Computer Score: ${computerscore}`;
    endmsg.textContent = msg;
}
