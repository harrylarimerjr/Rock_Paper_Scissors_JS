let rockBtn = document.getElementById("rockBtn");
let paperBtn = document.getElementById("paperBtn");
let scissorsBtn = document.getElementById("scissorsBtn");
let compRockBtn = document.getElementById("compRockBtn");
let compPaperBtn = document.getElementById("compPaperBtn");
let compScissorsBtn = document.getElementById("compScissorsBtn");
let rpsLog = document.getElementById("rpsLog");
let playerScoreNode = document.getElementById("playerScore");
let computerScoreNode = document.getElementById("computerScore");
let btnTest = document.getElementById("btn");
let resetBtn = document.getElementById("resetBtn");
let playerScore = 0;
let computerScore = 0;


activateListeners();
resetBtn.addEventListener("click", resetBtnFunc);

// Functions //

function activateListeners() {
    rockBtn.addEventListener("click", rockBtnFunc);
    paperBtn.addEventListener("click", paperBtnFunc);
    scissorsBtn.addEventListener("click", scissorsBtnFunc);
}

function deactivateListeners() {
    rockBtn.removeEventListener("click", rockBtnFunc);
    paperBtn.removeEventListener("click", paperBtnFunc);
    scissorsBtn.removeEventListener("click", scissorsBtnFunc);
}

function rockBtnFunc() {
    paperBtn.classList.remove("btnClicked");
    scissorsBtn.classList.remove("btnClicked");
    rockBtn.classList.add("btnClicked");
    let scoreCode = playRound("rock");
    setScore(scoreCode);
    let gameOver = winCheck();
    if (gameOver) {
        deactivateListeners();
    }
}

function paperBtnFunc() {
    scissorsBtn.classList.remove("btnClicked");
    rockBtn.classList.remove("btnClicked");
    paperBtn.classList.add("btnClicked");
    let scoreCode = playRound("paper");
    setScore(scoreCode);
    let gameOver = winCheck();
    if (gameOver) {
        deactivateListeners();
    }
}

function scissorsBtnFunc() {
    rockBtn.classList.remove("btnClicked");
    paperBtn.classList.remove("btnClicked");
    scissorsBtn.classList.add("btnClicked");
    let scoreCode = playRound("scissors");
    setScore(scoreCode);
    let gameOver = winCheck();
    if (gameOver) {
        deactivateListeners();
    }
}

function resetBtnFunc() {
    rpsLog.textContent = "";
    playerScore = 0;
    computerScore = 0;
    playerScoreNode.textContent = "Player: " + playerScore;
    computerScoreNode.textContent = "Computer: " + computerScore;
    activateListeners();
    let winHead = document.querySelector("h3")
    if (winHead) {
        winHead.remove();
    }
    compRockBtn.classList.remove("computerRedSelect");
    compPaperBtn.classList.remove("computerRedSelect");
    compScissorsBtn.classList.remove("computerRedSelect");
    rockBtn.classList.remove("btnClicked");
    paperBtn.classList.remove("btnClicked");
    scissorsBtn.classList.remove("btnClicked");
}

function playRound(playerSelection) {

    let computerSelection = getComputerChoice();
    let lineBreak = document.createElement("br");

    if (playerSelection === computerSelection) {
        let newNode = document.createTextNode("It's a draw!");
        rpsLog.appendChild(newNode);
        rpsLog.appendChild(lineBreak);
        return 0; //Draw
    }
    else if (playerSelection === "rock" && computerSelection === "paper") {
        let newNode = document.createTextNode("The computer wins!");
        rpsLog.appendChild(newNode);
        rpsLog.appendChild(lineBreak);
        return 2; //Computer wins
    }
    else if (playerSelection === "rock" && computerSelection === "scissors") {
        let newNode = document.createTextNode("You win!");
        rpsLog.appendChild(newNode);
        rpsLog.appendChild(lineBreak);
        return 1; //User wins
    }
    else if (playerSelection === "paper" && computerSelection === "rock") {
        let newNode = document.createTextNode("You win!");
        rpsLog.appendChild(newNode);
        rpsLog.appendChild(lineBreak);
        return 1;
    }
    else if (playerSelection === "paper" && computerSelection === "scissors") {
        let newNode = document.createTextNode("The computer wins!");
        rpsLog.appendChild(newNode);
        rpsLog.appendChild(lineBreak);
        return 2;
    }
    else if (playerSelection === "scissors" && computerSelection === "rock") {
        let newNode = document.createTextNode("The computer wins!");
        rpsLog.appendChild(newNode);
        rpsLog.appendChild(lineBreak);
        return 2;
    }
    else if (playerSelection === "scissors" && computerSelection === "paper") {
        let newNode = document.createTextNode("You win!");
        rpsLog.appendChild(newNode);
        rpsLog.appendChild(lineBreak);
        return 1;
    }   
}

function getComputerChoice() {
    let computerSelection = Math.floor(Math.random() * 3) + 1;

    if (computerSelection === 1) {
        changeBtnColor(compRockBtn);
        return "rock";
    }
    else if (computerSelection === 2) {
        changeBtnColor(compPaperBtn);
        return "paper";
    }
    else if (computerSelection === 3) {
        changeBtnColor(compScissorsBtn);
        return "scissors";
    }
}

function setScore(scoreCode) {
    if (scoreCode === 0) {
        return;
    }
    else if (scoreCode === 1) {
        ++playerScore;
        playerScoreNode.textContent = "Player: " + playerScore;
        return;
    }
    else if (scoreCode === 2) {
        ++computerScore;
        computerScoreNode.textContent = "Computer: " + computerScore;
        return;
    }
}

function winCheck() {
    if (playerScore === 5) {
        let winHead = document.createElement("h3");
        winHead.classList.add("winHead");
        let gameWinner = document.createTextNode("You win!");
        winHead.appendChild(gameWinner);
        document.body.insertBefore(winHead, btnTest);
        return true;
    }
    else if (computerScore === 5) {
        let winHead = document.createElement("h3");
        winHead.classList.add("winHead");
        let gameWinner = document.createTextNode("Computer wins!");
        winHead.appendChild(gameWinner);
        document.body.insertBefore(winHead, btnTest);
        return true;
    }
    else {
        return false;
    }
}

function changeBtnColor(btn) {
    compRockBtn.classList.remove("computerRedSelect");
    compPaperBtn.classList.remove("computerRedSelect");
    compScissorsBtn.classList.remove("computerRedSelect");
    btn.classList.add("computerRedSelect");
}

//Old Code from Web Dev Console Version:

// let userTotal = 0;
//             let computerTotal = 0;

//             do {
//                 let gameResult = game();
//                 if (gameResult === 1) {
//                     ++userTotal;
//                 }
//                 else if (gameResult === 2) {
//                     ++ computerTotal;
//                 }
//             } while (playAgain());

//             console.log("\n\n----------------------------------------");
//             console.log("Thanks for playing! Here is the final score.");
//             console.log("User: " + userTotal + " wins");
//             console.log("Computer: " + computerTotal + " wins");



// function game() {
//     let userWins = 0;
//     let computerWins = 0;
//     for (let i = 0; i < 5; i++) {
//         let userSelection = getUserChoice();
//         let computerSelection = getComputerChoice();
//         let roundResult = playRound(userSelection, computerSelection);
//         if (roundResult === 0) {
//             console.log("It's a draw!");
//             --i;
//         }
//         else if (roundResult === 1) {
//             console.log("You win!");
//             userWins++;
//         }
//         else if (roundResult === 2) {
//             console.log("The computer wins!");
//             computerWins++;
//         }
//     }
//     console.log("\n\n----------------------------------------");
//     console.log("RESULTS");
//     console.log("----------------------------------------");
//     console.log(`You won ${userWins} rounds.`);
//     console.log(`The computer won ${computerWins} rounds.`)
//     if (userWins > computerWins) {
//         console.log("You win!");
//         return 1;
//     }
//     else {
//         console.log("The computer wins!")
//         return 2;
//     }
// }


// function validateInput(userString) {
//     if (userString === "rock" ||
//         userString === "paper" ||
//         userString === "scissors") {
//             return true;
//         }
//     else {
//         return false;
//     }
// }



// function getUserChoice() {
    //     let validInput = false;
    //     let userInput = "initString";
    //     while (validInput === false) {
    //         userInput = prompt("Enter \"rock,\" \"paper,\" or \"scissors.\"");
    //         if (userInput !== null) {
    //             userInput = userInput.toLowerCase();
    //         }
    //         validInput = validateInput(userInput);
    //         if (validInput === false) {
    //             console.log("Please enter a valid answer.");
    //         }
    //     }
    //     return userInput;
    // }

    // function game(playerSelection) {
//     let userWins = 0;
//     let computerWins = 0;
//     let roundResult = playRound(playerSelection);
//     if (roundResult === 0) {
//         console.log ("It's a draw!");
//     }
//     else if (roundResult === 1) {
//         console.log("You win!");
//         userWins++;
//     }
//     else if (roundResult === 2) {
//         console.log("The computer wins!");
//         computerWins++;
//     }
// }


// function playAgain() {
//     let userSelection = prompt("Would you like to play again? (y/n)");
//     if (userSelection === "y" || userSelection === "Y") {
//         console.log("\n\n----------------------------------------");
//         return true;
//     }
//     else {
//         return false;
//     }
// }