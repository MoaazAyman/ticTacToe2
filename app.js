let cells = document.querySelectorAll('.cell');
let statusText = document.querySelector('#statusText');
let restartBtn = document.querySelector('#restartBtn');
let winConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]
let options = ['', '', '', '', '', '', '', '', ''];
let currentPlayer = "X";
let running = false;

initializeGame();

function initializeGame() {
    cells.forEach(cell => cell.addEventListener('click', cellClicked)) 
    restartBtn.addEventListener('click', restartGame);
    statusText.textContent = `${currentPlayer}'s turn!`
    running = true;
}

function cellClicked() {

    let cellIndex = this.getAttribute('cellIndex')
    if(options[cellIndex] != '' || !running) {
        return;
    }else {
        updateCell(this, cellIndex);
        checkWinner();
    } 
}

function updateCell(cell, index) {
    options[index] = currentPlayer;
    cell.textContent = currentPlayer;
}

function changePlayer() {
    currentPlayer =  (currentPlayer == 'X'? "O": "X");
    statusText.textContent =  `${currentPlayer}'s turn!`

}

function checkWinner() {
    let roundWon = false;
    for( let i = 0; i < winConditions.length; i++) {
        let condition = winConditions[i];
        let cellA = options[condition[0]];
        let cellB = options[condition[1]];
        let cellC = options[condition[2]];

        if(cellA =='' || cellA =='' || cellA =='') {
            continue;
        }

        if(cellA == cellB && cellB == cellC) {
            roundWon = true;
            break;
        } 
    }

    if(roundWon) {
        statusText.textContent = `${currentPlayer} won!`
        running = false;
    } else if(!options.includes('')) {
        statusText.textContent = `Draw!`;
        running = false;
    }else{
        changePlayer()
    }
}

function restartGame() {
    
    setInterval(function() {
        statusText.textContent += '.'
    }, 1000)

    

    setTimeout(function() {
         location.reload();
    }, 3000)
   /* currentPlayer = 'X';
    let options = ['', '', '', '', '', '', '', '', ''];
    statusText.textContent = `${currentPlayer}'s turn!`;
    cells.forEach(cell => cell.textContent = '');
    running = true;*/
}

