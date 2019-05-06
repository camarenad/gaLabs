// don't forget to add the number to the color in the feedback rows

var secretCodeLength, digitRange, secretCode, userGuess, whiteCount, blackCount, turn;

secretCodeLength = 4;
digitRange = 4;

// 1. click handlers and accompanying functions to record user input and reset the game
$('#submitGuess').click(handleSubmit);
$('#resetGame').click(handleReset);

// 2. error handling for invalid inputs (e.g. blank fields or non numeric characters)

function initializeGame() {
    generateCode();
    console.log('sc ' + secretCode);
    generateInputFields();
    appendSecretCode();
    turn = 0;

}

// 3. code generator - done
function generateCode() {
    secretCode = [];
    for (var num = 0; num < secretCodeLength; num++) {
        secretCode.push(Math.floor(Math.random() * digitRange) + 1);
    }
    
    return secretCode;
}

function generateInputFields() {
    $('.ipc').remove();
    for (var i = 1; i <= secretCodeLength; i++) {
        $('#inputContainer').append(`<div class="ipc"><input id="input${i}" minlength="1" maxlength="1" class="userInput"></div>`);
    }
}

function handleSubmit() {
    turn++;
    userGuess = getGuess();
    blackCount = getBlackCount();
    whiteCount = getWhiteCount();
    render();
}

function handleReset() {
    initializeGame();
}

function render() {
    createNewFeedbackRow();
    appendFeedbackToRow();
}

function getGuess() {
    var guess = [];
    for (var num = 1; num < 5; num++) {
        guess.push(parseInt($('#input' + num).val()));
    }
    
    // console.log('guess ' + guess);
    return guess;
}

function getBlackCount() {
    var blackCount = 0;
    for (var i = 0; i < secretCodeLength; i++) {
        if (secretCode[i] == userGuess[i]) {
            blackCount++;
        }
        // secretCode[i] == userGuess[i] ? blackCount++ : blackCount = blackCount;
    }
    
    // console.log('bc ' + blackCount);
    return blackCount;
}

function getWhiteCount() {
    var code = secretCode.slice();
    // console.log('gwc sc ' + secretCode);
    // console.log('gwc code ' + code);
    // console.log('code ' + code);
    // console.log('ug in gwc ' + userGuess);
    
    whiteCount = 0;
    for (var i = 0; i < secretCodeLength; i++) {
        if (code.includes(userGuess[i])) {
            // console.log(code + ' includes ' + userGuess[i]);
            whiteCount++;
            // console.log('gwc for if wc ' + whiteCount);
            code.splice(code.indexOf(userGuess[i]), 1);
            // console.log('gwc for if spliced code is ' + code);

        }
        // console.log('gwc for code ' + code);
    }
    
    // console.log('wc initial ' + whiteCount);
    return whiteCount - blackCount;
}

function createNewFeedbackRow() {
    $('#feedbackContainer').append(`
        <div class="turnFeedback tf${turn}">
            <div class="guessContainer gc${turn}"></div>
            <div class="spacer"></div>
            <div class="dotContainer dc${turn}">
                <div class="blackContainer bc${turn}"></div>
                <div class="whiteContainer wc${turn}"></div>
            </div>
        </div>
    `)
}

function appendFeedbackToRow() {
    appendGuess();
    appendBlackDots();
    appendWhiteDots();
}

function appendSecretCode() {
    // $('#secretCodeContainer').innerHTML = '';
    // above line does not work for some reason

    $('.mysteryPeg').remove();
    for (var i = 0; i < secretCodeLength; i++) {
        $('#secretCodeContainer').append('<div class="mysteryPeg">?</div>');
    }
}

function appendGuess() {
    for (var i = 0; i < secretCodeLength; i++) {
        $(`.gc${turn}`).append(`<div class="guessPeg guessPeg${userGuess[i]}">${userGuess[i]}</div>`);
    }
}

function appendBlackDots() {
    for (var i = 0; i < blackCount; i++) {
        $(`.bc${turn}`).append(`<div class="black dot"></div>`);
    }
}
function appendWhiteDots() {
    for (var i = 0; i < whiteCount; i++) {
        $(`.wc${turn}`).append(`<div class="white dot"></div>`);
    }
}

initializeGame();