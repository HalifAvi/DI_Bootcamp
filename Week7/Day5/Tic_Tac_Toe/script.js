
class Player {

    constructor(sign){

        this.sign = sign;
    }
}

class Board {

    constructor(){

        this.boardCellsArray = [];

        for(let i=0; i<9; i++){

            this.boardCellsArray.push("");
        }
    }
}

let cellDivsArray;
let userPlayer;
let computerPlayer;
let boardGame;
let posToPaint = 0;
let randomPosition;

const winCombos = [
    
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [6, 4, 2]
];

let statTheGame = choosenSign => {

    displayBoardGame();
    createTwoPlayerObj(choosenSign);
    createBoardObj();
    addEventsOnClickCellsBoard();





}

let createBoardObj = () => {

    boardGame = new Board();
}

let addEventsOnClickCellsBoard = () => {

    let cellDivsNodeList = document.querySelector('#mainGridContainer').children;
    cellDivsArray = [...cellDivsNodeList];

    cellDivsArray.forEach( cellDiv => {
        
        cellDiv.addEventListener('click', paintSignOnBoard);
    });
}

let paintSignOnBoard = e => {

    // Print new sign only if the clicked cell is empty
    if( boardGame.boardCellsArray[e.target.getAttribute('id')[e.target.getAttribute('id').length-1]] === "" ){

        e.target.textContent = userPlayer.sign;
        boardGame.boardCellsArray[e.target.getAttribute('id')[e.target.getAttribute('id').length-1]] = userPlayer.sign;

        randomPosition = e.target.getAttribute('id')[e.target.getAttribute('id').length-1];

        if(!(isBoardFull())){

            paintComputerChoise();
        }
    }
}

let paintComputerChoise = () => {
    
    // First check if there is an option to win then check if you need to block the player
    if(checkIfRemainOneToWin(computerPlayer.sign) || checkIfRemainOneToWin(userPlayer.sign)){

        cellDivsArray[posToPaint].textContent = computerPlayer.sign; 
        boardGame.boardCellsArray[posToPaint] = computerPlayer.sign;        
    }else{

        while( boardGame.boardCellsArray[randomPosition] !== ""){

            // Returns a random integer from 0 to 8:
            randomPosition = Math.floor(Math.random() * 9);
        }

        cellDivsArray[randomPosition].textContent = computerPlayer.sign; 
        boardGame.boardCellsArray[randomPosition] = computerPlayer.sign; 
    }

}

let isBoardFull = () => boardGame.boardCellsArray.every( boardCell => boardCell !== "");    


let checkIfRemainOneToWin = sign => {

    return winCombos.some( combination => is2CellsInCombinationTheSame(combination, sign) );
}

let is2CellsInCombinationTheSame = (positionArray, sign) => {

    let oneCellIsEmpty = false;
    let numOfEqualCells = 0;

    positionArray.forEach( cellPos => {

        boardGame.boardCellsArray[cellPos] === sign ? numOfEqualCells++ : posToPaint = cellPos;
        
        if(boardGame.boardCellsArray[cellPos] === ""){

            oneCellIsEmpty = true;
        }
    });

    return  (numOfEqualCells === 2 && oneCellIsEmpty) ? true : false;
}

let createTwoPlayerObj = choosenSign => {

    userPlayer = new Player(choosenSign);
    computerPlayer = new Player(chooseOppositeSign(choosenSign));
}

let chooseOppositeSign = choosenSign => choosenSign === 'O' ? 'X' : 'O'; 

let displayBoardGame = () => {

    let mainGridContainer = document.querySelector('#mainGridContainer');
    let h2 = document.querySelector('h2');
    let xBtt = document.querySelector('#xBtt');
    let oBtt = document.querySelector('#oBtt');
    h2.style.visibility = "hidden";
    xBtt.style.visibility = "hidden";
    oBtt.style.visibility = "hidden";
    mainGridContainer.style.visibility = "visible"; 
}











let xBtt = document.querySelector('#xBtt');
let oBtt = document.querySelector('#oBtt');

xBtt.addEventListener('click', function(){ statTheGame('X');});
oBtt.addEventListener('click', function(){ statTheGame('O');});

