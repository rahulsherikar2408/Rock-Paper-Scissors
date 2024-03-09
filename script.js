let userScore=0;
let compScore=0;

const choices=document.querySelectorAll(".choice");
const msg=document.querySelector( "#msg" ); 
const userScorePara=document.querySelector("#user-score");
const compScorePara = document.querySelector("#computer-score");

const genComprChoice =()=>{
    const options=["rock","paper","scissors"];
    return options[Math.floor(Math.random()*options.length)];
};

const drawGame=()=>{
    msg.innerText="It's a tie!";
    msg.style.backgroundColor="#081b31";
};

const showWinner=(userWin,userChoice,comChoice)=>{
    if (userWin){
        userScore++;
        userScorePara.innerText=userScore;
        msg.innerText=`You Win! Your ${userChoice} beats ${comChoice}`;
        msg.style.backgroundColor="green";
    }
    else{
        compScore++;
        compScorePara.innerText=compScore;
        msg.innerText=`You Lost. Computer ${comChoice} beats ${userChoice}`;
        msg.style.backgroundColor="red";

    }
};

const playGame=(userChoice)=>{
    const comChoice= genComprChoice();

    if(userChoice===comChoice){
        drawGame();
    }
    else{
        let userWin=true;
        if(userChoice==="rock"){
            userWin=comChoice==="paper" ? false : true;
        }
        else if(userChoice==="paper"){
            userWin=comChoice==="scissors" ? false : true;
        }
        else{
            userWin=comChoice==="rock" ? false : true;
        }
        showWinner(userWin,userChoice,comChoice);
    }
}

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id");
        playGame(userChoice);
    });
});
