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
    while (gameBoard.board !== ""){
    if (eval1 === gameBoard.board.contains[winningCombos]){
        console.log(`${eval1} wins!` )
    } else if (eval2 === gameBoard.board.contains[winningCombos]){
        console.log(`${eval2} wins!`)
    } else {
        console.log(`It's a tie`)
    };
}
     
}


const p1 = Player("mena", "x");
const p2 = Player("notMena", "o");

p1.placeMarker(0);
p2.placeMarker(1);
p1.placeMarker(2);
p2.placeMarker(3);
p1.placeMarker(4);
p2.placeMarker(5);
p1.placeMarker(6);
p2.placeMarker(7);
p1.placeMarker(8);
console.log(gameBoard.board);
console.log(gameLogic(p1, p2));