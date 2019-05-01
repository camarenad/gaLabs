var player

var winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
];    

var xBoard = [null, null, null, null, null, null, null, null, null];
var oBoard = [null, null, null, null, null, null, null, null, null];
var board = [null, null, null, null, null, null, null, null, null];

var boxes = document.querySelectorAll('td div');

document.querySelector('#resetGame').addEventListener('click', initGame);


function handleClick(event) {
    var idx = parseInt(event.target.id.replace('box', ''));
    board[idx] = 1;
    if (player === 1) {
        xBoard[idx] = 1;
    } else {
        oBoard[idx] = 1;
    }

    render();
    getWinner();
}

function initGame() {
    clearBoard();
    player = 1;
    $('#turnIndicator').html('Player One Turn');
    document.querySelector('table').addEventListener('click', handleClick);
}

function render() {;
    // console.log('entering render')
    // console.log(event.target.innerHTML)
    if (event.target.innerHTML === '<div></div>') {
        if (player == 1) {
            event.target.innerHTML = '<div>X</div>';
            $('#turnIndicator').html('Player Two Turn');
        } else {
            event.target.innerHTML = '<div>O</div>';
            var idx = parseInt(event.target.id.replace('box', ''));
            $('#turnIndicator').html('Player One Turn');
        }
        player *= -1;
    }
}

function add(accumulator, a) {
    return accumulator + a;
}

function clearBoard() {
    $('table div').html('');
    xBoard = [null, null, null, null, null, null, null, null, null];
    oBoard = [null, null, null, null, null, null, null, null, null];
    board = [null, null, null, null, null, null, null, null, null];
}

function getWinner() {
    for (var i = 0; i < winningCombinations.length; i++) {
        if (Math.abs(xBoard[winningCombinations[i][0]] + xBoard[winningCombinations[i][1]] + xBoard[winningCombinations[i][2]]) === 3) {
            $('#turnIndicator').html('Congrats Player One!');
            document.querySelector('table').removeEventListener('click', handleClick);
        } 
    }
    for (var i = 0; i < winningCombinations.length; i++) {
        if (Math.abs(oBoard[winningCombinations[i][0]] + oBoard[winningCombinations[i][1]] + oBoard[winningCombinations[i][2]]) === 3) {
            $('#turnIndicator').html('Congrats Player Two!');
            document.querySelector('table').removeEventListener('click', handleClick);
        }
    }
    for (var i = 0; i < winningCombinations.length; i++) {
        if (board.reduce(add) == 9) {
            $('#turnIndicator').html('Rats, another tie!');
        }
    }
}

initGame();