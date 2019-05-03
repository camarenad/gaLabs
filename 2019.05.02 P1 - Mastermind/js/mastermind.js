// variables I'll need:
var secretCode, userGuess, whiteCount, blackCount, codeLength, digitRange

// 1. click handlers and accompanying functions to record user input and reset the game
// $('#submitGuess').click(getGuess);
$('#submitGuess').click(render);

// 2. error handling for invalid inputs (e.g. blank fields or non numeric characters)

function initializeGame() {
    generateCode();
    console.log('sc ' + secretCode);
    console.log('ug ' + userGuess);
}

function render() {
    getWhiteCount(getBlackCount(secretCode, getGuess()));
}

// 3. code generator - done
function generateCode() {
    secretCode = [];
    for (var num = 0; num < 4; num++) {
        secretCode.push(Math.floor(Math.random() * 4) + 1);
    }

    // return secretCode;
}

// guess recorder
function getGuess() {
    var guess = [];
    for (var num = 1; num < 5; num++) {
        guess.push(parseInt($('#input' + num).val()));
    }

    console.log('guess ' + guess);
    return guess;
}

// 4. function to iterate through guess and code to determine how many elements the two share (this will set the initial white dot count)
function getWhiteCount(blackCount) {
    var code = secretCode;
    console.log('code ' + code);
    console.log('ug in gwc ' + userGuess);

    var whiteCount = 0;
        for (var i = 0; i < secretCode.length; i++) {
            if (userGuess[i] in code) {
                whiteCount++;
                code.splice(code.indexOf(userGuess));
            }
        }

    console.log('wc' + whiteCount);
    return whiteCount - blackCount;
}


// 5. function to iterate through guess and code to determine how many elements the two share in the correct position (this will generate the black dot count)
function getBlackCount(secretCode, userGuess) {
    var blackCount = 0;
        for (var i = 0; i < secretCode.length; i++) {
            secretCode[i] == userGuess[i] ? blackCount++ : blackCount = blackCount;
        }
    
    console.log('bc ' + blackCount);
    return blackCount;
}

// 6. function to subtract black dot count from white dot count (this will set the final white dot count)



// 7. function to append the guess div with most recent guess


// 8. function to append the feedback div with the appropriate dots


// 9. this goes on until the player guesses the correct code or gives up


// 10. some message of congratulations if correct code guessed 

// generateCode();

initializeGame();