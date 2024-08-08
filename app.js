let userScore=0;
let compScore=0;

const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");

let userScorePara=document.querySelector("#user-score");
let compScorePara=document.querySelector("#comp-score");

const genCompChoice=()=>{
    const options=["rock", "paper", "scissors"];
    const randomIdx=Math.floor(Math.random()*3);
    return options[randomIdx];
}
const drawGame=()=>{
    console.log("Game was draw");
    msg.innerText = "Game was draw play again";
    msg.style.backgroundColor="#081b31";
}

const showWinner=(userWin, userChoice, compChoice)=>{
    if(userWin){
        userScore++;
        userScorePara.innerText = userScore;
        console.log("You win!");
        msg.innerText = `You win! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor="green";
    }else{
        compScore++;
        compScorePara.innerText = compScore;
        console.log("You lose.");
        msg.innerText =` You lose.  ${compChoice} beats Your ${userChoice}`;
        msg.style.backgroundColor="red";
        
    }
}
const playGame=(userChoice)=>{
   console.log("user choice =",userChoice);
   //generate comp choice
   const compChoice=genCompChoice();
   console.log("comp choice =",compChoice);

   if(userChoice===compChoice){
    drawGame();
   }else{
    let userWin=true;
    if(userWin==="rock"){
        //scissor , paper
       userWin= compChoice==="paper"?false:true;
    }else if(userWin==="paper"){
        userWin=compChoice==="scissor"?false:true;
    }else{
        //rock, paper
       userWin= compChoice==="rock"?false:true;
    }
    showWinner(userWin, userChoice, compChoice);
   }
}
choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id");
        playGame(userChoice);
    })
})
