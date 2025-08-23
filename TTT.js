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


function gameLogic(player1, player2){
    const displayWinner = document.querySelector(".results");

    function evalGame(){
        if (gameBoard.winningCombos.some(combo => combo.every(index => gameBoard.board[index] === player1.markerChoice))){
            console.log(`${player1.name} wins!`);
            displayWinner.textContent = `${[player1.name]} wins!`;
        } else if (gameBoard.winningCombos.some(combo => combo.every(index => gameBoard.board[index] === player2.markerChoice))){
            console.log(`${player2.name} wins!`);
            displayWinner.textContent = `${[player2.name]} wins!`;
        } else {
            console.log(`No one wins`);
            displayWinner.textContent = `Both of you are losers`;
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
    console.log(player1.name);
    console.log(player2.name);

})

const displayMarkers = document.querySelector(".gameBoard");
let playerXturn = true;

displayMarkers.addEventListener('click', (e) => {
    const putMarker = e.target;
    const index = putMarker.dataset.index;
    if (playerXturn && gameBoard.board[index] === ""){
        gameBoard.board[index] = player1.marker;
        putMarker.textContent = player1.markerChoice;
        playerXturn = false; 
    } else if (!playerXturn && gameBoard.board[index] === "") {
        gameBoard.board[index] = player2.markerChoice;
        putMarker.textContent = player2.markerChoice;
        playerXturn = true; 
    }

    gameLogic(player1, player2);
});

const restart = document.querySelector(".restart");
restart.addEventListener('click', () => {
    
})