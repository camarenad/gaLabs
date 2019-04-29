$(document).ready(function() {

    $(".guessInputSection, #resetGame, #guessList").hide();
    $("#resetGame").click(function() {
        startGame();
    });

    $("#setGameParameters").click(function() {
        if ($("#setSmallestNum").val() !== $("#setBiggestNum").val()) {
            game.smallestNum = parseInt($("#setSmallestNum").val());
            game.biggestNum = parseInt($("#setBiggestNum").val());
        } else {
            $("#responseToGuess").html("Please enter min and max values that are at least 1 apart.");
        }
        
        $(".guessInputSection, #resetGame").show();
        $("#setGameParameters").hide();
        game.play();
        console.log(game.secretNum);
    });

    $("#submitGuess").click(function() {
        game.render($("#guessInput").val());
        console.log($("#guessInput").val());
        $("#guessCount").html("So far, you've made " + game.guessCount + " guesses:");
        $("#guessList").show();
    });

    function startGame() {
        $(".guessInputSection, #resetGame").hide();
        $("#setGameParameters").show();
        $("#responseToGuess, #guessList, #guessCount").html('');
        $("#setSmallestNum, #setBiggestNum").val('');    
    }

    function updateGuessTracker() {
        $("#guessList").append("<p> " + $("#guessInput").val() + " </p>");
        game.guessCount++;
    }

    const game = {
        title: 'Guess the Number!',
        biggestNum: null,
        smallestNum: null,
        secretNum: null,
        guessCount: 0,

        errorAlert: function(guess, errorString) {
            $("#responseToGuess").html("Sorry, " + guess + " is " + errorString + ".");
        },

        render: function (guess) {
            if (guess > this.biggestNum || guess < this.smallestNum) {
                $("#responseToGuess").html("Invalid entry. Please enter a number between " + this.smallestNum + " and " + this.biggestNum + ".");
            } else if (guess == this.secretNum) {
                updateGuessTracker();
                $("#responseToGuess").html("Congrats! You guessed the number in " + this.guessCount + " guesses!");
                // NOTE: figure out how to get ternary operators to work in HTML.
                // $("#responseToGuess").html("Congrats! You guessed the number in " + this.guessCount + this.guessCount !== 1 ? "guesses" : "guess" + "!");
            } else {
                if (guess > this.secretNum) {
                    updateGuessTracker();
                    this.errorAlert(guess, 'too high');
                } else if (guess < this.secretNum) {
                    updateGuessTracker();
                    this.errorAlert(guess, 'too low');
                } 
            }
        },

        getGuess: function() {
            var currentGuess = parseInt($("#guessInput"));
            return currentGuess;
        },

        play: function() {
            this.secretNum = Math.floor(Math.random() * (this.biggestNum - this.smallestNum + 1)) + this.smallestNum;
            this.render(this.getGuess());
        },
    }
});