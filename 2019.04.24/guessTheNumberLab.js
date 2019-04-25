const game = {
    title: 'Guess the Number!',
    biggestNum: null,
    smallestNum: null,
    secretNum: null,
    prevGuesses: [],
    guessCount: 0,
    
    setSecretNumberRange: function() {
        this.smallestNum = parseInt(prompt('Set Game Parameter - Please choose smallest number in guess range.'));
        this.biggestNum = parseInt(prompt('Set Game Parameter - Please choose biggest number in guess range.'));
    },
    
    increment: function(guess) {
        this.guessCount++;
        this.prevGuesses.push(guess);
    },

    successAlert: function() {
        alert(`Congrats! You guessed the number in ${this.guessCount} ${this.guessCount !== 1 ? "guesses" : "guess"}!`);
    },

    errorAlert: function(guess, errorString) {
        alert(`Sorry, ${guess} is ${errorString}. So far, you've made ${this.guessCount} ${this.guessCount !== 1 ? "guesses" : "guess"}: ${this.prevGuesses.join(', ')}`);
    },

    render: function (guess) {
        if (isNaN(guess) || guess > this.biggestNum || guess < this.smallestNum) {
            alert(`Invalid entry. Please enter a number between ${this.smallestNum} and ${this.biggestNum}`);
            this.render(this.getGuess());
        } else if (guess === this.secretNum) {
            this.successAlert();
        } else {
            if (guess > this.secretNum) {
                this.increment(guess);
                this.errorAlert(guess, 'too high');
                this.render(this.getGuess());
            } else if (guess < this.secretNum) {
                this.increment(guess);
                this.errorAlert(guess, 'too low');
                this.render(this.getGuess());
            } 
        }
    },
    
    getGuess: function() {
        var currentGuess = parseInt(prompt(`Enter a guess between ${this.smallestNum} and ${this.biggestNum}. Enter ${this.stopGameTrigger} to give up.`));
        return currentGuess;
    },

    play: function() {
        this.setSecretNumberRange();
        this.secretNum = Math.floor(Math.random() * (this.biggestNum - this.smallestNum + 1)) + this.smallestNum;
        this.render(this.getGuess());
    },
};