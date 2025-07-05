


let humanScore =0;
let computerScore =0;


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

function getHumanChoice(){
     return prompt("Choose rock, papers ,scissors :");
}

function playRound(humanChoice, computerChoice) {
    humanChoice=humanChoice.toLowerCase();


    if (humanChoice===computerChoice){
        console.log("pooorimone ith samanila");
    }
    else if (humanChoice==="rock" && computerChoice==="scissor" 
    ||  humanChoice==="scissor" && computerChoice==="paper" 
    ||  humanChoice==="paper" && computerChoice==="rock"){
                humanScore++;
                console.log("you win naayinte mon");}
    else{
        computerScore++;
    console.log("computer jayichhh!!");
}
}


function playGame(){
humanScore =0;
computerScore =0;

for (i=0;i<5;i++){
    let humanChoice= getHumanChoice();
let computerChoice= getComputerChoice();

    playRound(humanChoice, computerChoice);
console.log("your score " + humanScore);
console.log("computer :" + computerScore);
}


 

    if (humanScore>computerScore){
        console.log("you wins !!!! yayyy ");
        
    }
    else if (humanScore<computerScore){
        console.log("you lose hahhahahha nigga ");
    }
    else{
        console.group("its a tie")
    }


}

playGame();
