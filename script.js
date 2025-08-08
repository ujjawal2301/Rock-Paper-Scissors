let userScore = 0;
let compScore = 0;
const result = document.querySelector("#res-board");
const choices = document.querySelectorAll(".choice");
const userPoint = document.querySelector("#user-point");
const comPoint = document.querySelector("#comp-point");

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const choiceID = choice.getAttribute("id");
        let userChoice = choiceID;
        playGame(userChoice);
        getComChoice();

    });
});

const playGame = (userChoice) => {
    let compChoice = getComChoice();
    if (userChoice === compChoice) {
        drawGame();
    } else {
        let userWin = true;
        if (userChoice === "rock") {
            // comChoice paper or scissors
            userWin = compChoice === "paper" ? false : true;
        } else if (userChoice === "paper") {
            // compChoice scisssors or rock
            userWin = compChoice === "scissors" ? false : true;
        } else {
            // compChoice rock or paper 
            userwin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin, userChoice, compChoice);
    }
}


let showWinner = (userWin, userChoice, compChoice) => {
    if (userWin === true) {
        // console.log("You Won");
        userScore++;
        userPoint.innerText = userScore;
        result.innerText = `You Won! your ${userChoice} beats ${compChoice}`;
        result.style.backgroundColor = "green";
    } else {
        // console.log("Computer Wins");
        compScore++;
        comPoint.innerText = compScore;
        result.innerText = `You loose! ${compChoice} beats your ${userChoice}`;
        result.style.backgroundColor = "red";
    }
}

let drawGame = () => {
    // console.log("The was draw!!");
    result.innerText = "Game Draw! Play Again";
    result.style.backgroundColor = "#bdc3c7";
}

const getComChoice = () => {
    const option = ["rock", "paper", "scissors"];
    let compChoice = option[Math.floor(Math.random() * 2)];
    return compChoice;
}


