// don't forget to add the number to the color in the feedback rows

var secretCodeLength, digitRange, secretCode, userGuess, whiteCount, blackCount, turn;


secretCodeLength = 4;
digitRange = 4;

// var codeCap = $('#codeLength').val();

$('#submitGuess').click(handleSubmit);
$('#resetGame').click(handleReset);

// 2. error handling for invalid inputs (e.g. blank fields or non numeric characters)

function initializeGame() {
    generateSecretCode();
    console.log('sc ' + secretCode);
    generateInputFields();
    appendSecretCode();
    clearFeedback();
    initializeKeyListeners();
    $('#input1').focus();
    turn = 0;
}

function generateSecretCode() {
    console.log('gsc sc length ' + secretCodeLength);
    console.log('gsc digit range ' + digitRange);
    secretCode = [];
    for (var num = 0; num < secretCodeLength; num++) {
        secretCode.push(Math.floor(Math.random() * digitRange) + 1);
    }
    
    return secretCode;
}

function generateInputFields() {    
    $('#inputContainer').html('');

    for (var i = 1; i <= secretCodeLength; i++) {
        $('#inputContainer').append(`<input id="input${i}" type="text" minlength="1" maxlength="1" class="userInput">`);
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
    secretCodeLength = parseInt($('#chooseSecretCodeLength').val());
    digitRange = parseInt($('#chooseDigitRange').val());
    initializeGame();
}

function render() {
    createNewFeedbackRow();
    appendFeedbackToRow();
    generateInputFields();
    initializeKeyListeners();
    $('#input1').focus();
}

function getGuess() {
    var guess = [];
    for (var num = 1; num < 5; num++) {
        // if ($('#input' + num).val().keyCode == 49) {
            guess.push(parseInt($('#input' + num).val()));
        // }
    }

    return guess;
}

function getBlackCount() {
    var blackCount = 0;
    for (var i = 0; i < secretCodeLength; i++) {
        if (secretCode[i] == userGuess[i]) {
            blackCount++;
        }
    }

    return blackCount;
}

function getWhiteCount() {
    var code = secretCode.slice();
    
    whiteCount = 0;
    for (var i = 0; i < secretCodeLength; i++) {
        if (code.includes(userGuess[i])) {
            whiteCount++;
            code.splice(code.indexOf(userGuess[i]), 1);
        }
    }

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
    $('#secretCodeContainer').html('');

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

function clearFeedback() {
    $('#feedbackContainer').html('');
}

initializeGame();

function initializeKeyListeners() {
    $('.userInput').keyup(function() {
        if ($(this).val()) {
            $(this).next().focus();
        }
    });
    
    $('.userInput').keyup(function(event) {
        if (event.keyCode == 8) {
            $(this).prev().focus();
        }
    });

    $('.userInput').keyup(function(event) {
        if (event.keyCode == 13) {
            handleSubmit();
        }
    });

    // $('.userInput').onblur(function() {
    //     if ($(this).val() == 'a') { // not email
    //         alert('huh');
    //     //   input.classList.add('invalid');
    //     //   error.innerHTML = 'Please enter a correct email.'
    //     }
    // });
}

for (var i = 1; i < 10; i++) {
    $('#chooseSecretCodeLength').append(`<option value="${i}">${i}</option>`);
    $('#chooseDigitRange').append(`<option value="${i}">${i}</option>`);
    // var selected = (i == codeLength) ? "selected" : "";
}

