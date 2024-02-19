let userScore = 0;
let CompScore = 0;

const choices = document.querySelectorAll(".choice");
const msg  = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

// Genrate Computer Choice
const genChoice = () =>{
    const options = ["stone","paper","scissors"];
    const randIndex = Math.floor(Math.random() * 3);
    return options[randIndex];
}

//Draw Game
const Draw = () =>{
    // console.log("Game was Draw");
    msg.innerText = "Game Draw !";
    msg.style.backgroundColor = "#081b31";
}

// User win or not
const showWinner = (userWin) =>{
    if(userWin){
        userScore++;
        userScorePara.innerText = userScore;

        // console.log("You Win");
        msg.innerText = "You Win !";
        msg.style.backgroundColor = "green";
    }
    else{
        CompScore++;
        compScorePara.innerText = CompScore;

        // console.log("You Lose");
        msg.innerText = "You Lose !";
        msg.style.backgroundColor = "red";
    }
}

// Main Function
const playGame = (userChoice) =>{
    // console.log("Choice was clicked",userChoice);

    const compChoice = genChoice();
    // console.log("Choice was clicked",compChoice);

    let userWin = true;

    if(userChoice === compChoice){
        //Game Draw
        Draw();
        return;
    }
    else{
        if(userChoice === "rock"){
            // paper , scissors
            userWin = compChoice === "paper" ? false : true;
        }
        else if(userChoice === "paper"){
            //rock , scissors
            userWin = compChoice === "scissors" ? false : true;
        }
        else if(userChoice === "scissors"){
            //rock , paper
            userWin = compChoice === "rock" ? false : true;
        }
    }
    showWinner(userWin);
}


choices.forEach( (choice) => {
    choice.addEventListener("click" , () =>{
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    })
})