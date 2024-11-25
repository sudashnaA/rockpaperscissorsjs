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

function getHumanChoice(){
    let choice;
    let valid = false;
    while(!valid){
        choice = String(prompt("Please enter your choice (Rock, Paper or Scissors)")).toLowerCase();
        if (choice == "rock" || choice == "paper" || choice == "scissors"){
            valid = true;
        }
        else{
            console.log("Invalid input, must be Rock, Paper or Scissors");
        }
    }
    return choice
}

function playRound(humanChoice, computerChoice){
    console.log("Your choice: " + humanChoice);
    console.log("Computer choice: " + computerChoice);

    if (humanChoice == computerChoice){
        console.log("tie")
        return 2;
    }
    else if (humanChoice == "rock" && computerChoice == "scissors"){
        console.log("You win")
        return 0;
    }
    else if (humanChoice == "paper" && computerChoice == "rock"){
        console.log("You win")
        return 0;
    }
    else if (humanChoice == "scissors" && computerChoice == "paper"){
        console.log("You win")
        return 0; 
    }
    else{
        console.log("You lose")
        return 1;
    }
}

function playGame(){
    let round = 1;
    let humanscore = 0;
    let computerscore = 0;

    // five rounds in a game
    while (round <= 5){
        humanchoice = getHumanChoice();
        computerchoice = getComputerChoice();

        let outcome = playRound(humanchoice, computerchoice);

        if (outcome == 0){ //player won
            humanscore++;
        }
        else if (outcome == 1){ // computer won
            computerscore++
        }

        // log the round and current scores
        console.log("round: " + round.toString() +  " human score: " + humanscore + " computer score: " + computerscore)

        round++;
    }

    if (humanscore > computerscore){
        console.log("You win the game");
    }
    else if (humanscore < computerscore){
        console.log("You lose the game");
    }
    else {
        console.log("the game is tied");
    }
}

playGame();
