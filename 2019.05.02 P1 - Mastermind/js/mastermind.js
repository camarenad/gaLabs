var secretCode, userGuess, whiteCount, blackCount, secretCodeLength, digitRange;

secretCodeLength = 4;
digitRange = 4;

// 1. click handlers and accompanying functions to record user input and reset the game
$('#submitGuess').click(handleSubmit);
$('#resetGame').click(handleReset);

// 2. error handling for invalid inputs (e.g. blank fields or non numeric characters)

function initializeGame() {
    generateCode();
    // console.log('sc ' + secretCode);
}

// 3. code generator - done
function generateCode() {
    secretCode = [];
    for (var num = 0; num < secretCodeLength; num++) {
        secretCode.push(Math.floor(Math.random() * digitRange) + 1);
    }
    
    return secretCode;
}

function handleSubmit() {
    userGuess = getGuess();
    blackCount = getBlackCount(secretCode, userGuess);
    whiteCount = getWhiteCount(blackCount);
    // console.log('render ug ' + userGuess);
    // console.log('render bc ' + blackCount);
    // console.log('render wc ' + whiteCount);
    render();
}

function handleReset() {
    
}

function getGuess() {
    var guess = [];
    for (var num = 1; num < 5; num++) {
        guess.push(parseInt($('#input' + num).val()));
    }
    
    // console.log('guess ' + guess);
    return guess;
}

function getBlackCount(secretCode, userGuess) {
    var blackCount = 0;
    for (var i = 0; i < secretCode.length; i++) {
        if (secretCode[i] == userGuess[i]) {
            blackCount++;
        }
        // secretCode[i] == userGuess[i] ? blackCount++ : blackCount = blackCount;
    }
    
    // console.log('bc ' + blackCount);
    return blackCount;
}

function getWhiteCount(blackCount) {
    var code = secretCode.slice();
    // console.log('code ' + code);
    // console.log('ug in gwc ' + userGuess);
    
    var whiteCount = 0;
    for (var i = 0; i < secretCode.length; i++) {
        if (userGuess[i] in code) {
            whiteCount++;
            code.splice(code.indexOf(userGuess));
        }
    }
    
    // console.log('wc initial ' + whiteCount);
    return whiteCount - blackCount;
}

function render() {
    
}


// 5. function to iterate through guess and code to determine how many elements the two share in the correct position (this will generate the black dot count)

// 6. function to subtract black dot count from white dot count (this will set the final white dot count)



// 7. function to append the guess div with most recent guess


// 8. function to append the feedback div with the appropriate dots


// 9. this goes on until the player guesses the correct code or gives up


// 10. some message of congratulations if correct code guessed 

// generateCode();

initializeGame();