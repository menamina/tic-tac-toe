let gameBoard = {
    board: ["", "", "", "", "", "", "", "", ""],
    winningCombos: [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],  
        [2, 4, 6]
    ],

}

function Player(name, markerChoice){
    return {
        name,
        markerChoice,
    }
}

let playerXturn = true;
let gameOver = false;

function gameLogic(player1, player2){

    function evalGame(){
        if (gameBoard.winningCombos.some(combo => combo.every(index => gameBoard.board[index] === player1.markerChoice))){
            displayWinner.textContent = `${[player1.name]} wins!`;
            gameOver = true;
            return;
        } else if (gameBoard.winningCombos.some(combo => combo.every(index => gameBoard.board[index] === player2.markerChoice))){
            displayWinner.textContent = `${[player2.name]} wins!`;
            gameOver = true;
            return;
        } else if (!gameBoard.board.includes("")){
            displayWinner.textContent = `Both of you are losers`;
            gameOver = true;
        } else {
        displayWinner.textContent = "";
    }
    };
    evalGame()
}

const startGame = document.querySelector(".start");
let player1;
let player2;

startGame.addEventListener('click', () => {
    const playerName1 = document.querySelector(".p1Name").value;
    const playerName2 = document.querySelector(".p2Name").value;
    player1 = Player(playerName1, "X");
    player2 = Player(playerName2, "O");
    
})

const displayMarkers = document.querySelector(".gameBoard");
displayMarkers.addEventListener('click', (e) => {
    if (gameOver) return;
    const putMarker = e.target;
    const index = Number(putMarker.dataset.index);
    if (playerXturn && gameBoard.board[index] === ""){
        gameBoard.board[index] = player1.markerChoice;
        putMarker.textContent = player1.markerChoice;
        playerXturn = false; 
    } else if (!playerXturn && gameBoard.board[index] === "") {
        gameBoard.board[index] = player2.markerChoice;
        putMarker.textContent = player2.markerChoice;
        playerXturn = true; 
    }
    gameLogic(player1, player2);
});


const displayWinner = document.querySelector(".results");

const restart = document.querySelector(".restart");
restart.addEventListener('click', () => {
const index0 = document.querySelector(".index0");
const index1 = document.querySelector(".index1");
const index2 = document.querySelector(".index2");
const index3 = document.querySelector(".index3");
const index4 = document.querySelector(".index4");
const index5 = document.querySelector(".index5");
const index6 = document.querySelector(".index6");
const index7 = document.querySelector(".index7");
const index8 = document.querySelector(".index8");
    index0.innerHTML = "";
    index1.innerHTML = "";
    index2.innerHTML = "";
    index3.innerHTML = "";
    index4.innerHTML = "";
    index5.innerHTML = "";
    index6.innerHTML = "";
    index7.innerHTML = "";
    index8.innerHTML = "";

    gameOver = false;
    gameBoard.board = ["", "", "", "", "", "", "", "", ""];
    displayWinner.innerHTML = "";
})