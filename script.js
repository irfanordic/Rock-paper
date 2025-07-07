


let humanScore =0;
let computerScore =0;


document.getElementById("rock").addEventListener("click",()=> {
    document.getElementById("result").textContent= "you chose rock!";

});

document.getElementById("paper").addEventListener("click",()=> {
    document.getElementById("result").textContent="you chose paper";
});


document.getElementById("scissors").addEventListener("click",()=> {
    document.getElementById("result").textContent="you chose scissors";
});



function getComputerChoice (){
    let randomNum = Math.floor(Math.random()*3);
    if (randomNum===0){
        return "rock" ;
    }else if (randomNum === 1){
        return "scissor";
    } else{
        return "paper";
    }

}



function playRound(playerSelection) {
    const computerSelection= getComputerChoice();


    if (playerSelection===computerSelection){
        console.log("YOOOO ITS A TIE ");
    }
    else if (playerSelection==="rock" && computerSelection==="scissor" 
    || playerSelection==="scissor" && computerSelection==="paper" 
    ||  playerSelection==="paper" && computerSelection==="rock"){
                humanScore++;
                console.log("CONGRATSSS YOOO , YOU WON!!!!");}
    else{
        computerScore++;
    console.log("HAHAHAHA ,U JUST LOST TO A METAL PIECE!!!!");
}
}


function updateUI(message) {
document.getElementById("result").textContent=message;
        document.getElementById("score").textContent= 'human: ' + humanScore +'computer :'   +computerScore;


    if (humanScore===5 || computerScore===5){
            const winner = humanScore===5 ? "yo YOU WON THE GAME" : "METAL WON THE GAME";
            alert(winner);
            resetGame();
        }

}

function resetGame(){
    humanScore=0;
    computerScore=0;
    document.getElementById("result").textContent="game reset";
        document.getElementById("score").textContent= " human :0 | computer = 0   ";
}

document.getElementById("rock").addEventListener("click",()=>{
    const result= playRound("rock");
    updateUI(result);
})

document.getElementById("paper").addEventListener("click",()=>{
    const result= playRound("paper");
    updateUI(result);
});

document.getElementById("scissors").addEventListener("click",()=>{
    const result= playRound("scissors");
    updateUI(result);
});

