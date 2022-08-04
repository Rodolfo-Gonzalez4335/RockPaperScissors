//
function getComputerChoice(){
    let randomNum = Math.floor(Math.random()*3);
    if (randomNum == 0) return 'Rock'
    else if (randomNum == 1) return 'Paper'
    else if (randomNum ==2 ) return 'Scissor'
    else return 'Error'
}
function capitalizeOnlyFirstCharacter(str){
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}

function playRound(playerSelection = "", computerSelection = ""){
    let playerChoice = capitalizeOnlyFirstCharacter(playerSelection);
    let  computerChoice= capitalizeOnlyFirstCharacter(computerSelection);

    if (playerChoice == computerChoice) return 'Tie'
    else if (playerChoice=='Rock' && computerChoice=="Paper" 
    || playerChoice=='Paper'  && computerChoice=='Scissor'
    || playerChoice=='Scissor' && computerChoice=="Rock")
        return 'You Lose! ' + computerChoice + ' beats ' + playerChoice;
    else
        return 'You Win! ' + playerChoice + ' beats ' + computerChoice; //could be wrong as undefined values will give a win
}

function game(){
    let playerScore=0, computerScore=0;
    while ( playerScore<5 && computerScore<5 ){
        let playerChoice = prompt("Choose between Rock, Paper, Scissor").toLowerCase()
        while (playerChoice != 'rock' && playerChoice != 'paper' && playerChoice!='scissor')
            playerChoice = prompt("Choose ONLY between Rock, Paper, Scissor").toLowerCase()
        let result = playRound(playerChoice,getComputerChoice());
        console.log(result)
        if (result.includes('Win'))
            ++playerScore;
        else if (result.includes('Lose'))
            ++computerScore;
    }
    if (playerScore==5) return "Player is first to 5 he wins!";
    if (computerScore==5) return "Computer is first to 5 he wins";
    
}

console.log(game());