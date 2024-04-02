let userScore=0;
let compScore=0;

const choices=document.querySelectorAll(".choice");
const msg=document.querySelector( "#msg" ); 
const userScorePara=document.querySelector("#user-score");
const compScorePara = document.querySelector("#computer-score");

function myCofettiAnimation() {
    var count = 400;
    var defaults = {
        origin: { y: 0.7 },
        spread: 360,
        colors: ['#ff6600', '#ff0000', '#ffee00','#1eff00','#00ffc8','#0084ff','#00eeff','#8400ff','#ff00dd','#ff00c8','#0400ff']
    };

    function fire(particleRatio, opts) {
        confetti({
            ...defaults,
            ...opts,
            particleCount: Math.floor(count * particleRatio)
        });
    }

    fire(0.25, {
        spread: 26,
        startVelocity: 55,
    });
    fire(0.2, {
        spread: 60,
    });
    fire(0.35, {
        spread: 100,
        decay: 0.91,
        scalar: 0.8
    });
    fire(0.1, {
        spread: 120,
        startVelocity: 25,
        decay: 0.92,
        scalar: 1.2
    });
    fire(0.1, {
        spread: 120,
        startVelocity: 45,
    });
};

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
        myCofettiAnimation();
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
