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
        placeMarker(index){
            if (gameBoard.board[index] === ""){
                gameBoard.board[index] = this.markerChoice; 
            } else {
                console.log(`oops! spot already taken. whomp whomp.`);
            };
        },
    }
}

function gameLogic(player1, player2){
    let eval1 = player1.markerChoice;
    let eval2 = player2.markerChoice; 
    function evalGame(){
        if (gameBoard.winningCombos.some(combo => combo.every(index => gameBoard.board[index] === eval1))){
            console.log(`${eval1} wins!`)
        } else if (gameBoard.winningCombos.some(combo => combo.every(index => gameBoard.board[index] === eval2))){
            console.log(`${eval2} wins!`)
        } else {
            console.log(`No one wins`)
        }
    };
    evalGame()
}


const p1 = Player("mena", "x");
const p2 = Player("notMena", "o");