(function() {

    // function initializeGame(){
    var board = new Array(9).fill(null);
    
    var players = {
		'1': {
			name: 'One',
			score: 0
		},
		'-1': {
			name: 'Two',
			score: 0
		}
	};
    console.log('game init');
    // }
    
    var board = new Array(9).fill(null);

    var neededToWin = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [2, 5, 7],
        [5, 7, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];

    $('#resetGame').click(function() {
        initializeGame();
    });

    var handleClick = $('#board').click(function(event){
        if (player === 0) {
            event.target.innerHTML = 'X';
            document.getElementById('turnIndicator').innerHTML = 'Player Two Turn'
            player ++;
            event.target.style.pointerEvents.none;
            board[event.target] = '1'
            console.log(board)
            console.log('et ' + event.target)
        } else {
            event.target.innerHTML = 'O';
            document.getElementById('turnIndicator').innerHTML = 'Player One Turn'
            board[event.target] = '1'
            player --;
            console.log(board)
        }
    });
    
    var addBoardListen = document.getElementById('board', handleClick);

    addBoardListen.addEventListener('click', function(event){

    });



    // $('#board').click(function(evt){
    //     handleClick();
    //     console.log('click');
    // });


    // function handleClick(event) {
    //     if (player === 0) {
    //         evt.target.innerHTML = 'X';
    //         document.getElementById('turnIndicator').innerHTML = 'Player Two Turn'
    //         // board[event.target] = '1'
    //         player ++;
    //     } else {
    //         evt.target.innerHTML = 'O';
    //         document.getElementById('turnIndicator').innerHTML = 'Player One Turn'
    //         // board[event.target] = '1'
    //         player --;
    //     }
    // }

    // initializeGame();

})();